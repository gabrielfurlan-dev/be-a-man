import { Button, View } from "native-base";
import BackButton from "../../components/backButton";
import { SafeAreaView } from "react-native-safe-area-context";
import TodoList from "../../components/TodoList";


export default function () {
    return (
        <SafeAreaView>
            <BackButton text="SettingUp" previousRoute="LoginScreen" />
            <TodoList />
            <Button marginX={10}>Next Step</Button>
        </SafeAreaView>
    );
}