import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header2 from '../components/Header2';
import { colors } from '../global/styles';

export default function PtoP({navigation, pageTitle, alignCaption, desiredColor}) {
  return (
    <View style={styles.container}>
      <Header2
        type="arrow-left"
        navigation={navigation}
        pageTitle={'P2P'}
        alignCaption={125}
        desiredColor={colors.lightPink}
      />
      <View styles={styles.space}>
          <Text>srjdndgnnfdgmsbf</Text>
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
        backgroundColor:colors.lightPink,
    }
})
