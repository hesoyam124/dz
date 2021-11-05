import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  backgroundColor,
} from "react-native";

export function SettingsScreen({ route, navigation }) {
  //handle the click - go home
  // function handleHomePress() {
  //     navigation.navigate("Home");
  // }

  //just some return stuff, button onpress calls handleHomePress
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Setting</Text>
      <Text style={styles.text}>there are no options heheh</Text>

      {/* <Button 
            title="Go to the Home Screen"
            onPress={handleHomePress}
            /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  header: {
    color: "red",
    fontSize: 125,
  },
  text: {
    color: "white",
    fontSize: 25,
  },
});
