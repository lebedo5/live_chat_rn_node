import { Image, Pressable, View } from 'react-native';
import { LogoIcon } from '../elements/icons/LogoIcon';
import { NotificationIcon } from '../elements/icons/NotificationIcon';
import React from 'react';
import { useStyle } from './assets/header-with-avatar-styles';
import { useTheme } from '../../hooks/theme';
import { useNavigation } from '@react-navigation/native';
import routes from '../../navigations/routes';
import { useSelector } from 'react-redux';
import { getUserProfileSelector } from '../../store/selectors/user-selectors';
import emptyProfilePhoto from '../../assets/images/emptyProfilePhoto.png';

export const HeaderWithAvatar = () => {
    const { themeValue } = useTheme();
    const styles = useStyle(themeValue);
    const navigation = useNavigation<any>();
    const userInfo = useSelector(getUserProfileSelector);

    const goToProfile = () => {
        navigation.navigate(routes.userFlow.UserProfile);
    };

    return (
        <View style={styles.headerContainer}>
            <View style={styles.wrap}>
                <Pressable style={styles.image} onPress={goToProfile}>
                    <Image
                        style={styles.image}
                        source={
                            userInfo?.imagesUrl
                                ? {
                                      uri: userInfo?.imagesUrl,
                                  }
                                : emptyProfilePhoto
                        }
                    />
                </Pressable>
                <LogoIcon width={92} height={44} color={themeValue.blue} />
                <Pressable style={styles.notificationButton} />
            </View>
        </View>
    );
};
