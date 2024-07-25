import React, { FC, useCallback, useState } from 'react';
import { Pressable } from 'react-native';
import { View } from 'react-native';
import { useDispatch } from '../../../../hooks/dispatch';
import { login } from '../../../../store/thunks/auth-thunks';
import { LogoIcon } from '../../../../components/elements/icons/LogoIcon';
import { useTheme } from '../../../../hooks/theme';
import { useStyles } from './assets/login-screen-style';
import { Text } from '../../../../components/text/Text';
import Layout from '../../../../components/Layout';
import { width } from '../../../../consts';
import SubmitButton from '../../../../components/buttons/SubmitButton';
import { ArrowRightIcon } from '../../../../components/elements/icons/ArrowRightIcon';
import { useNavigation } from '@react-navigation/native';
import routes from '../../../../navigations/routes';

const LoginScreen: FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { themeValue } = useTheme();
    const styles = useStyles(themeValue);

    const handleAuthorize = useCallback(async () => {
        setIsLoading(true);
        try {
            // await dispatch(login());
        } catch (error) {
            console.log('error login', error);
        }
        setIsLoading(false);
    }, []);

    return (
        <Layout bgColor={themeValue.lightBlue}>
            <View style={styles.rootContainer}>
                <View style={styles.logoBlock}>
                    <LogoIcon width={163} height={80} color={themeValue.blue} />
                </View>
                <View
                    style={{
                        width: width - 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text boldFont style={styles.title}>
                        A purely private experience
                    </Text>
                    <Text style={styles.descriptionText}>
                        This is a possible description paragraph placeholder,
                        not using to much lines.
                    </Text>
                    <SubmitButton
                        isSubmitting={isLoading}
                        handleSubmit={handleAuthorize}
                        buttonText={'Get Started'}
                    />
                    <View style={styles.subBlock}>
                        <Text style={styles.subText}>Customer Only App</Text>
                        <Pressable
                            style={styles.linkBlock}
                            onPress={() =>
                                navigation.navigate(routes.BecomeCustomer)
                            }>
                            <Text boldFont style={styles.linkText}>
                                become a customer
                            </Text>
                            <Text style={styles.arrowBlock}>
                                <ArrowRightIcon height={14} color={'#000000'} />
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Layout>
    );
};

export default LoginScreen;
