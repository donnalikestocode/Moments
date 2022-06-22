import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const EmptyScreen = () => {
  return null
}

import MomentsDetailedView from './MomentsDetailedView.js';

class MainScreen extends Component {
  render() {
    return(
      <Tab.Navigator>
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
        {/* <Tab.Screen name="Moments" component={MomentsDetailedView}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size}) => (
            <MaterialCommunityIcons name="emoticon-happy" color={'grey'} size={26}/>
          ),
        }}/> */}
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