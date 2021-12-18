import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import Masthead from "../../components/masthead";

const HomePage = () => {
  return (
    <View>
      <Masthead />
    </View>
  );
};

export default HomePage;
const styles = StyleSheet.create({
  container: {},
});
