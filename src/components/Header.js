import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import { Icon } from 'react-native-elements';
import {colors, parameters} from '../global/styles';

export default function Header({type, navigation}) {
  return (
    <View style={styles.header}>
      <StatusBar barStyle="light-content" backgroundColor={colors.general} />
      <View style={styles.arrow}>
      <Icon 
        type="material-community"
        name={type}
        color={colors.major}
        size = {38}
        onPress = {() => {}}
        style={styles.arrow}
        onPress = {() => {navigation.goBack()}}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.general,
    height: parameters.headerHeight,
  },
  arrow: {
      marginLeft: 15,
      marginTop: 20
  }
});
