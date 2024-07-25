import React, { FC } from 'react';
import { View, Pressable } from 'react-native';
import { Text } from '../text/Text';

import { useStyles } from './assets/submit-button-style';
import { useTheme } from '../../hooks/theme';
import { Loader } from '../loader/Loader';

type Props = {
    isSubmitting: boolean;
    handleSubmit: any;
    buttonText: string;
    boldFont?: boolean;
};

const SubmitButton: FC<Props> = ({
    isSubmitting,
    handleSubmit,
    buttonText,
    boldFont = false,
}) => {
    const { themeValue } = useTheme();
    const styles = useStyles(themeValue);

    return (
        <View style={styles.buttonWrapper}>
            <Pressable style={styles.buttonContainer} onPress={handleSubmit}>
                {isSubmitting ? (
                    <Loader color={'white'} />
                ) : (
                    ({ pressed }) => (
                        <Text
                            boldFont={boldFont}
                            style={[
                                {
                                    opacity: pressed ? 0.7 : 1,
                                },
                                styles.buttonText,
                            ]}>
                            {buttonText}
                        </Text>
                    )
                )}
            </Pressable>
        </View>
    );
};

export default SubmitButton;
