import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { Linking } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const image = { uri: "https://flxt.tmsimg.com/assets/p175986_p_v10_aa.jpg" };

export function HomeScreen({ route, navigation }) {


  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Text style={styles.text}>COMING SOON</Text>
      </ImageBackground>

      {/* <Button 
            title="Go to the Settings Screen"
            onPress={Settings}

            />
            <Button 
            title="Go to the ABOUT Screen"
            onPress={About}

            /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },

  text: {
    color: "red",
    textAlign: "center",
    fontSize: 105,
  },
});
