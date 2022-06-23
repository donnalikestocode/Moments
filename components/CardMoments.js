import React, {useEffect} from 'react';
import { Text, View, Image, Dimensions, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import axios from 'axios';

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
    caption: 'Spent the day with Amy! '
  },
  {
    image: images[12],
    date: 'September 21, 2021',
    caption: 'Had ice cream with Maggie and Leanna :) '
  },
  {
    image: images[13],
    date: 'September 21, 2021',
    caption:' Kayaked in Brooklyn :3'
  },
  {
    image: images[14],
    date: 'September 21, 2021',
    caption: 'I miss Steve and Karrie!'
  }
]


var {width, height} = Dimensions.get('window')

const renderImages = ({ image }) => {

  let [fontsLoaded] = useFonts({
    'AnticDidone-Regular' : require ('../assets/fonts/AnticDidone-Regular.ttf')
  });

  return moments.map(( moment, index, moments ) => {
    return(
      <View key={index}>
        <View style={{flex: 1, paddingTop: 0,paddingBottom: 10}}>
          <View style={{borderTopWidth: 0.25, borderBottomWidth: 0.25, padding: 5, paddingLeft: 10}}>
            <Text style ={{textAlign:'left', fontFamily: "AnticDidone-Regular", fontSize: 20}}>
              {moment.date}
            </Text>
          </View>
        </View>
        <View style={[{ width: (width) }, {height: (height)/2.5 },
        // {padding: 2}
        ]}>
            <Image style={{
              flex: 1,
              alignSelf: 'stretch',
              width: width,
              height: undefined,
            }}
              source = {moment.image}
            />
        </View>
        <View style={{flex: 3, paddingTop: 10, paddingLeft: 40, paddingRight: 40, paddingBottom: 30}}>
          <Text style ={{textAlign:'center', fontSize: 10}}> {moment.caption} </Text>
        </View>
      </View>
    )
  })
}

const CardMoments = ({ route, navigation }) => {

  const { image, date, caption } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ScrollView
          vertical={true}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{
            alignItems: 'stretch',
            paddingTop: 0,
            paddingBottom: 7,
            paddingStart: 0,
            paddingEnd: 0,
          }}
        >
          <View style={{flex: 7}}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 8 }}>
              {renderImages({image, date, caption})}
            </View>
          </View>
        </ScrollView>
    </View>
  );
}

export default CardMoments;