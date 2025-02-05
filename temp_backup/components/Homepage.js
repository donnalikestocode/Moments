import React from 'react';
import { Text, View, Image, Dimensions, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

var brooklynImage = require('../assets/pictures/14.jpg');

var {width, height} = Dimensions.get('window')

const Homepage = () => {

  let [fontsLoaded] = useFonts({
    'AnticDidone-Regular' : require ('../assets/fonts/AnticDidone-Regular.ttf')
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: .5, paddingTop: 70, paddingLeft: 15, borderBottomWidth: 0.25 }}>
        <Text style={{fontFamily:'AnticDidone-Regular', fontSize: 36 }}>Note to</Text>
        <Text style={{fontFamily:'AnticDidone-Regular', fontSize: 36 }}>Yourself:</Text>
      </View>
      <View style={{ flex: 3 }}>
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
          <View style={{ flex: 1, paddingBottom: 15}}>
            <View style={{flexDirection: 'row', flex:1 }}>
              <View style={{ flex: 4, paddingTop: 15, paddingLeft: 15, height: (height)/2.7}}>
                <Image
                  style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    width: 220,
                    height: undefined,
                    borderWidth: 0.25,
                    opacity: 0.8
                  }}
                  source = {brooklynImage}
                >
                </Image>
              </View>
              <View style={{ flex: 2.6, paddingTop: 90, padding: 10 }}>
                <Text style={{fontFamily:'AnticDidone-Regular', fontSize: 24, textAlign: 'center' }}> shine like the whole universe is yours. </Text>
                <View style={{paddingTop: 30}}>
                  <Text style={{fontFamily:'AnticDidone-Regular', fontSize: 10, textAlign: 'center' }}>RUMI </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ flex: .4, borderWidth: 0.25, paddingTop: 9}}>
            <Text style={{fontFamily:'AnticDidone-Regular', fontSize: 20, textAlign: 'left', paddingLeft:10 }}> I am </Text>
            <Text style={{fontFamily:'AnticDidone-Regular', fontSize: 30, textAlign: 'left', paddingLeft:15 }}>
              THANKFUL
            </Text>
          </View>
          <View style={{ flex: 1, paddingTop: 9}}>
            <View style={{flex: 1, width: width, height: height/5, borderWidth: 0.25}}>
              {/* <Text style={{fontFamily:'AnticDidone-Regular', fontSize: 20, textAlign: 'left', paddingLeft:10 }}> 1. </Text> */}
              <TextInput
              style= {{
                fontFamily: "AnticDidone-Regular",
                textAlign: 'left',
                fontSize: 15,
                paddingLeft: 20,
                paddingTop: 10
              }}
              multiline={true}
              // onChangeText={onChangeText}
              // value={}
              placeholder="what are you grateful for today?"
            />
            </View>
          </View>
          <View style={{flex:5}}>
            <TouchableOpacity >
              <View >
                <Text
                  style={{
                    fontFamily: "AnticDidone-Regular",
                    fontSize: 12,
                    textAlign: 'center'
                  }}>submit gratitude</Text>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </View>
  );
}

export default Homepage;