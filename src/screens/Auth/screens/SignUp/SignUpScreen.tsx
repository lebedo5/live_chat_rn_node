import Layout from '../../../../components/Layout';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../../../hooks/theme';
import { useStyles } from './assets/sign-up-style';
import InputFields from '../../../../components/forms/components/InputFields';
import { useDispatch } from '../../../../hooks/dispatch';
import { useForm } from 'react-hook-form';
import { signupSchema } from './schema/signupSchema';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../../../components/buttons/Button';
import { Text } from '../../../../components/text/Text';
import { useNavigation } from '@react-navigation/native';
import routes from '../../../../navigations/routes';
import { signup } from '../../../../store/thunks/auth-thunks';

export interface SignUpFormData {
    name: string;
    email: string;
    password: string;
}

const SignUpScreen = () => {
    const { themeValue } = useTheme();
    const styles = useStyles(themeValue);
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        mode: 'onSubmit',
        resolver: yupResolver(signupSchema),
    });

    const signupConfirm = async (data) => {
        try {

            await dispatch(signup(data))
        } catch (error) {

        }
    }

    console.log('errors', errors)

    return (
        <Layout bgColor={themeValue.lightBlue}>
            <View style={styles.rootContainer}>
               <KeyboardAvoidingView
               behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                   <ScrollView contentContainerStyle={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
                       <InputFields
                           control={control}
                           name={'name'}
                           inputProps={{
                               placeholder: 'First Name',
                           }}
                           error={errors.name?.message}
                       />
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

                       <Button title={'Sign Up'} onPress={handleSubmit(signupConfirm)} />
                       <Pressable onPress={() => navigation.navigate(routes.registration.Login)}>
                           <Text>Login</Text>
                       </Pressable>
                   </ScrollView>
               </KeyboardAvoidingView>
            </View>
        </Layout>
    )
}

export default SignUpScreen
