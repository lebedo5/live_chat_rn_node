import React, { PropsWithChildren, ForwardedRef, useState } from 'react';
import {
    TextInput as RNTextInput,
    TextInputProps,
    View,
    TextStyle,
    Pressable,
    ViewStyle,
} from 'react-native';
import { Control, useController } from 'react-hook-form';
import { useStyles } from './assets/input-field-style';
import theme from '../../../theme/default-theme';
import { Text } from '../../text/Text';
import { isAndroid, width } from '../../../consts';

interface InputFieldProps<C> {
    control: C;
    error?: any;
    name: string;
    inputProps?: TextInputProps;
    successIcon?: boolean;
    inputTextAlign?: string;
    label?: string;
    inputBlockStyle?: ViewStyle;
    inputStyle?: TextStyle;
    icon?: React.ReactNode;
    iconAction?: () => void;
    secureTextEntry?: boolean;
    halfScreen?: boolean;
    onPressIn?: () => void;
    multiline?: boolean;
    labelText?: TextStyle;
    labelBlock?: ViewStyle;
    notEditable?: boolean;
    toggleModal?: () => void;
}

type Props<C> = InputFieldProps<C>;

const InputField = React.forwardRef(
    <C extends Control<any>>(
        {
            error,
            control,
            name,
            inputProps,
            label,
            inputBlockStyle,
            inputStyle,
            children,
            icon,
            iconAction,
            secureTextEntry = false,
            halfScreen = false,
            multiline = false,
            labelText,
            labelBlock,
            notEditable = false,
            toggleModal,
        }: PropsWithChildren<Props<C>>,
        ref: ForwardedRef<RNTextInput>,
    ) => {
        const styles = useStyles(theme);
        const [isSecure, setIsSecure] = useState<boolean>(secureTextEntry);

        const toggleSecureText = () => {
            setIsSecure(!isSecure);
        };

        const { field } = useController({
            control,
            defaultValue: '',
            name,
        });

        const inputBlockStyles = Object.assign(
            {},
            halfScreen ? { width: (width - 40) / 2 } : styles.loginInputBlock,
            inputBlockStyle,
        );

        const inputStyles = Object.assign({}, inputStyle, styles.loginInput);
        const inputStylesHalf = Object.assign({}, inputStyle, styles.halfInput);

        return (
            <View
                style={[
                    { marginBottom: 10 },
                    halfScreen && { width: (width - 55) / 2 },
                ]}>
                <>
                    <Pressable onPress={toggleModal} style={inputBlockStyles}>
                        {Boolean(label?.length) && (
                            <View
                                style={
                                    labelBlock ? labelBlock : styles.loginLabel
                                }>
                                <Text
                                    boldFont={Boolean(labelText)}
                                    style={
                                        labelText
                                            ? labelText
                                            : styles.loginLabelText
                                    }>
                                    {label}
                                </Text>
                            </View>
                        )}
                        {notEditable ? (
                            <Text style={styles.notEditableInputStyle}>
                                {field.value || inputProps?.placeholder}
                            </Text>
                        ) : (
                            <RNTextInput
                                value={field.value.toString()}
                                onChangeText={field.onChange}
                                placeholderTextColor={theme.secondFontColor}
                                style={[
                                    halfScreen ? inputStylesHalf : inputStyles,
                                    {
                                        borderColor: error
                                            ? theme.red
                                            : theme.greyBorderColor,
                                        borderWidth: error ? 2 : 1,
                                        fontFamily: isAndroid
                                            ? 'poppins_regular'
                                            : 'Poppins-Regular',
                                        top: isAndroid ? 3 : 0,
                                    },
                                ]}
                                {...inputProps}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                allowFontScaling={false}
                                placeholder={inputProps?.placeholder}
                                secureTextEntry={isSecure}
                                ref={ref}
                                multiline={multiline}
                                onPressIn={isAndroid ? undefined : toggleModal}
                                editable={!toggleModal}
                                keyboardType={inputProps?.keyboardType}
                            />
                        )}
                        <Pressable
                            hitSlop={{
                                top: 10,
                                bottom: 10,
                                left: 10,
                                right: 10,
                            }}
                            onPress={iconAction || toggleSecureText}
                            style={styles.iconContainer}>
                            {icon}
                        </Pressable>
                    </Pressable>
                    {children}
                </>
                {error && <Text boldFont style={{ color: theme.red }}>
                    {error}
                </Text>}
            </View>
        );
    },
);

InputField.displayName = 'InputField';

export default InputField;
