import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import Masthead from "../../components/masthead";
import TaskItem from "../../components/Task-item";

const HomePage = () => {
  return (
    <View style={tw`relative`}>
      <Masthead style={tw``} />
    </View>
  );
};

export default HomePage;
const styles = StyleSheet.create({
  container: {},
});
