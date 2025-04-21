import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import MomentsDetailedView from './MomentsDetailedView.js';
import CardMoments from './CardMoments.js';
import Homepage from './Homepage.js';
import Entries from './Entries.js';

const EmptyScreen = () => <View />; // Ensures it renders a valid component

const MainScreen = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tab.Screen
        name="Entries"
        component={Entries}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Homepage"
        component={Homepage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MomentsDetailed"
        component={MomentsDetailedView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="emoticon-happy" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MainUploadMoment"
        component={EmptyScreen}
        listeners={({ navigation }) => ({
          tabPress: event => {
            event.preventDefault();
            navigation.navigate("Upload Moment");
          },
        })}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-box" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Moments"
        component={CardMoments}
        options={{
          tabBarButton: () => null, // Hides it from the tab bar
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
