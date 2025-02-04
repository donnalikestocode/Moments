import React, {useEffect, useState} from 'react';
import { Text, View, Image, Dimensions, ScrollView, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import axios from 'axios';
import moment from 'moment';

var {width, height} = Dimensions.get('window')

  const renderImages = ({ image, index }) => {

  const [moments, setMoments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/moments')
      .then((response) => {
        let momentsArr = [];
        // console.log('response', response.data);
        for (let i = 0; i < response.data.length; i++) {
          momentsArr.push(response.data[i])
        }
        // console.log('momentsArr', momentsArr);
        setMoments(momentsArr);
        return;
      })
      .catch((error) => {
        console.log('could not get moments')
      })
  },[moments]);

  let [fontsLoaded] = useFonts({
    'AnticDidone-Regular' : require ('../assets/fonts/AnticDidone-Regular.ttf')
  });

  return moments?.map((littleMoment, index ) => {
    // {var date = new Date(moment.date)}
    return(
      <View key={index}>
        <View style={{flex: 1, paddingTop: 0,paddingBottom: 10}}>
          <View style={{borderTopWidth: 0.25, borderBottomWidth: 0.25, padding: 5, paddingLeft: 10}}>
            <Text style ={{textAlign:'left', fontFamily: "AnticDidone-Regular", fontSize: 20}}>
              {
                // console.log(typeof moment.date)
                moment(littleMoment.date).format('MMMM Do YYYY')
                // moment(new Date()).format('MM/DD/YYYY')
              }
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
              source = {{uri: littleMoment.image}}
            />
        </View>
        <View style={{flex: 3, paddingTop: 10, paddingLeft: 40, paddingRight: 40, paddingBottom: 30}}>
          <Text style ={{textAlign:'center', fontSize: 10}}> {littleMoment.caption} </Text>
        </View>
      </View>
    )
  })
}

const CardMoments = ({ route, navigation }) => {

  const { image, date, caption, index } = route.params;

  // const [moments, setMoments] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/moments')
  //     .then((response) => {
  //       let momentsArr = [];
  //       // console.log('response', response.data);
  //       for (let i = 0; i < response.data.length; i++) {
  //         momentsArr.push(response.data[i])
  //       }
  //       // console.log('momentsArr', momentsArr);
  //       setMoments(momentsArr);
  //       return;
  //     })
  //     .catch((error) => {
  //       console.log('could not get moments')
  //     })
  // },[moments]);

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
        {/* <FlatList
         data ={moments}
         renderItem={()=> renderImages({image, date, caption, index, moments})}
         keyExtractor={moment => moment.image}
        >
        </FlatList> */}
    </View>
  );
}

export default CardMoments;