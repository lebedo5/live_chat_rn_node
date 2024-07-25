import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const AttentionIcon = ({ width = 26, height = 20, color = 'white' }) => {
    return (
        <Svg width={width} height={height} viewBox='0 0 26 20' fill='none'>
            <Path d='M1.5 19L12.5893 1L24.5 19H1.5Z' stroke={color} />
            <Path d='M12.5 7V14.6M12.5 16.2V17' stroke={color} />
        </Svg>
    );
};
