import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, View, Text, Box } from "native-base";
import { CaretLeft } from "phosphor-react-native"

export interface props {
    text: string;
    previousRoute: string;
}

type RootStackParamList = {
    Home: undefined,
    SettingUp: undefined,
    LoginScreen: undefined; 
  };

  
  type ProfileScreenNavigationProp = NativeStackScreenProps<RootStackParamList, 'Home'>;
  
  type Props = { navigation: ProfileScreenNavigationProp; };

  
  export default function ({ text, previousRoute }: props) {
  const navigation = useNavigation();
    
  function handleSettingPreviousRoute(previousRoute: string){
    navigation.navigate(previousRoute);
  }
    return (
        <Button 
        backgroundColor={"black"} 
        width={"100%"}
        onPress={() => handleSettingPreviousRoute(previousRoute)}>
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <CaretLeft size={32}  color={"white"} />
                <Text  color={"white"}>
                    {text} 
                </Text>
            </Box>
        </Button>
    )
}