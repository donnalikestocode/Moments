import React, { useEffect, useState } from 'react';
import { Text, View, Image, Dimensions, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import axios from 'axios';
import moment from 'moment';

const { width, height } = Dimensions.get('window');

const RenderImages = ({ moments }) => {
  return moments?.map((littleMoment, index) => (
    <View key={index}>
      <View style={{ flex: 1, paddingTop: 0, paddingBottom: 10 }}>
        <View style={{ borderTopWidth: 0.25, borderBottomWidth: 0.25, padding: 5, paddingLeft: 10 }}>
          <Text style={{ textAlign: 'left', fontFamily: "AnticDidone-Regular", fontSize: 20 }}>
            {moment(littleMoment.date).format('MMMM Do YYYY')}
          </Text>
        </View>
      </View>
      <View style={{ width: width, height: height / 2.5 }}>
        <Image
          style={{ flex: 1, alignSelf: 'stretch', width: width, height: undefined }}
          source={{ uri: littleMoment.image }}
        />
      </View>
      <View style={{ flex: 3, paddingTop: 10, paddingLeft: 40, paddingRight: 40, paddingBottom: 30 }}>
        <Text style={{ textAlign: 'center', fontSize: 10 }}>{littleMoment.caption}</Text>
      </View>
    </View>
  ));
};

const CardMoments = ({ route }) => {
  const { image, date, caption } = route.params;
  const [moments, setMoments] = useState([]);
  const [fontsLoaded] = useFonts({
    'AnticDidone-Regular': require('../assets/fonts/AnticDidone-Regular.ttf'),
  });

  useEffect(() => {
    axios.get('http://10.0.0.146:3000/moments')
      .then((response) => setMoments(response.data))
      .catch(() => console.log('Could not get moments'));
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView
        vertical={true}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          alignItems: 'stretch',
          paddingTop: 0,
          paddingBottom: 7,
        }}
      >
        <View style={{ flex: 7 }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 8 }}>
            <RenderImages moments={moments} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CardMoments;
