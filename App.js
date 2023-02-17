import 'expo-dev-client';
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main"  >
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false}} />
        <Stack.Screen name="Upload Moment" component={UploadMoment}  />
      </Stack.Navigator>
    </NavigationContainer>
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
