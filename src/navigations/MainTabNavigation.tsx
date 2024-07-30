import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC, memo } from 'react';
import routes from './routes';
import { optionsConfig } from './AppNavigator';
import { ChatScreen } from '../screens/Chat/ChatScreen';
import ChatList from '../screens/ChatList';

const Tab = createBottomTabNavigator();

const MainTabNavigator: FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name={routes.userFlow.ChatList}
                component={ChatList}
                options={optionsConfig}
            />
            <Tab.Screen
                name={routes.userFlow.Chat}
                component={ChatScreen}
                options={optionsConfig}
            />
        </Tab.Navigator>
    );
};

export default memo(MainTabNavigator);
