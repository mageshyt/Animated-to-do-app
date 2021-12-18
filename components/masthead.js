import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import TaskItem from "./Task-item";

const Masthead = ({}) => {
  return (
    <View style={tw`relative h-full`}>
      {/* slider */}

      <Image
        style={tw`h-72 w-full relative`}
        source={require("../assets/home.png")}
      />
      <Text style={tw`absolute top-56 left-10 text-3xl font-bold text-white `}>
        What's up,magesh
      </Text>
      <View style={styles.taskItem}>
        <TaskItem />
      </View>
    </View>
  );
};

export default Masthead;
const styles = StyleSheet.create({
  container: {
    // back,
    position: "absolute",
  },
  taskItem: {
    position: "absolute",
    top: Platform.OS === "ios" ? "30%" : "32%",
    height: "100%",
    width: "100%",
  },
});
