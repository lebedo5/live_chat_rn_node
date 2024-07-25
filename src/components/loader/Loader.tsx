import { ActivityIndicator } from 'react-native';

interface LoaderProps {
    size?: number | 'small' | 'large';
    color?: string;
}

export const Loader = ({ size = 'small', color = '#19226D' }: LoaderProps) => {
    return <ActivityIndicator size={size} color={color} />;
};
