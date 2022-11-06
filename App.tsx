import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as AuthSession from 'expo-auth-session';
import { User, UserProps } from './src/assets/User';

type AuthResponse = {
    params: {
      access_token: string;
    };
    type: string;
}

function HomeScreen() {
  const [userData, setUserData] = useState<UserProps>({} as UserProps)

  async function handleGoogleSignIn(){
    try {
      //TO-DO: mover credenciais para um .env
      const CLIENT_ID = ""; //insira seu clien_Id aqi
      const REDIRECT_URI = ""; //insira sua redirect_uri aqui
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;
      
      if (type == 'success') {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
        const user = await response.json();

        setUserData(user);
      }

    } catch (error) {
      console.log(error);
    }
  }
 
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={handleGoogleSignIn}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>

      <User user={userData}></User>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
