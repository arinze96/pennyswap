import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList, Pressable} from 'react-native';
import Header from '../components/Header1';
import {newsData, newsData1} from '../global/Data';
import {colors} from '../global/styles';

export default function AllNews({navigation, pageTitle}) {
  const [indexCheck, setIndexCheck] = useState('0');
  return (
    <View style={styles.container}>
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
                navigation.navigate('FullNews');
              }}>
              <View style={styles.newsContainer}>
                <View style={styles.newsPics}>
                  <Image
                    style={{height: 150, width: 250, borderRadius: 30}}
                    source={item.image}
                  />
                </View>
                <Text numberOfLines={2} style={styles.newsText}>
                  {item.title}
                </Text>
                <Text style={styles.newsText1}>
                  {item.source}
                  {'  '}
                  {item.dateTime}
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
      <View style={styles.vNews}>
        <FlatList
          vertical={true}
          showsVerticalScrollIndicator={false}
          data={newsData1}
          keyExtractor={item => item.id}
          extraData={indexCheck}
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                setIndexCheck(item.id);
                navigation.navigate('FullNews');
              }}>
              <View style={styles.news} key={item.id}>
                <View style={styles.newsPics0}>
                  <Image
                    style={{height: 100, width: 130, borderRadius: 30}}
                    source={item.image}
                  />
                </View>
                <View style={styles.newsPics1}>
                  <Text numberOfLines={2} style={styles.newsText2}>
                    {item.title}
                  </Text>
                  <Text style={styles.newsText3}>
                    {item.source}
                    {'  '}
                    {item.dateTime}
                  </Text>
                </View>
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
  },
  vNews: {
    width: 370,
    height: 630,
    marginLeft: 20,
    marginTop: 20,
    paddingTop: 10,
  },
  newsContainer: {
    width: 250,
    height: 230,
    borderRadius: 30,
    marginRight: 20,
  },
  newsText: {
    marginTop: 10,
    fontSize: 15,
    color: colors.major,
  },
  newsText1: {
    marginTop: 7,
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.major,
  },
  newsPics: {
    width: 250,
    height: 150,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  news: {
    flexDirection: 'row',
    width: 350,
    height: 100,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 25,
  },
  newsPics0: {
    width: 130,
    height: 100,
    borderRadius: 20,
    marginLeft: 0,
    marginTop: 0,
  },
  newsPics1: {
    width: 213,
    height: 100,
    marginLeft: 7,
    marginTop: 0,
  },
  newsText2: {
    width: 213,
    height: 60,
    borderRadius: 20,
    marginLeft: 0,
    marginTop: 0,
    fontSize: 16,
    color: colors.major,
  },
  newsText3: {
    marginTop: 10,
    fontSize: 12,
    color: colors.major,
    fontWeight: 'bold',
  },
});
