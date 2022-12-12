import React, { useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import { User, UserProps } from '../../assets/User';
import config from '../../../config';
import { Image, NativeBaseProvider, Box, Text, Checkbox, Button, Flex, FormControl, WarningOutlineIcon } from "native-base";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Routes from "../../routes";
import {useNavigation} from "@react-navigation/native"

type RootStackParamList = {
  Home: undefined,
  SettingUp: undefined,
  LoginScreen: undefined; 
};

type ProfileScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Home'>;

type Props = { navigation: ProfileScreenNavigationProp; };

export default function() {
    const [userData, setUserData] = useState<UserProps>({} as UserProps)
    const [groupValue, setGroupValue] = React.useState(true);

    type AuthResponse = {
      params: {
        access_token: string;
      };
      type: string;
    } 

    const navigation = useNavigation();

    function handleSettingUpPage(){
      navigation.navigate("SettingUp");
    }

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

          handleSettingUpPage();
        }

      } catch (error) {
        alert(error)
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

          <FormControl isInvalid={!groupValue}>
            <Checkbox.Group
              mt="2"
              accessibilityLabel="agree with the user terms"
              alignItems="flex-start"
              defaultValue={['AgreeUserTerms']}
            >

              <Checkbox
                value='AgreeUserTerms'
                onChange={
                  values => {
                    setGroupValue(values);
                  }
                }
              >
                <Text color={'white'}>
                  I agree with the user terms.
                </Text>
              </Checkbox>

            </Checkbox.Group>

            <FormControl.ErrorMessage _stack={{
              alignItems: "flex-start"
            }} leftIcon={<WarningOutlineIcon size="xs" mt={1} />}>
              You should accept the user terms before.
            </FormControl.ErrorMessage>

            <Button
              onPress={handleGoogleSignIn}
              marginTop={10}
              width={100}
              backgroundColor={"#FFFFFF"}
            >
              <Text>Start</Text>
            </Button>
          </FormControl>

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