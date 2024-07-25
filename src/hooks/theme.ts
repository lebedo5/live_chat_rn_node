import { useTheme as useElementTheme } from '@rneui/themed';
import themeValue, { themeColors } from '../theme/default-theme';
import { Colors } from '@rneui/themed/dist/config/colors';
import { Theme } from '@rneui/themed/dist/config/theme';
import { useCallback, useMemo } from 'react';
import EncryptedStorage from '../services/encrypted-storage';
import { useColorScheme } from 'react-native';

export const THEME_STORAGE_KEY = 'COLOR_THEME';

export const useTheme = () => {
    const { theme, updateTheme } = useElementTheme();
    const scheme = useColorScheme();

    const systemThemeIndex: number = useMemo(() => {
        return themeColors.findIndex(themeName => themeName.name === scheme);
    }, [scheme]);

    const updateThemeAndStorageKey = useCallback(
        (themeName: string | null) => {
            const themeData =
                themeColors.find(({ name }) => name === themeName) ||
                themeColors[systemThemeIndex || 0];
            EncryptedStorage.setItem(THEME_STORAGE_KEY, themeData.name);

            return updateTheme({
                components: undefined,
                darkColors: undefined,
                lightColors: undefined,
                mode: undefined,
                spacing: undefined,
                ...themeData,
            });
        },
        [systemThemeIndex, updateTheme],
    );

    return useMemo(() => {
        return {
            theme,
            themeValue,
            updateTheme: updateThemeAndStorageKey,
            mountDefaultTheme: async () => {
                updateThemeAndStorageKey(
                    await EncryptedStorage.getItem(THEME_STORAGE_KEY),
                );
            },
        };
    }, [theme, updateThemeAndStorageKey]);
};
