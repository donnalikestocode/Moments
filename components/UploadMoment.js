import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import { useFonts } from 'expo-font';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const UploadMoment = ({navigation}) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);

  let [fontsLoaded] = useFonts({
    'AnticDidone-Regular' : require ('../assets/fonts/AnticDidone-Regular.ttf')
  });

  const onChangeText = (event) => {
    // console.log('text', event);
    setText(event);
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    console.log('currentDate', currentDate)
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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const addPost = () => {
    let post = {
      image: image,
      date: date,
      caption: text
    }
    axios.post('http://localhost:3000/moment', post)
      .then((response) => {
        console.log('new post has been added')
        navigation.navigate('MomentsDetailed')
      })
      .catch((error) => {
        console.log('unable to log post', error)
      })
  }

  return (
    <View
      style={styles.container}>
      <View
       style={styles.dateContainer}>
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
      onPress={pickImage}
      >
        <View>
          {image && <Image source={{ uri: image }} style={{ width: 400, height: 300 }} />}
          <Text
            style={styles.button}>upload image</Text>
        </View>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View
       style={styles.inputContainer}
       >
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="add text"
          multiline={true}
          onSubmit ={Keyboard.dismiss}
        />
        </View>
      </TouchableWithoutFeedback>

      <View
        style={styles.bar} >
        <TouchableOpacity
        onPress={addPost}
        >
          <View>
            <Text
              style={styles.barbutton}>add</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <View>
            <Text
              style={styles.barbutton}>cancel</Text>
          </View>
        </TouchableOpacity> */}
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
    justifyContent: 'space-between',
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
    marginBottom: 5,
  },
  button: {
    fontFamily: "AnticDidone-Regular",
    fontSize: 15,
    textAlign: 'center',
    padding: 20
  },
  inputContainer: {
    flex: 3,
    width: 390,
    height: 157,
    justifyContent: 'top',
    marginBottom: 10,
    // marginTop:50,
    paddingTop:100,
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