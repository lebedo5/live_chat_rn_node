import {
    CommonActions,
    createNavigationContainerRef,
    NavigationState,
    PartialState,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

/**
 * Gets the current screen from any navigation state.
 */
function getActiveRouteName(
    state: NavigationState | PartialState<NavigationState>,
): any {
    if (!state) {
        return null;
    }
    // @ts-ignore
    const route = state.routes[state.index];

    // Found the active route -- return the name
    if (!route.state) {
        return route.name;
    }

    // Recursive call to deal with nested routers
    return getActiveRouteName(route.state);
}

/**
 * use this to navigate to navigate without the navigation
 * prop. If you have access to the navigation prop, do not use this.
 * More info: https://reactnavigation.org/docs/navigating-without-navigation-prop/
 */
function navigate(name: any, params?: any) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name as never, params as never);
    }
}

function goBack() {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
        navigationRef.goBack();
    }
}

function resetRoot(params = { index: 0, routes: [] }) {
    if (navigationRef.isReady()) {
        navigationRef.resetRoot(params);
    }
}

export function reset(name: string) {
    navigationRef.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name }],
        }),
    );
}
