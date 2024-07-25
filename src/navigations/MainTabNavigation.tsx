import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FC, memo } from 'react';
import { BottomNavBar } from '../components/bottom-nav-bar/BottomNavBar';

const Tab = createBottomTabNavigator();

const MainTabNavigator: FC = () => {
    return (
        <Tab.Navigator tabBar={({ state }) => <BottomNavBar state={state} />}>
            {/*<Tab.Screen*/}
            {/*    name={routes.userFlow.Dashboard}*/}
            {/*    component={DashboardScreen}*/}
            {/*    options={optionsConfig}*/}
            {/*/>*/}
            {/*<Tab.Screen*/}
            {/*    name={routes.userFlow.NewFlight}*/}
            {/*    component={NewFlightScreen}*/}
            {/*    options={optionsConfig}*/}
            {/*/>*/}
            {/*<Tab.Screen*/}
            {/*    name={routes.userFlow.MyFlight}*/}
            {/*    component={MyFlightsScreen}*/}
            {/*    options={optionsConfig}*/}
            {/*/>*/}
            {/*<Tab.Screen*/}
            {/*    name={routes.userFlow.Support}*/}
            {/*    component={SupportScreen}*/}
            {/*    options={optionsConfig}*/}
            {/*/>*/}
        </Tab.Navigator>
    );
};

export default memo(MainTabNavigator);
