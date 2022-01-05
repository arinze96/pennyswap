import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Pressable,
} from 'react-native';
import Header from '../components/Header1';
import {newsData} from '../global/Data';
import {colors} from '../global/styles';

export default function AllNews({navigation, pageTitle}) {
  return (
    <View style={styles.container}>
      <Header
        type="arrow-left"
        navigation={navigation}
        style={styles.moveHeader}
        pageTitle={'News'}
      />
      <Header
        type="arrow-left"
        navigation={navigation}
        style={styles.moveHeader}
        pageTitle={'News'}
      />
      <View style={styles.hNews}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={newsData}
          keyExtractor={item => item.id}
          extraData={indexCheck}
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                setIndexCheck(item.id);
              }}>
              <View style={styles.newsContainer}>
                <View style={styles.newsPics}>
                  <Image
                    style={{height: 150, width: 250, borderRadius: 30}}
                    source={item.image}
                  />
                </View>
                <Text numberOfLines={2} style={styles.newText}>
                  {item.title}
                </Text>
                <Text style={styles.newText1}>
                  {item.source}
                  {'  '}
                  {item.dateTime}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  moveHeader: {
    marginTop: 30,
  },
  hNews: {
    width: 370,
    height: 230,
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: 'red',
  },
  newsContainer: {
    width: 250,
    height: 230,
    borderRadius: 30,
  },
  newText: {
    marginTop: 10,
    fontSize: 15,
  },
  newText1: {
    marginTop: 7,
    fontSize: 10,
    fontWeight: 'bold',
  },
  newsPics: {
    width: 250,
    height: 150,
    borderRadius: 30,
    backgroundColor: 'white',
  },
});
