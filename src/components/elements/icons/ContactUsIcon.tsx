import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ContactUsIconProps {
    width?: number;
    height?: number;
    color?: string;
}

export const ContactUsIcon = ({
    width = 21,
    height = 20,
    color = 'white',
}: ContactUsIconProps) => {
    return (
        <Svg width={width} height={height} viewBox='0 0 21 20' fill='none'>
            <Path
                d='M18.5345 5.38538H16.2746V2.39018C16.2746 1.07228 15.259 0 14.011 0H2.26551C1.01564 0 0 1.07228 0 2.39018V9.05152C0 10.3694 1.01564 11.4417 2.26551 11.4417H4.52541V14.4369C4.52541 15.7548 5.54105 16.8271 6.78905 16.8271H8.79034L12.1689 19.9042C12.2383 19.9681 12.3207 20 12.4107 20C12.6187 20 12.7873 19.8203 12.7873 19.6006V16.8271H18.5364C19.7862 16.8271 20.8019 15.7548 20.8019 14.4369V7.77556C20.8019 6.45767 19.7862 5.38538 18.5364 5.38538H18.5345ZM2.26551 10.643C1.42977 10.643 0.74955 9.92811 0.74955 9.05152V2.39018C0.74955 1.51358 1.42977 0.798722 2.26551 0.798722H14.011C14.8467 0.798722 15.525 1.51358 15.525 2.39018V9.05152C15.525 9.92811 14.8467 10.643 14.011 10.643H11.856C11.7648 10.643 11.3188 11.0097 10.5181 11.7432C10.1002 12.1266 9.53427 12.6438 8.76223 13.3466V11.0403C8.76223 10.8207 8.59359 10.641 8.38746 10.641H2.26551V10.643ZM20.0505 14.4369C20.0505 15.3135 19.3702 16.0284 18.5345 16.0284H12.4107C12.2045 16.0284 12.0359 16.2081 12.0359 16.4277V18.732C11.2863 18.0491 10.7317 17.5419 10.3194 17.1625C9.49367 16.4064 9.03395 16.0284 8.94025 16.0284H8.92714H6.78905C5.9533 16.0284 5.27495 15.3135 5.27495 14.4369V11.4417H8.01456V14.2153C8.01456 14.4349 8.18321 14.6146 8.39121 14.6146C8.47928 14.6146 8.5636 14.5807 8.63294 14.5188L12.0115 11.4417H14.0128C15.2608 11.4417 16.2765 10.3694 16.2765 9.05152V6.18411H18.5364C19.3721 6.18411 20.0523 6.89896 20.0523 7.77556V14.4369H20.0505Z'
                fill={color}
            />
            <Path
                d='M3.61308 3.59826H12.6639C12.93 3.59826 13.1286 3.3846 13.1286 3.09905C13.1286 2.81351 12.9281 2.59985 12.6639 2.59985H3.61308C3.34699 2.59985 3.14648 2.81351 3.14648 3.09905C3.14648 3.3846 3.34699 3.59826 3.61308 3.59826Z'
                fill={color}
            />
            <Path
                d='M3.61308 6.09026H12.6639C12.93 6.09026 13.1286 5.8766 13.1286 5.59106C13.1286 5.30552 12.9281 5.09186 12.6639 5.09186H3.61308C3.34699 5.09186 3.14648 5.30552 3.14648 5.59106C3.14648 5.8766 3.34699 6.09026 3.61308 6.09026Z'
                fill={color}
            />
            <Path
                d='M13.1267 8.08306C13.1267 7.79752 12.9262 7.58386 12.662 7.58386H3.61308C3.34699 7.58386 3.14648 7.79752 3.14648 8.08306C3.14648 8.36861 3.34699 8.58226 3.61308 8.58226H12.662C12.9281 8.58226 13.1267 8.36861 13.1267 8.08306Z'
                fill={color}
            />
        </Svg>
    );
};
