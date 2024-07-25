import Svg, { Path } from 'react-native-svg';
import themeValue from '../../../theme/default-theme';

interface PlaneToIconProps {
    width: number;
    height: number;
    color: string;
    active?: boolean;
}

export const PlaneToIcon = ({
    width = 24,
    height = 24,
    color = 'white',
    active,
}: PlaneToIconProps) => {
    return (
        <Svg width={width} height={height} viewBox='0 0 29 24' fill='none'>
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.1834 5.76757C13.7954 5.27071 13.2705 4.89831 12.6733 4.69635L11.554 4.31775L14.1084 11.0875L8.6523 10.8155L5.57082 6.66906L3.9652 6.52816L5.28212 11.2906C5.47218 11.978 5.87739 12.5863 6.43836 13.0266C6.93576 13.417 7.53382 13.6581 8.16291 13.7217L25.6102 15.4875C25.8537 15.5121 26.0939 15.4166 26.2539 15.2315C26.5344 14.9072 26.4868 14.4142 26.1495 14.1495L24.3108 12.7064C23.826 12.3258 23.235 12.105 22.6195 12.0743L18.9654 11.8922L14.1834 5.76757ZM12.9688 3.82271C13.7366 4.08238 14.4115 4.56118 14.9103 5.2L19.4327 10.9921L22.6654 11.1532C23.4715 11.1934 24.2453 11.4826 24.8802 11.9809L26.7189 13.424C27.4705 14.0138 27.5764 15.1122 26.9515 15.8348C26.5949 16.2472 26.0598 16.46 25.5174 16.4051L8.07005 14.6393C7.26713 14.558 6.50381 14.2504 5.86896 13.7521C5.15298 13.1902 4.63581 12.4137 4.39323 11.5364L2.72218 5.49329L6.06401 5.78655L9.13291 9.91605L12.7487 10.0963L10.0029 2.8196L12.9688 3.82271Z'
                fill={active ? themeValue.red : color}
            />
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M28.0783 23.1508H13.3223V22.2286H28.0783V23.1508Z'
                fill={active ? themeValue.red : color}
            />
        </Svg>
    );
};
