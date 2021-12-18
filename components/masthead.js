import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import tw from "tailwind-react-native-classnames";

const Masthead = ({}) => {
  return (
    <View style={tw`relative`}>
      <Image
        style={tw`h-4/6 w-full relative`}
        source={require("../assets/home.png")}
      />
      <Text style={tw`absolute top-56 left-10 text-3xl font-bold text-white `}>
        What's up,magesh
      </Text>
    </View>
  );
};

export default Masthead;
const styles = StyleSheet.create({
  container: {
    // back,
    position: "absolute",
  },
});
