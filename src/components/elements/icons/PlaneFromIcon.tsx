import Svg, { Path } from 'react-native-svg';
import themeValue from '../../../theme/default-theme';

interface PlaneFromIconProps {
    width: number;
    height: number;
    color: string;
    active?: boolean;
}

export const PlaneFromIcon = ({
    width = 24,
    height = 24,
    color = 'blue',
    active,
}: PlaneFromIconProps) => {
    return (
        <Svg width={width} height={height} viewBox='0 0 27 18' fill='none'>
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.8192 1.22949C10.2488 0.961073 9.61229 0.865546 8.98825 0.954694L7.81844 1.12181L13.1522 6.01111L8.1602 8.22979L3.53952 5.91945L2.04301 6.51806L5.36682 10.1742C5.84651 10.7019 6.4826 11.0621 7.18187 11.2019C7.80189 11.3259 8.44439 11.2712 9.03454 11.0443L25.4021 4.74905C25.6305 4.66121 25.8017 4.46762 25.8611 4.23023C25.9651 3.81423 25.7003 3.39573 25.2798 3.31163L22.9878 2.85323C22.3834 2.73236 21.7564 2.80187 21.1932 3.05219L17.8499 4.53808L10.8192 1.22949ZM8.85782 0.0417136C9.66016 -0.0729065 10.4785 0.0499146 11.2119 0.395017L17.8609 3.52397L20.8186 2.20943C21.5562 1.88163 22.3772 1.7906 23.1686 1.94889L25.4606 2.40729C26.3975 2.59466 26.9875 3.52706 26.7558 4.45391C26.6236 4.9828 26.242 5.41412 25.7332 5.60983L9.36561 11.905C8.61238 12.1947 7.79235 12.2645 7.001 12.1063C6.10851 11.9278 5.29665 11.4681 4.68441 10.7946L0.466797 6.15525L3.58153 4.90935L8.18336 7.21026L11.4916 5.73994L5.75836 0.484494L8.85782 0.0417136Z'
                fill={active ? themeValue.red : color}
            />
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16.9332 17.865H2.17725V16.9427H16.9332V17.865Z'
                fill={active ? themeValue.red : color}
            />
        </Svg>
    );
};
