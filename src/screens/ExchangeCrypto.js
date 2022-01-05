import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header2 from '../components/Header2';
import { colors } from '../global/styles';

export default function ExchangeCrypto({navigation, pageTitle, alignCaption, desiredColor}) {
  return (
    <View style={styles.container}>
      <Header2
        type="arrow-left"
        navigation={navigation}
        pageTitle={'Exchange'}
        alignCaption={85}
        desiredColor={colors.lightPink}
      />
      <View styles={styles.space}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    space:{
        width: 100,
        height: 100,
        marginTop:200,
        backgroundColor:'red',
    }
})
