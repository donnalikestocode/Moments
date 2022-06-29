import React, { useState, useEffect } from 'react';
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
import axios from 'axios';

var {width, height} = Dimensions.get('window')

const renderImages = ({ navigation }) => {
  const [moments, setMoments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/moments')
      .then((response) => {
        let momentsArr = [];
        for (let i = 0; i < response.data.length; i++) {
          momentsArr.push(response.data[i])
        }
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

  return moments?.map(( moment, index ) => {
    // console.log('moment', moment)
    return(
        <View key={index} style={[{ width: (width) / 3.08 }, {height: (width) / 3.08 },
        {padding: 2}
        ]}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Moments', moment, {index: index})}>
            <Image style={{
              flex: 1,
              alignSelf: 'stretch',
              width: undefined,
              height: undefined,
              borderWidth: 0.5,
              opacity: 0.8
            }}
              source = {{uri: moment.image}}
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