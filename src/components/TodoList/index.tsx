import React, { useState } from "react";
import { Text, View, Input, Button } from "native-base";
import { Plus, X } from "phosphor-react-native";

interface IToDo {
  text: string;
  completed: boolean;
}

export default function () {
  const defaultTodos = [
    { text: "Study English", completed: false },
    { text: "Study 1h of specific theme", completed: false },
    { text: "Don’t lose any ref", completed: false }
  ]

  const [value, setValue] = useState<string>("");
  const [toDoList, setToDos] = useState<IToDo[]>(defaultTodos);
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
    <View padding={35} height={"80%"} justifyContent={"space-between"} >
      <View>
        <View
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text color={"white"} bold>Days</Text>
          <Input color={"gray.300"} borderColor={"rgba(0,0,0,0)"} width={"40px"} keyboardType='numeric'>10</Input>
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
            paddingRight={10}
          >
            <Input
              color={"gray.300"}
              borderColor={"rgba(0,0,0,0)"}
              style={[{ textDecorationLine: toDo.completed ? "line-through" : "none" }
              ]}
            >
              {toDo.text}
            </Input>
            <Button
              backgroundColor={"none"}
              onPress={() => { removeItem(index); }}
            >
              <X color={"red"} />
            </Button>
          </View>
        ))}
      </View>

      <View
        // width={100}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bottom={0}
        marginBottom={20}
      >
        <Input
          placeholder="Enter your todo task..."
          value={value}
          backgroundColor={"gray.800"}
          onChangeText={e => {
            setValue(e);
            showError(false);
          }}
          width={"80%"}
          borderColor={"purple"}
          borderRadius={8}
          borderWidth={2}
          paddingLeft={9}
        />
        <Button
          backgroundColor={"none"}
          color={"white"}
          size={"32px"}
          onPress={handleSubmit}
        >
          <Plus
            color="white"
            size={32}
            weight="fill"
          />
        </Button>
      </View>
    </View>
  );
}