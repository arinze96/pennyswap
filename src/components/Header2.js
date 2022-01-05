import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import { Icon } from 'react-native-elements';
import {colors, parameters} from '../global/styles';

export default function Header2({type, navigation, pageTitle, alignCaption, desiredColor}) {
  return (
    <View style={{backgroundColor:desiredColor, ...styles.header }}>
      <StatusBar barStyle="light-content" backgroundColor={desiredColor} />
      <View style={{backgroundColor:desiredColor, ...styles.arrow }}>
      <Icon 
        type="material-community"
        name={type}
        color={colors.major}
        size = {38}
        onPress = {() => {}}
        style={styles.arrow}
        onPress = {() => {navigation.goBack()}}
      />
      <Text style={{ marginLeft:alignCaption, ...styles.caption }}>{pageTitle}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: parameters.headerHeight2,
},
caption:{
    fontSize:30,
    marginTop:0,
    color:colors.major,
    fontWeight:'bold',
},
arrow: {
    marginLeft: 15,
    marginTop:70,
    height: 40,
    flexDirection:'row',
  }
});
