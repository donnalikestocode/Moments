import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createMaterialTopTabNavigator();

const EmptyScreen = () => {
  return null
}

import MomentsDetailedView from './MomentsDetailedView.js';
import CardMoments from './CardMoments.js'

class MainScreen extends Component {
  render() {
    return(
      <Tab.Navigator
        options={{
          tabBarPosition: 'bottom',
      }}>
        <Tab.Screen name="Moments" component={MomentsDetailedView}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size}) => (
              <MaterialCommunityIcons name="emoticon-happy" color={'grey'} size={26}/>
            ),
        }}/>
        <Tab.Screen name="MainUploadMoment" component={EmptyScreen}
          listeners={({ navigation }) => ({
            tabPress: event => {
              event.preventDefault();
              navigation.navigate("UploadMoment")
            }
          })}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size}) => (
              <MaterialCommunityIcons name="plus-box" color={'grey'} size={26}/>
            ),
        }}/>
        <Tab.Screen name="Card Moments" component={CardMoments}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarButton: () => null,
        }}/>
      </Tab.Navigator>
    );
  }
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})