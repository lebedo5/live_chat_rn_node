export default {
    Registration: 'Registration' as const,
    UserFlow: 'UserFlow' as const,
    MainTabs: 'MainTabs' as const,
    registration: {
        Login: 'LoginScreen' as const
    }
};

export type RootStackParamList = {
    Registration: undefined;
    UserFlow: undefined;
    BecomeCustomer: undefined;
    MainTabs: undefined;
    registration: {
        Login: undefined;
    };
    userFlow: {};
};
