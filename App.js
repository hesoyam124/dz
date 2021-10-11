import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ImageBackground
} from "react-native";
import Things from "./components/things";

export default function App() {
  const [task, setTask] = useState();
  const handleAddTask = () => {
    // console.log(task);
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }
  
  const completeTask = (index) => {
let itemCopy = [...taskItems]; 
itemCopy.splice (index, 1);
setTaskItems(itemCopy); 

  };
  const [taskItems, setTaskItems] = useState([]);

  const [fontsLoaded] = Font.useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
  });

  const image = { uri: 'https://digitalsynopsis.com/wp-content/uploads/2017/07/beautiful-color-ui-gradients-backgrounds-purple-love.png' };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    
    <View style={styles.container}>
<ImageBackground source={image} style={styles.image}>
      <View style={styles.mainWrapper}>
        <Text
          style={{
            fontFamily: "Inter-Black",
            fontSize: 40,
            fontWeight: "bold",
            color: "white"
          }}
        >
          STVARI KOJE NISI NAPRAVIO DANAS :
        </Text>
        <View style={styles.things}>
          {taskItems.map((item, index) => {
            return <Things key={index} text={item} />;
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeSomething}
      >
        <TextInput
          style={styles.input}
          placeholder={"nova stvar koju neces napraviti danas"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
  },
  mainWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  things: {
    marginTop: 30,
  },

  writeSomething: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 150,
  },
  input: {
    paddingVertical: 15,
    maxWidth: 350,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  addText: {},

  image: {
width: "100%",
height: "100%"
  },
});
