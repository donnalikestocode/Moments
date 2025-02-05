import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

var gratitudes = [
  {
    entry: 'Today I am grateful for this beautiful day! ',
    date: 'June 13, 2022',
    day: 'Sunday',
    num: '13'
  },
  {
    entry: 'Today I am grateful for my body and all the amazing things I can do in life because of my body ',
    date: 'June 14, 2022',
    day: 'Monday',
    num: '14'
  },
  {
    entry: 'Today I am grateful for my friends ',
    date: 'June 15, 2022',
    day: 'Tuesday',
    num: '15'
  },
  {
    entry: 'I am thankful for waking up to a sunny day. Love being able to have a warm bed to sleep in.',
    date: 'June 16, 2022',
    day: 'Wednesday',
    num: '16'
  },
  {
    entry: 'I am thankful for my friendships and being able to run',
    date: 'June 17, 2022',
    day: 'Thursday',
    num: '17'
  },
  {
    entry: 'Love seeing the sun out today and being able to open my eyes to see another beautiful day',
    date: 'June 18, 2022',
    day: 'Friday',
    num: '18'
  },
  {
    entry: 'Grateful for friends like Steve and Bailey who are always so kind and helpful',
    date: 'June 19, 2022',
    day: 'Saturday',
    num: '19'
  },
  {
    entry: 'Grateful for Perry for always loving me and spending time with me to do things I like :) ',
    date: 'June 20, 2022',
    day: 'Sunday',
    num: '20'
  },
  {
    entry: 'Grateful for this beautiful day and having parents who love me',
    date: 'June 21, 2022',
    day: 'Monday',
    num: '21'
  }
]

const renderGratitudes = () => {

  return (
    <View>
      <View style={{ flex: 1, borderBottomWidth: 0.25, borderTopWidth: 0.25, paddingLeft: 25, paddingTop: 5, paddingBottom: 5}}>
        <Text style={{fontFamily:'AnticDidone-Regular', fontSize: 20 }}>June 2022</Text>
      </View>
    { gratitudes.map((gratitude, index) => {
      return(
          <View style={{ flex: 1, paddingLeft: 25, paddingTop: 20, paddingBottom: 5, flexDirection:'row'}}>
            <View style={{flex: 1}}>
              <Text style={{fontFamily:'AnticDidone-Regular', fontSize: 15 }}>{gratitude.day.substring(0,3)}</Text>
              <Text style={{fontFamily:'AnticDidone-Regular', fontSize: 25 }}>{gratitude.num}</Text>
            </View>
            <View style={{flex: 5, paddingTop: 5, paddingRight: 30}}>
              <Text style={{fontFamily:'AnticDidone-Regular', fontSize: 10 }}>{gratitude.entry}</Text>
            </View>
          </View>
      )
    })}
    </View>
  )
}

const Entries = () => {

  let [fontsLoaded] = useFonts({
    'AnticDidone-Regular' : require ('../assets/fonts/AnticDidone-Regular.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingTop: 70, paddingLeft: 20, borderBottomWidth: 0.25 }}>
        <Text style={{fontFamily:'AnticDidone-Regular', fontSize: 36 }}>Collection of</Text>
        <Text style={{fontFamily:'AnticDidone-Regular', fontSize: 36 }}>gratitudes</Text>
      </View>
      <View style={{ flex: 6}}>
        <ScrollView
          vertical={true}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{
            alignItems: 'stretch',
            paddingTop: 0,
            paddingBottom: 7,
            paddingStart: 0,
            paddingEnd: 0,
          }}>
            {renderGratitudes()}
        </ScrollView>
      </View>
    </View>
  );
}

export default Entries;