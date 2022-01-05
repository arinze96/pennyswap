import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header2 from '../components/Header2';
import {colors} from '../global/styles';

export default function SendCrypto({
  navigation,
  pageTitle,
  alignCaption,
  desiredColor,
}) {
  return (
    <SafeAreaView forceInset={{top: 'always'}} style={styles.container}>
        <Header2
          type="arrow-left"
          navigation={navigation}
          pageTitle={'Send'}
          alignCaption={122}
          desiredColor={colors.lightPink}
        />
        <View style={styles.space}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: 1,
  space: {
    width: '100%',
    height: 50,
    // marginTop:200,
    backgroundColor: colors.lightPink,
  },
});
