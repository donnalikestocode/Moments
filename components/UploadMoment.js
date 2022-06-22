import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Text, TouchableOpacity} from 'react-native';
// import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import DateTimePicker from '@react-native-community/datetimepicker';

const UploadMoment = () => {
  const [text, onChangeText] = useState("");
  // const [newDate, onChangeDate] = useState("");

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  let [fontsLoaded] = useFonts({
    'AnticDidone-Regular' : require ('../assets/fonts/AnticDidone-Regular.ttf')
  });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View
      style={styles.container}>
      <View
       style={styles.dateContainer}>
        {/* <TextInput
          onChangeText={onChangeDate}
          value={newDate}
          placeholder="date"
          style={styles.date}
        /> */}
        {/* <Text
        style={{textAlign: 'center', flex:4, fontFamily:'AnticDidone-Regular', fontSize: 25, paddingTop:5 }}
        > new moment </Text> */}
        <View
        style={{flex: 4, paddingRight: 20, justifyContent:'center'}}
        >
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        </View>
      </View>
      <TouchableOpacity
      style={styles.buttonContainer}
      >
        <View>
          <Text
            style={styles.button}>upload image</Text>
        </View>
      </TouchableOpacity>
      <View
       style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="add text"
        />
      </View>
      <View
        style={styles.bar} >
        <TouchableOpacity>
          <View>
            <Text
              style={styles.barbutton}>add</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View>
            <Text
              style={styles.barbutton}>cancel</Text>
          </View>
        </TouchableOpacity>
      </View>
   </View>
  )
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "AnticDidone-Regular",
    fontSize: 20,
    textAlign: 'left'
  },
  container: {
    flexDirection: "column",
    flex: 1,
    paddingTop: 10,
  },
  dateContainer: {
    flex: 1,
    flexDirection: "row",
    // borderWidth:'0.25',
    // borderRightWidth: 0,
    // borderLeftWidth: 0,
    // height: 20,
    justifyContent: 'space-between',
    // paddingTop: 20
  },
  date: {
    fontFamily: "AnticDidone-Regular",
    fontSize: 20,
    textAlign: 'center'
  },
  buttonContainer: {
    flex: 8,
    justifyContent: 'center',
    borderWidth:'0.25',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    fontFamily: "AnticDidone-Regular",
    fontSize: 20,
    textAlign: 'center'
  },
  inputContainer: {
    flex: 4,
    // borderWidth:'0.25',
    // borderRightWidth: 0,
    // borderLeftWidth: 0,
    width: 390,
    height: 237,
    justifyContent: 'top',
    marginBottom: 10,
  },
  input: {
    fontFamily: "AnticDidone-Regular",
    textAlign: 'center',
    fontSize: 15,
    margin: 30
  },
  bar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth:'0.25',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    paddingTop: 15,
    paddingBottom: 50,
    backgroundColor: "#F3F2F2"
  },
  barbutton: {
    fontFamily: "AnticDidone-Regular",
    fontSize: 15,
    textAlign: 'center'
  }

})

export default UploadMoment;