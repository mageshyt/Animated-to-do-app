// import "react-native-gesture-handler";

import { StyleSheet, Text, View } from "react-native";
import HomePage from "./pages/home/HomePage";
import tw from "tailwind-react-native-classnames";
import TaskItem from "./components/Task-item";
export default function App() {
  return (
    <View style={styles.container}>
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    height: "100%",
  },
});
