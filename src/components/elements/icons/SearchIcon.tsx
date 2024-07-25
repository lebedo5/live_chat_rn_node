import Svg, { Circle, Path } from 'react-native-svg';
import React from 'react';

export const SearchIcon = () => {
    return (
        <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
            <Circle
                cx='10'
                cy='10'
                r='6'
                stroke='#1B2269'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <Path
                d='M14.5 14.5L19 19'
                stroke='#1B2269'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </Svg>
    );
};
