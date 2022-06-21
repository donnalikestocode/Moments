import React from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
// import { AppLoading } from 'expo';
// import { useFonts, AnticDidone_400Regular } from '@expo-google-fonts/antic-didone';

// const UploadMoment = () => {
//   return (
//     <View>
//       <Text> Hello! </Text>
//     </View>
//   )
// }

const UploadMoment = () => {
  const [text, onChangeText] = React.useState("add text");
  const [date, onChangeDate] = React.useState("date");
  // let [fontsLoaded, error] = useFonts({AnticDidone_400Regular});

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <View
      style={styles.container}>
      <View
       style={styles.dateContainer}>
        <TextInput
          onChangeText={onChangeText}
          value={date}
          style={styles.date}
        />
      </View>
      <View
        style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Upload Image"
          color="black"
          // accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View
       style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View
        style={styles.bar} >
        <Button
          title="Add"
          color="black"
          // accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Cancel"
          color="black"
          // accessibilityLabel="Learn more about this purple button"
        />
      </View>
   </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    paddingTop: 90,
  },
  dateContainer: {
    flex: 1,
    borderWidth:'0.5',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    height: 20,
    justifyContent: 'center'
  },
  date: {
    fontFamily: "AnticDidone-Regular",
    fontSize: 20,
    textAlign: 'center'
  },
  buttonContainer: {
    flex: 8,
    justifyContent: 'center',
    borderWidth:'0.5',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 10,
    marginBottom: 10,
  },

  inputContainer: {
    flex: 4,
    borderWidth:'0.5',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    width: 390,
    height: 237,
    justifyContent: 'top',
    marginBottom: 10,
  },
  input: {
    fontFamily: "AnticDidone-Regular",
    textAlign: 'center',
    fontSize: 20,
    margin: 30
  },
  bar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth:'0.5',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#F3F2F2"
  }

})

export default UploadMoment;