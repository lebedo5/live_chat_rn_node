import { View } from 'react-native';
import { Text } from './text/Text';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const ChatContext = ({ children }) => {
    const [socket, setSocket] = useState();

    useEffect(() => {
        const soc = io('http://localhost:4000');
        setSocket(soc);
        return () => {
            socket?.disconnect();
        };
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {children}
        </View>
    );
};
