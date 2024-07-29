import React, { FC, useCallback, useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView } from 'react-native';
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
import InputFields from '../../../../components/forms/components/InputFields';
import { Button } from '../../../../components/buttons/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '../SignUp/schema/signupSchema';
import { SignUpFormData } from '../SignUp/SignUpScreen';
import { validationSchema } from './schema';

interface LoginFormData {
    email: string;
    password: string;
}

const LoginScreen: FC = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { themeValue } = useTheme();
    const styles = useStyles(themeValue);

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        mode: 'onSubmit',
        resolver: yupResolver(validationSchema),
    });

    const handleAuthorize = useCallback(async () => {
        setIsLoading(true);
        try {
        } catch (error) {
            console.log('error login', error);
        }
        setIsLoading(false);
    }, []);

    const loginConfirm = async (data: any) => {
        try {
           await dispatch(login(data));

        }catch (error) {

        }
    }

    return (
        <Layout bgColor={themeValue.lightBlue}>
            <View style={styles.rootContainer}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                    <ScrollView contentContainerStyle={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
                        <InputFields
                            control={control}
                            name={'email'}
                            inputProps={{
                                placeholder: 'Email',
                            }}
                            error={errors.email?.message}
                        />
                        <InputFields
                            control={control}
                            name={'password'}
                            inputProps={{
                                placeholder: 'Password',
                            }}
                            error={errors.password?.message}
                        />

                        <Button title={'Login'} onPress={handleSubmit(loginConfirm)} />
                        <Pressable>
                            <Text>Sign Up</Text>
                        </Pressable>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </Layout>
    );
};

export default LoginScreen;
