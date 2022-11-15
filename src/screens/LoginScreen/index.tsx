import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { User, UserProps } from '../../assets/User';
import config from '../../../config';
import { extendTheme, Image, NativeBaseProvider, Box, Text, Checkbox, Button, Flex } from "native-base";
import sizes from 'native-base/lib/typescript/theme/base/sizes';

type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string;
}

export
  function LoginScreen() {
  const [userData, setUserData] = useState<UserProps>({} as UserProps)
  const [agreeTermsValue, setAgreeTermsValue] = React.useState([]);

  async function handleGoogleSignIn() {
    try {
      const CLIENT_ID = config.CLIENT_ID;
      const REDIRECT_URI = config.REDIRECT_URI;
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
    <NativeBaseProvider>
      <Flex size={"full"} direction={"column"} justifyContent={"space-between"} >

        <Box
          backgroundColor={"black"}
          margin={45}
        >
          <Text color="white" fontSize={24} fontWeight={500}>Be a man</Text>

          <Text color="white" width={300}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus.
          </Text>

          <Checkbox.Group
            value={agreeTermsValue}
            onChange={setAgreeTermsValue}
            accessibilityLabel="agree with the user terms"
          >

            <Checkbox value='agree'>
              <Text color="white">I agree with the user terms.</Text>
            </Checkbox>
          </Checkbox.Group>

          <Button
            onPress={handleGoogleSignIn}
            marginTop={10}
            width={100}
            backgroundColor={"#FFFFFF"}
          >
            <Text>Start</Text>
          </Button>
        </Box>

        <Box
          display={'flex'}
          flexDirection={'row-reverse'}
        >
          <User user={userData}></User>

          <Image
            source={require("../../../assets/marcus-aurelius.png")}
            width={185}
            height={275}
            alt={'marcus aurelius'}
          />
        </Box>


      </Flex>
    </NativeBaseProvider>
  );
}