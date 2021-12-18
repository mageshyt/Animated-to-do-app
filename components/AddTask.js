import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Icon from "react-native-vector-icons/FontAwesome";

const AddTask = ({ task }) => {
  return (
    <View style={tw`w-full relative mt-10 h-full `}>
      {/* check box */}
      <View style={tw`ml-5 h-96`}>
        <ScrollView>
          {task.map((item, index) => (
            <View style={tw`flex flex-row justify-between`}>
              <BouncyCheckbox
                key={index}
                style={tw`mb-5`}
                textStyle={tw`text-white text-xl`}
                size={26}
                onPress={(isChecked) => {}}
                fillColor="#84DFFF"
                text={item}
                iconStyle={{
                  borderRadius: 5,
                  // to make it a little round increase the value accordingly
                  borderColor: "#5584AC",
                }}
              />
              <Icon name="trash" size={25} color="white" style={tw` mr-6`} />
            </View>
          ))}
        </ScrollView>
      </View>
      {/* To get the task */}
      {/* <View style={styles.getTask}>
        <GetTask />
      </View> */}
    </View>
  );
};

export default AddTask;

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
  },
});
