import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

interface CloseIconProps {
    width?: number;
    height?: number;
    color?: string;
    strokeWidth?: number;
}

export const CloseIcon = ({
    width = 20,
    height = 20,
    color = 'blue',
    strokeWidth = 2,
}: CloseIconProps) => {
    return (
        <Svg width={width} height={height} fill={color} viewBox='0,0,256,256'>
            <G
                fillRule='nonzero'
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap='butt'
                strokeLinejoin='miter'
                strokeMiterlimit={10}
                strokeDasharray=''
                strokeDashoffset='0'
                style='mix-blend-mode: normal'>
                <G transform='scale(5.12,5.12)'>
                    <Path d='M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z' />
                </G>
            </G>
        </Svg>
    );
};
