import { Button, View, Text, Box } from "native-base";
import { CaretLeft } from "phosphor-react-native"

export interface props {
    text: string;
}

export default function ({ text }: props) {
    return (
        <Button backgroundColor={"black"}>
            <Box display={"flex"} flexDirection={"row"}>
                <CaretLeft size={32}  color={"white"} />
                <Text  color={"white"}>
                    {text} 
                </Text>
            </Box>
        </Button>
    )
}