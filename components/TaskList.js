import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Keyboard,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import AddTask from "./AddTask";
import Icon from "react-native-vector-icons/FontAwesome";

const TaskList = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState(["finish the project"]);

  // onChangeText
  const ChangeText = () => {
    Keyboard.dismiss();
    // console.log(task.length);
    if (task) {
      setTaskItems([...taskItems, task]);
      setTask(null);
    }
  };
  // task finished

  const removeTask = (task) => {
    const copy_list = [...taskItems];
    copy_list.splice(task, 1);
    setTaskItems(copy_list);
    console.log({ copy_list, task });
  };
  return (
    <View style={tw`relative  h-full`}>
      <AddTask task={taskItems} removeTask={removeTask} />

      {/*  */}
      <View style={styles.getTaskContent}>
        <View style={tw`bg-gray-600 w-60   ml-10 py-2  rounded-xl`}>
          {/* USer input */}
          <TextInput
            style={tw`text-white text-xl ml-4`}
            placeholder="Add a task"
            placeholderTextColor="#eee"
            value={task}
            onChangeText={(text) => setTask(text)}
          />
        </View>
        {/* Plus Icon */}
        <TouchableOpacity
          style={tw`bg-gray-600 h-12 rounded-full flex justify-between items-center w-12`}
          onPress={() => ChangeText()}
        >
          <Text style={tw`text-3xl text-white ios:mt-1 `}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskList;
const styles = StyleSheet.create({
  getTask: {
    position: "absolute",
    top: Platform.OS === "ios" ? "50%" : "50%",
    backgroundColor: "#111822",
  },
  getTaskContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    // backgroundColor: "pink",
    position: "absolute",

    bottom: Platform.OS === "ios" ? "35%" : "38%",
  },
});
