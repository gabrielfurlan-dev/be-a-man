import React, { useState } from "react";
import { Text, View, Input, Button } from "native-base";
import { Plus, X } from "phosphor-react-native";

interface IToDo {
  text: string;
  completed: boolean;
}

export default function () {
  const [value, setValue] = useState<string>("");
  const [toDoList, setToDos] = useState<IToDo[]>([]);
  const [error, showError] = useState<Boolean>(false);

  const handleSubmit = (): void => {
    if (value.trim())
      setToDos([...toDoList, { text: value, completed: false }]);
    else showError(true);
    setValue("");
  };

  const removeItem = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDos(newToDoList);
  };

  const toggleComplete = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDos(newToDoList);
  };

  return (
    <View padding={35} justifyContent={"space-between"}>
      <View display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
        <Text color={"white"}>Days</Text>
        <Input color={"white"} borderColor={"rgba(0,0,0,0)"} width={"40px"} keyboardType='numeric'>10</Input>
      </View>

      <View>
        <Text color={"white"} bold>Diary tasks</Text>
      </View>
      {error && (
        <Text color={"red"}>Error: Input field is empty...</Text>
      )}
      {toDoList.length === 0 && <Text>No to do task available</Text>}
      {toDoList.map((toDo: IToDo, index: number) => (
        <View
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          key={`${index}_${toDo.text}`}
        >
          <Text width={200} color={"white"}
            style={[{ textDecorationLine: toDo.completed ? "line-through" : "none" }
            ]}
          >
            {toDo.text}
          </Text>
          <Button backgroundColor={"none"} color={"red"}onPress={() => { removeItem(index); }} ><X/></Button>
        </View>
      ))}

      <View width={100} flexDirection={"row"} justifyContent={"space-between"} position={"fixed"} bottom={0} marginBottom={20}>
        <Input
          placeholder="Enter your todo task..."
          value={value}
          backgroundColor={"gray.800"}
          onChangeText={e => {
            setValue(e);
            showError(false);
          }}
          width={200} borderColor={"purple"} borderRadius={8} borderWidth={2} paddingLeft={9}
        />
        <Button backgroundColor={"none"} size={"32px"} onPress={handleSubmit}><Plus color="white" size={32} weight="fill" /></Button>
      </View>

    </View>
  );
}