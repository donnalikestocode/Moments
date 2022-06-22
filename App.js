import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import MainScreen from './components/MainScreen.js'
import UploadMoment from './components/UploadMoment.js';
import MomentsDetailedView from './components/MomentsDetailedView.js';
import CardMoments from './components/CardMoments.js'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main"  >
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false}} />
        <Stack.Screen name="UploadMoment" component={UploadMoment}  />
        {/* <Stack.Screen name="Card Moments" component={CardMoments} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEAE4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
