import { Pressable, View } from 'react-native';
import { Text } from './text/Text';
import { CheckIcon } from './elements/icons/CheckIcon';
import { FlightElement } from '../screens/Dashboard/elements/FlightElement';
import React, { useCallback, useMemo } from 'react';
import { useStyles } from './assets/flight-item-styles';
import { useTheme } from '../hooks/theme';
import { calculateInLocalTime } from '../helpers/format-date';
import { ClockIcon } from './elements/icons/ClockIcon';
import { useNavigation } from '@react-navigation/native';
import routes from '../navigations/routes';
import { FlightsProps, FlightStatus } from '../types/flights';
import { isAndroid } from '../consts';

interface FlightItemProps {
    item: any;
    tabType?: string;
    onPress?: () => void;
}

export const FlightItem = ({ item, tabType }: FlightItemProps) => {
    const { themeValue } = useTheme();
    const styles = useStyles(themeValue);
    const navigation = useNavigation<any>();
    const goToFlightDetail = () => {
        if (Boolean(tabType)) {
            navigation.navigate(routes.userFlow.FlightDetails, {
                flightId: item?.id,
                departureTimeZone: item?.originAirport?.timeZone,
                arrivalTimeZone: item?.destinationAirport?.timeZone,
                tabType: tabType,
            });
        }
    };

    const isFlightLabel = (item: FlightsProps) => {
        if (tabType === 'requested') {
            return (
                <View
                    style={[
                        styles.labelWrap,
                        { backgroundColor: themeValue.skyColor },
                    ]}>
                    <ClockIcon width={13} height={13} color={themeValue.blue} />
                    <Text style={styles.labelText}>
                        {item?.trip?.jetCard || item?.trip?.membership
                            ? 'Preparing Trip'
                            : 'Preparing Options'}
                    </Text>
                </View>
            );
        } else {
            return (
                <View
                    style={[
                        styles.labelWrap,
                        { backgroundColor: themeValue.lightGreen },
                    ]}>
                    <CheckIcon width={12} height={8} color={themeValue.blue} />
                    <Text style={styles.labelText}>confirmed</Text>
                </View>
            );
        }
    };

    const separateBlockTime = useCallback(() => {
        if (!item?.flightTime) {
            return '';
        }
        const [hours, minutes] = item?.flightTime?.split(':').map(Number);
        return hours + 'h' + ' ' + minutes + 'm';
    }, [item]);

    const isLabelForPreparingFlight =
        tabType === 'requested' && item.status === FlightStatus.PREPARING;

    const isLabelForScheduledFlight =
        tabType === 'scheduled' && item.status === FlightStatus.CONFIRMED;

    return (
        <Pressable
            onPress={goToFlightDetail}
            key={item?.id}
            style={[
                styles.root,
                {
                    paddingTop: tabType === 'past_trip' ? 20 : 40,
                },
            ]}>
            {isLabelForPreparingFlight ? (
                <View style={styles.labelBlock}>{isFlightLabel(item)}</View>
            ) : null}
            {isLabelForScheduledFlight ? (
                <View style={styles.labelBlock}>{isFlightLabel(item)}</View>
            ) : null}
            <View style={styles.wrapComponent}>
                <View style={styles.block}>
                    <Text boldFont style={styles.countryIcaoCode}>
                        {item?.originAirport?.icaoCode ||
                            item?.originAirport?.iataCode ||
                            item?.originAirport?.faaCode}
                    </Text>
                    <View style={styles.countryBlock}>
                        <View style={styles.designElementBlock}>
                            <FlightElement />
                            <Text style={styles.countryNamItem}>
                                {separateBlockTime()}
                            </Text>
                        </View>
                    </View>
                    <Text boldFont style={styles.countryIcaoCode}>
                        {item?.destinationAirport?.icaoCode ||
                            item?.destinationAirport?.iataCode ||
                            item?.destinationAirport?.faaCode}
                    </Text>
                </View>
                <View style={styles.block}>
                    <Text numberOfLines={2} style={styles.countryName}>
                        {item?.originAirport?.city}
                    </Text>
                    <Text numberOfLines={2} style={[styles.countryName]}>
                        {item?.destinationAirport?.city}
                    </Text>
                </View>
                <View style={styles.blockAlight}>
                    <Text style={styles.time}>
                        {calculateInLocalTime(
                            item?.departureInstant,
                            item?.originAirport?.timeZone,
                            'h:mmaaa',
                        )}
                    </Text>
                    <Text boldFont style={styles.dayArrival}>
                        {calculateInLocalTime(
                            item?.departureInstant,
                            item?.originAirport?.timeZone,
                            'EEE, MMM dd, yyyy',
                        )}
                    </Text>
                    <Text style={styles.time}>
                        {calculateInLocalTime(
                            item?.arrivalInstant,
                            item?.destinationAirport?.timeZone,
                            'h:mmaaa',
                        )}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};
