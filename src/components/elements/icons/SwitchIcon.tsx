import Svg, { Path } from 'react-native-svg';

interface SwitchIconProps {
    width: number;
    height: number;
    color: string;
}

export const SwitchIcon = ({
    width = 24,
    height = 24,
    color = 'white',
}: SwitchIconProps) => {
    return (
        <Svg width={width} height={height} viewBox='0 0 17 25'>
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.4108 5.2054L5.2054 0L0 5.2054L0.998342 6.20374L4.49941 2.70267L4.49941 13.7051H5.91128L5.91128 2.70256L9.41246 6.20374L10.4108 5.2054Z'
                fill={color}
            />
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.0583 19.7946L10.8529 25L5.64746 19.7946L6.6458 18.7963L10.1469 22.2973L10.1469 11.2949H11.5588L11.5588 22.2974L15.0599 18.7963L16.0583 19.7946Z'
                fill={color}
            />
        </Svg>
    );
};
