import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import tw from "tailwind-react-native-classnames";
import TaskList from "./TaskList";

const TaskItem = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      {/* tasks */}
      <View style={tw``}>
        <TaskList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111822",
    height: "100%",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
});
export default TaskItem;
