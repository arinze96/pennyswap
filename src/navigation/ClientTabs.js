import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import Transactions from '../screens/Transactions';
import AllNews from '../screens/AllNews';
import Stories from '../screens/Stories';
import {colors} from '../global/styles';

const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
  return (
    <ClientTabs.Navigator tabBarOptions={{activeTintColor: colors.major}}>
      <ClientTabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="material" color={color} size={30} />
          ),
        }}
      />

      <ClientTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="person" type="material" color={color} size={30} />
          ),
        }}
      />
      <ClientTabs.Screen
        name="Stories"
        component={Stories}
        options={{
          tabBarLabel: 'Update',
          tabBarIcon: ({color, size}) => (
            <Icon name="update" type="material" color={color} size={30} />
          ),
        }}
      />
      <ClientTabs.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarLabel: 'Transactions',
          tabBarIcon: ({color, size}) => (
            <Icon name="tag" type="material" color={color} size={30} />
          ),
        }}
      />
      <ClientTabs.Screen
        name="AllNews"
        component={AllNews}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({color, size}) => (
            <Icon name="article" type="material" color={color} size={30} />
          ),
        }}
      />
    </ClientTabs.Navigator>
  );
}
