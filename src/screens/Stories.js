import React from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../global/styles';

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

export default function Stories() {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={colors.lightPink} />
      <View style={styles.stories}>
        <View>
          <View style={styles.categories}></View>
          <Text>Tips</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.newsBoard}></View>
        <View style={styles.newsBoard}></View>
        <View style={styles.newsBoard}></View>
        <View style={styles.newsBoard}></View>
        <View style={styles.newsBoard}></View>
        <View style={styles.newsBoard}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stories: {
    width: ScreenWidth,
    height: 200,
    backgroundColor: colors.lightPink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categories: {},
  newsBoard: {
    width: 350,
    height: 200,
    backgroundColor: colors.grey4,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
