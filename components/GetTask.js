// import React, { useState } from "react";
// import {
//   TouchableOpacity,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   ScrollView,
// } from "react-native";
// import tw from "tailwind-react-native-classnames";

// const GetTask = () => {
//   const [taskItem, setTaskItem] = useState([]);
//   // task and setTask
//   const [task, setTask] = useState("Finish the Project");
//   // Task item and setTaskItem

//   // onChangeText
//   const ChangeText = () => {
//     setTaskItem([...taskItem, task]);
//     setTask(null);
//   };
//   // onSubmitEditing
//   return (
//     <View style={styles.getTaskContent}>
//       <View style={tw`bg-gray-500 w-60   ml-10 py-2  rounded-xl`}>
//         <TextInput
//           style={tw`text-white text-xl ml-4`}
//           placeholder="Add a task"
//           placeholderTextColor="#eee"
//           onChangeText={(text) => setTask(text)}
//         />
//       </View>
//       {/* Plus Icon */}
//       <TouchableOpacity
//         style={tw`bg-gray-600 h-12 rounded-full flex justify-between items-center w-12`}
//         onPress={() => ChangeText()}
//       >
//         <Text style={tw`text-3xl text-white ios:mt-1 `}>+</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// export default GetTask;

// const styles = StyleSheet.create({
//   getTask: {
//     position: "absolute",
//     top: Platform.OS === "ios" ? "50%" : "50%",
//     backgroundColor: "#111822",
//   },
//   getTaskContent: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "90%",
//     // backgroundColor: "pink",
//   },
// });
