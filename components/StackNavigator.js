import { StyleSheet, Text, View } from 'react-native'

import Checkout from './Checkout';
import ForgotPassword from './ForgotPassword';
import Landing from './Landing';
import Login from './Login';
import OrderHistory from './OrderHistory';
import Product from './Product';
import React from 'react'
import Register from './Register';
import TabNavigator from './TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false } } />
      <Stack.Screen name="Login" component={Login} options={{ headertitle: 'Login' }} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headertitle: 'Forgot Password' }} />
      <Stack.Screen name="Product" component={Product} options={{ headerTitle: 'Product Details' }} />
      <Stack.Screen name="Checkout" component={Checkout} options={{ headerTitle: 'Checkout' }} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} options={{ headerTitle: 'Order History' }} />
      <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})