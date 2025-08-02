import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import StackNavigator from '../components/StackNavigator'

const index = () => {
  return (
    <StackNavigator/>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})