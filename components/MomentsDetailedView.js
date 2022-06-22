import React, { useState } from 'react';
import {
  View,
  TextInput,
   Button,
   StyleSheet,
   Text,
   TouchableWithoutFeedback,
   Dimensions,
   Image,
   ScrollView,
   FlatList
} from 'react-native';
import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


var images = [
  require('../assets/pictures/1.jpg'),
  require('../assets/pictures/2.jpeg'),
  require('../assets/pictures/3.jpeg'),
  require('../assets/pictures/soju.png'),
  require('../assets/pictures/5.jpeg'),
  require('../assets/pictures/6.jpeg'),
  require('../assets/pictures/7.jpg'),
  require('../assets/pictures/8.jpg'),
  require('../assets/pictures/9.jpg'),
  require('../assets/pictures/10.jpeg'),
  require('../assets/pictures/11.jpg'),
  require('../assets/pictures/12.jpg'),
  require('../assets/pictures/13.jpg'),
  require('../assets/pictures/14.jpg'),
  require('../assets/pictures/15.jpg')
]

var moments = [
  {
    image: images[0],
    date: 'September 27, 2021',
    caption: 'Had some time to read one of my favorite books'
  },
  {
    image: images[1],
    date: 'September 27, 2021',
    caption: 'binged Run BTS '
  },
  {
    image: images[2],
    date: 'September 27, 2021',
    caption: 'spent time on myself'
  },
  {
    image: images[3],
    date: 'September 27, 2021',
    caption: 'Leles bday :3'
  },
  {
    image: images[4],
    date: 'September 27, 2021',
    caption: 'love being on vacation and not doing anything (: '
  },
  {
    image: images[5],
    date: 'September 27, 2021',
    caption: 'our beautiful florence airbnb'
  },
  {
    image: images[6],
    date: 'September 27, 2021',
    caption: 'Christmas at Julisas!'
  },
  {
    image: images[7],
    date: 'September 27, 2021',
    caption: 'Beautiful day in LA'
  },
  {
    image: images[8],
    date: 'September 27, 2021',
    caption: 'I got to enjoy a nice picnic in anaheim with Perry today :) I painted under the sun'
  },
  {
    image: images[9],
    date: 'September 21, 2021',
    caption: 'first time in Taiwan!'
  },
  {
    image: images[10],
    date: 'September 21, 2021',
    caption: 'first time in Hong Kong!'
  },
  {
    image: images[11],
    date: 'September 21, 2021',
    caption: 'Had ice cream with Maggie and Leanna :) '
  },
  {
    image: images[12],
    date: 'September 21, 2021',
    caption: 'Kayaked in Brooklyn :3'
  },
  {
    image: images[13],
    date: 'September 21, 2021',
    caption: 'first time in Taiwan!'
  },
  {
    image: images[14],
    date: 'September 21, 2021',
    caption: 'I miss Steve and Karrie!'
  }
]

var {width, height} = Dimensions.get('window')

const renderImages = ({ navigation }) => {

  let [fontsLoaded] = useFonts({
    'AnticDidone-Regular' : require ('../assets/fonts/AnticDidone-Regular.ttf')
  });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return moments.map(( moment, index ) => {
    return(
        <View key={index} style={[{ width: (width) / 3.08 }, {height: (width) / 3.08 },
        {padding: 2}
        ]}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Moments', moment)}>
            <Image style={{
              flex: 1,
              alignSelf: 'stretch',
              width: undefined,
              height: undefined,
              borderWidth: 0.5,
              opacity: 0.8
            }}
              source = {moment.image}
            />
          </TouchableWithoutFeedback>
        </View>
    )
  })
}

const MomentsDetailedView = ({navigation}) => {

  return(
    <View style={{ flex: 1, flexDirection: 'column', paddingTop: 60}}>
      <View style={{flex: 1,  borderBottomWidth: 0.25, paddingTop: 20}}>
        <Text style={styles.text}> ENJOY </Text>
        <Text style={styles.text}> the </Text>
        <Text style={styles.text}> little things </Text>
      </View>
      <View style={{flex: 4}}>
        <ScrollView
          vertical={true}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{
              alignItems: 'center',
              paddingStart: 5,
              paddingEnd: 5,
          }}
          >
          <View style={{flex: 7}}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 8 }}>
              {renderImages({navigation})}
            </View>
          </View>
        </ScrollView>
      </View>
      </View>
  )
}

  const styles = StyleSheet.create({
    text: {
      fontFamily: "AnticDidone-Regular",
      fontSize: 36,
      textAlign: 'left'
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
      fontSize: 12,
      textAlign: 'center'
    }
  })


export default MomentsDetailedView;