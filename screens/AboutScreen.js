import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,

} from "react-native";
import { Linking } from "react-native";

export function AboutScreen({ route, navigation }) {

  return (

  
    <View style={styles.container}>
          <ScrollView>
      <Text style={styles.header}> ABOUT</Text>
      <Text style={styles.text}>
        Friday the 13th is an American horror franchise that comprises twelve
        slasher films, a television series, novels, comic books, video games,
        and tie‑in merchandise. The franchise mainly focuses on the fictional
        character Jason Voorhees, who was thought to have drowned as a boy at
        Camp Crystal Lake due to the negligence of the camp staff. Decades
        later, the lake is rumored to be "cursed" and is the setting for a
        series of mass murders. Jason is featured in all of the films, as either
        the killer or the motivation for the killings. The original film,
        created to cash in on the success of Halloween (1978),[1] was written by
        Victor Miller and was produced and directed by Sean S. Cunningham. The
        films have grossed over $468 million at the box-office worldwide. It was
        the highest-grossing horror franchise in the world until Halloween
        (2018) was released, putting the Halloween franchise in the top spot.
        Frank Mancuso, Jr., a producer of the films, also developed the
        television show Friday the 13th: The Series after Paramount released
        Jason Lives. The television series was not connected to the franchise by
        any character or setting, but was created based on the idea of "bad luck
        and curses", which the film series symbolized.[2] While the franchise
        was owned by Paramount, four films were adapted into novels, with Friday
        the 13th Part III adapted by two separate authors. When the franchise
        was sold to New Line Cinema, Cunningham returned as a producer to
        oversee two additional films, in addition to a crossover film with
        character Freddy Krueger from A Nightmare on Elm Street film series.
        Under New Line Cinema, thirteen novellas and various comic book series
        featuring Jason were published. Although the films were not popular with
        critics, Friday the 13th is considered one of the most successful media
        franchises in America—not only for the success of the films, but also
        because of the extensive merchandising and repeated references to the
        series in popular culture.[3] The franchise's popularity has generated a
        fanbase who have created their own Friday the 13th films, fashioned
        replica Jason Voorhees costumes, and tattooed their bodies with Friday
        the 13th artwork. Jason's hockey mask has become one of the most
        recognizable images in horror and popular culture.
      </Text>
      </ScrollView>

      {/* <Button 
            title="Go to the Home Screen"
            onPress={handleSettingsPress}
            /> */}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  header: {
    color: "red",
    fontSize: 55,
    padding: 25,
    textAlign: "center",
  },
  text: {
    color: "white",
    fontSize: 25,
    letterSpacing: 3,
    textAlign: "justify",
    padding: 20,
  },
});
