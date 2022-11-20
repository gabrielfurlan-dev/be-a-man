import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginScreen } from "../../screens/LoginScreen";
import SettingUp from "../../screens/SettingUp";

const { Navigator, Screen } = createNativeStackNavigator()

export default function () {
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
                name="Home"
                component={LoginScreen}
                options={{ title: '' }}
            />

            <Screen
                name='SettingUp'
                component={SettingUp}
                options={{ title: '' }}
            />
        </Navigator>
    );
}
