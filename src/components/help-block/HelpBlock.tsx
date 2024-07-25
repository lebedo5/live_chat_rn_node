import { Text } from '../text/Text';
import { Pressable, View } from 'react-native';
import routes from '../../navigations/routes';
import { SupportIcon } from '../bottom-nav-bar/assets/icons/SupportIcon';
import React from 'react';
import { useStyles } from '../assets/help-block-style';
import { useTheme } from '../../hooks/theme';
import { useNavigation } from '@react-navigation/native';

export const HelpBlock = () => {
    const { themeValue } = useTheme();
    const styles = useStyles(themeValue);
    const navigation = useNavigation<any>();
    return (
        <View style={styles.supportContainer}>
            <Text boldFont style={styles.supportText}>
                Need Help?
            </Text>
            <Text style={styles.supportDescription}>
                Contact us for ground support, catering questions , pet travel
                and more
            </Text>
            <Pressable
                onPress={() => navigation.navigate(routes.userFlow.Support)}
                style={styles.contactUsButton}>
                <SupportIcon color={themeValue.secondFontColor} />
                <Text style={styles.contactUsText}>get in touch</Text>
            </Pressable>
        </View>
    );
};
