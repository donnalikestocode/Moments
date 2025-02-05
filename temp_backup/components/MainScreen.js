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
import Homepage from './Homepage.js'
import Entries from './Entries.js'

class MainScreen extends Component {
  render() {
    return(
      <Tab.Navigator
        options={{
          tabBarPosition: 'bottom',
      }}>
        <Tab.Screen name="Entries" component={Entries}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size}) => (
              <MaterialCommunityIcons name="account-heart" color={'grey'} size={26}/>
            ),
        }}/>
        <Tab.Screen name="Homepage" component={Homepage}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size}) => (
              <MaterialCommunityIcons name="home-heart" color={'grey'} size={26}/>
            ),
        }}/>
        <Tab.Screen name="MomentsDetailed" component={MomentsDetailedView}
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
              navigation.navigate("Upload Moment")
            }
          })}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size}) => (
              <MaterialCommunityIcons name="plus-box" color={'grey'} size={26}/>
            ),
        }}/>
        <Tab.Screen name="Moments" component={CardMoments}
        options={{
          // headerShown: false,
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