import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Stack from "./stack"

const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'black',
    },
};

export default function(){
    return(
        <NavigationContainer
         theme={navTheme}>
            <Stack/>
        </NavigationContainer>
    );
}