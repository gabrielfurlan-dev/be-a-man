import { View } from "native-base";
import BackButton from "../../components/backButton";
import { SafeAreaView } from "react-native-safe-area-context";


export default function() {
    return (
        <SafeAreaView>
            <BackButton text="SettingUp"/>

            <View>
            </View>
        </SafeAreaView>

    );
}