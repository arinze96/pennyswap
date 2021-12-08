import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import RootNavigator from './src/navigation/RootNavigator'
import SignInScreen from './src/screens/authScreens/SignInScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <RootNavigator/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})