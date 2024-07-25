import { ThemeType } from '../../theme';
import { StyleSheet } from 'react-native';
import { isAndroid, isSmallDevice, width } from '../../consts';

export const useStyles = (theme: ThemeType) => {
    return StyleSheet.create({
        wrapComponent: {
            flexDirection: 'column',
            width: '100%',
        },
        block: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        blockAlight: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
        },
        root: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            paddingHorizontal: 16,
            paddingBottom: 23,
            width: width - 40,
        },
        labelBlock: {
            position: 'absolute',
            width: width - 40,
            alignItems: 'center',
        },
        labelWrap: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 13,
            paddingVertical: 5,
        },
        labelText: {
            fontSize: 11,
            color: theme.blue,
            textTransform: 'uppercase',
            marginLeft: 5,
        },
        countryBlock: {
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        countryWrap: {
            width: 100,
        },
        countryName: {
            color: theme.secondFontColor,
            fontSize: 14,
            fontWeight: '400',
            textAlign: 'center',
            width: 100,
            marginTop: -10,
        },
        countryNamItem: {
            color: theme.secondFontColor,
            fontSize: 14,
            fontWeight: '400',
            textAlign: 'center',
        },
        time: {
            color: theme.secondFontColor,
            fontSize: 14,
            fontWeight: '400',
            marginTop: 14,
            width: 100,
            textAlign: 'center',
        },
        dayArrival: {
            fontSize: 14,
            color: theme.secondFontColor,
        },
        countryIcaoCode: {
            color: theme.blue,
            fontSize: isSmallDevice ? 21 : 25,
            width: 100,
            textAlign: 'center',
        },
        designElementBlock: {
            alignItems: 'center',
            height: 42,
            justifyContent: 'space-between',
            marginTop: 8,
        },
    });
};
