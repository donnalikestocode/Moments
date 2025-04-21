import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
import { useFonts } from 'expo-font';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const UploadMoment = ({ navigation }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);

  let [fontsLoaded] = useFonts({
    'AnticDidone-Regular': require('../assets/fonts/AnticDidone-Regular.ttf')
  });

  // ✅ Request Media Library Permissions
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Permission Denied", "Please allow access to your photo library.");
      }
    })();
  }, []);

  const onChange = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) setDate(selectedDate);
  };

  const showDatepicker = () => setShow(true);

  // ✅ Fixed Image Picker to use the correct `MediaType.Photo`
  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        setImage(result.assets[0].uri); // ✅ Correctly accessing image URI
      }
    } catch (error) {
      console.error("Error picking an image:", error);
      Alert.alert("Error", "Could not pick an image. Please try again.");
    }
  };

  const addPost = async () => {
    if (!image) {
      Alert.alert("Missing Image", "Please select an image before posting.");
      return;
    }

    const post = {
      image,
      date,
      caption: text
    };

    try {
      await axios.post('http://10.0.0.146:3000/moment', post);
      console.log('New post has been added');
      navigation.navigate('MomentsDetailed');
    } catch (error) {
      console.error('Unable to log post:', error);
      Alert.alert("Upload Failed", "Could not upload your moment. Try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <View style={{ flex: 4, paddingRight: 20, justifyContent: 'center' }}>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            onChange={onChange}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={pickImage}>
        <View>
          {image && <Image source={{ uri: image }} style={{ width: 400, height: 300 }} />}
          <Text style={styles.button}>Upload Image</Text>
        </View>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setText}
            value={text}
            placeholder="Add a caption"
            multiline={true}
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.bar}>
        <TouchableOpacity onPress={addPost}>
          <View>
            <Text style={styles.barbutton}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "column", flex: 1, paddingTop: 10 },
  dateContainer: { flex: 1, flexDirection: "row", justifyContent: 'space-between' },
  buttonContainer: { flex: 8, justifyContent: 'center', borderWidth: 0.25, marginTop: 10, marginBottom: 5 },
  button: { fontFamily: "AnticDidone-Regular", fontSize: 15, textAlign: 'center', padding: 20 },
  inputContainer: { flex: 3, width: 390, height: 157, paddingTop: 100 },
  input: { fontFamily: "AnticDidone-Regular", textAlign: 'center', fontSize: 15, margin: 30 },
  bar: { flexDirection: "row", justifyContent: "space-evenly", borderWidth: 0.25, paddingTop: 15, paddingBottom: 50, backgroundColor: "#F3F2F2" },
  barbutton: { fontFamily: "AnticDidone-Regular", fontSize: 15, textAlign: 'center' }
});

export default UploadMoment;
