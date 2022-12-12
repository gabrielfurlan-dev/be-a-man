import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined,
    SettingUp: undefined,
    LoginScreen: undefined; 
  };

import LoginScreen from "../../screens/LoginScreen";
import SettingUp from "../../screens/SettingUp";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

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
                options={{ headerShown: false }}
            />

            <Screen
                name='SettingUp'
                component={SettingUp}
                options={{ headerShown: false }}
            />
        </Navigator>
    );
}
