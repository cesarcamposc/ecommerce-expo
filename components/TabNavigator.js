import { StyleSheet, Text, View } from 'react-native'

import Cart from './Cart';
import Home from './Home';
import Profile from './Profile';
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>    
  )
}

export default TabNavigator

const styles = StyleSheet.create({})