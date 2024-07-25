import React, { PropsWithChildren, ForwardedRef, useMemo } from 'react';
import {
    Pressable,
    TextInput as RNTextInput,
    TextInputProps,
    View,
    ViewStyle,
} from 'react-native';
import { Control } from 'react-hook-form';
import { useStyles } from './assets/input-field-press-in';
import { useTheme } from '../../../hooks/theme';
import { isAndroid } from '../../../consts';

interface InputFieldProps<C> {
    error?: string;
    name: string;
    inputProps?: TextInputProps;
    renderIcon?: (active: boolean) => React.ReactNode;
    secureTextEntry?: boolean;
    placeholder?: string;
    onPress?: () => void;
    value?: string;
    boldFont?: boolean;
    inputBlockStyle?: ViewStyle;
    halfScreen?: boolean;
    leftIcon?: React.ReactNode;
}

type Props<C> = InputFieldProps<C>;

const InputFieldPressIn = React.forwardRef(
    <C extends Control<any>>(
        {
            error,
            name,
            inputProps,
            renderIcon,
            placeholder,
            onPress,
            value,
            boldFont,
            inputBlockStyle,
            halfScreen = false,
            leftIcon,
        }: PropsWithChildren<Props<C>>,
        ref: ForwardedRef<RNTextInput>,
    ) => {
        const { themeValue } = useTheme();
        const styles = useStyles(themeValue);

        const inputBlockStyles = useMemo(() => {
            return { ...inputBlockStyle, ...styles.blockStyles };
        }, [inputBlockStyle]);

        return (
            <>
                <Pressable
                    onPress={onPress}
                    style={[
                        inputBlockStyles,
                        Boolean(error)
                            ? styles.errorBorderColor
                            : styles.borderColor,
                        halfScreen
                            ? Boolean(error)
                                ? styles.halfScreenError
                                : styles.halfScreen
                            : null,
                    ]}>
                    {renderIcon && <View>{renderIcon(Boolean(error))}</View>}
                    <RNTextInput
                        hitSlop={{
                            top: 10,
                            left: 10,
                            right: 10,
                            bottom: 10,
                        }}
                        value={value}
                        placeholderTextColor={
                            error ? themeValue.red : themeValue.secondFontColor
                        }
                        style={[
                            {
                                color: error ? themeValue.red : themeValue.blue,
                                fontFamily: boldFont
                                    ? isAndroid
                                        ? 'poppins_semibold'
                                        : 'Poppins-SemiBold'
                                    : isAndroid
                                    ? 'poppins_regular'
                                    : 'Poppins-Regular',
                                top: isAndroid ? 3 : 0,
                            },
                            styles.input,
                        ]}
                        {...inputProps}
                        autoFocus={false}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        allowFontScaling={false}
                        placeholder={placeholder}
                        onPressIn={onPress}
                        editable={false}
                        ref={ref}
                    />
                    {leftIcon ? (
                        <View style={styles.iconBlock}>{leftIcon}</View>
                    ) : null}
                </Pressable>
            </>
        );
    },
);

InputFieldPressIn.displayName = 'InputFieldPressIn';

export default InputFieldPressIn;
