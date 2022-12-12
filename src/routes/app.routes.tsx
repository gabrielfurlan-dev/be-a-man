import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import SettingUp from "../screens/SettingUp";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            initialRouteName="LoginScreen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />

            <Screen
                name='SettingUp'
                component={SettingUp}
                options={{ headerShown: false }}
            />
        </Navigator>)
}