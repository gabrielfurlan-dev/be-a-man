import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import {AppRoutes} from "./app.routes"

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
            <AppRoutes/>
        </NavigationContainer>
    );
}