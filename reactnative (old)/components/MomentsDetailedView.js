import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { useFonts } from 'expo-font';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';

const { width } = Dimensions.get('window');

const MomentsDetailedView = ({ navigation }) => {
  const [moments, setMoments] = useState([]);

  useEffect(() => {
    axios.get('http://10.0.0.146:3000/moments')
      .then((response) => {
        console.log('Fetched Moments:', response.data);
        setMoments(response.data);
      })
      .catch((error) => {
        console.error('Could not get moments:', error);
      });
  }, []);

  let [fontsLoaded] = useFonts({
    'AnticDidone-Regular': require('../assets/fonts/AnticDidone-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Ensures rendering only after fonts are loaded
  }

  const renderImages = () => {
    return moments.map((moment, index) => {
      let imageUri = moment.image.startsWith('file://')
        ? moment.image
        : FileSystem.documentDirectory + moment.image.split('/').pop(); // Ensures correct local path

      return (
        <View key={moment._id || index} style={{ width: width / 3.1, height: width / 3.1, padding: 2 }}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Moments', { moment, index })}>
            <Image
              style={{
                flex: 1,
                alignSelf: 'stretch',
                width: undefined,
                height: undefined,
                borderWidth: 0.5,
                opacity: 0.8,
              }}
              source={{ uri: imageUri }}
            />
          </TouchableWithoutFeedback>
        </View>
      );
    });
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column', paddingTop: 60 }}>
      <View style={{ flex: 1, borderBottomWidth: 0.25, paddingTop: 20 }}>
        <Text style={styles.text}>ENJOY</Text>
        <Text style={styles.text}>the</Text>
        <Text style={styles.text}>little things</Text>
      </View>
      <View style={{ flex: 4 }}>
        <ScrollView
          vertical
          showsVerticalScrollIndicator
          contentContainerStyle={{ alignItems: 'center', paddingStart: 5, paddingEnd: 5 }}
        >
          <View style={{ flex: 7 }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 8 }}>
              {renderImages()}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontFamily: 'AnticDidone-Regular', fontSize: 36, textAlign: 'left' },
});

export default MomentsDetailedView;
