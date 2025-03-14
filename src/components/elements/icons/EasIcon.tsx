import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface EasIconProps {
    width: number;
    height: number;
    color: string;
}

export const EasIcon = ({
    width = 21,
    height = 16,
    color = 'red',
}: EasIconProps) => {
    return (
        <Svg width={width} height={height} fill='none' viewBox='0 0 21 16'>
            <Path
                fill={color}
                d='M10.467 15.136a9.849 9.849 0 003.468-.655c.516-.191 1.018-.419 1.502-.68l2.036 2.035a.56.56 0 00.792-.793l-5.284-5.284v-.001L3.386.164a.56.56 0 00-.793.793L4.49 2.852c-.349.223-.695.459-1.034.72C1.518 5.067 0 7.03 0 8.036c0 1.688 4.828 7.1 10.467 7.1zM8.4 6.763l3.338 3.338a2.38 2.38 0 01-1.27.366A2.427 2.427 0 018.4 6.763zM4.14 4.46c.374-.284.762-.549 1.163-.793l2.29 2.29a3.548 3.548 0 004.956 4.957l2.056 2.055a10.49 10.49 0 01-1.06.462 8.735 8.735 0 01-3.078.585c-5.203 0-9.335-5.05-9.346-5.978 0-.343.929-1.963 3.02-3.578zM10.467.938a9.991 9.991 0 00-3.477.648.56.56 0 00.39 1.052 8.882 8.882 0 013.087-.578c5.24 0 9.346 5.049 9.346 5.975-.018.343-.982 1.96-3.043 3.563a.56.56 0 00.688.885c1.917-1.491 3.476-3.485 3.476-4.446 0-1.687-4.828-7.099-10.467-7.099z'
            />
        </Svg>
    );
};
