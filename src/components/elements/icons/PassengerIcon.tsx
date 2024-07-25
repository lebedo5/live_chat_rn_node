import Svg, { Path } from 'react-native-svg';
import themeValue from '../../../theme/default-theme';

interface PassengerIconProps {
    width: number;
    height: number;
    color: string;
}

export const PassengerIcon = ({
    width = 24,
    height = 24,
    color = themeValue.blue,
}: PassengerIconProps) => {
    return (
        <Svg width={width} height={height} viewBox='0 0 17 21' fill='none'>
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M15.621 10.1613C15.2655 9.8058 14.7363 9.68839 14.2638 9.8602L1.32913 14.5637C1.13153 14.6356 1 14.8234 1 15.0336V20.9999H0V15.0336C0 14.4029 0.394602 13.8395 0.987385 13.6239L13.9221 8.9204C14.7597 8.61582 15.6979 8.82396 16.3281 9.45419C16.7583 9.88439 17 10.4679 17 11.0763V20.9999H16V11.0763C16 10.7331 15.8637 10.404 15.621 10.1613Z'
                fill={color}
            />
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 8C8.933 8 10.5 6.433 10.5 4.5C10.5 2.567 8.933 1 7 1C5.067 1 3.5 2.567 3.5 4.5C3.5 6.433 5.067 8 7 8ZM7 9C9.48528 9 11.5 6.98528 11.5 4.5C11.5 2.01472 9.48528 0 7 0C4.51472 0 2.5 2.01472 2.5 4.5C2.5 6.98528 4.51472 9 7 9Z'
                fill={color}
            />
        </Svg>
    );
};
