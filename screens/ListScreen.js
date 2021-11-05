import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
import { Linking } from 'react-native';


export function ListScreen ({route, navigation}) {


    return(
        <View style={styles.container}>
            <ScrollView>
        <Text style={styles.header}>LIST</Text>
      <Text style={styles.text}>
Friday the 13th (1980) May 9, 1980.{"\n"}
Friday the 13th Part 2. April 30, 1981. {"\n"}
Friday the 13th Part III. August 13, 1982. {"\n"}
Friday the 13th: The Final Chapter. {"\n"}
Friday the 13th: A New Beginning. {"\n"}
Friday the 13th Part VI: Jason Lives. {"\n"}
Friday the 13th Part VII: The New Blood. {"\n"}
Friday the 13th Part VIII: Jason Takes Manhattan{"\n"}
      </Text>
            
            {/* <Button 
            title="Go to the Home Screen"
            onPress={handleSettingsPress}
            /> */}

</ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
    
    },
    header: {
        color: "red",
        fontSize: 55,
        padding: 25,
      },
      text: {
        color: "white",
        fontSize: 15,
        letterSpacing: 3,
        textAlign: "justify",
        padding: 20,
      },
    

  });
  