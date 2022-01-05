import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../global/styles';
import {newsData} from '../global/Data';

        {/* <View style={styles.flatListView1}>
          <FlatList
            vertical={true}
            showsHorizontalScrollIndicator={false}
            data={newsData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View>
                  <Pressable>
                    <View style={styles.news}>
                      <View style={styles.newsPics}>
                      <Image
                        style={{height: 100, width: 40, borderRadius: 30}}
                        source={item.image}
                      />
                      </View>
                      <View style={styles.newsPics1}>
                        <Text style={styles.newsText}></Text>
                        <Text style={styles.newsText1}>
                        {item.source}
                        {item.dateTime}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                </View>
              </Pressable>
            )}
          /> */}
        {/* </View> */}
        {/* <View style={styles.flatListView1}>
        newsData.map((item) => (
          <View>
            <Text>{item.source}</Text>
          </View>
          ))
        </View> */}

        
        export default function NewsList({data}) {
            return (
               <View style={styles.flatListView1}>
                   {
                       data.map((item, index) => {
                          return(
                            <Pressable >
                            <View style={styles.news} key={index}>
                              <View style={styles.newsPics}>
                              <Image
                                style={{height: 100, width: 130, borderRadius: 30}}
                                source={item.image}
                              />
                              </View>
                              <View style={styles.newsPics1}>
                                <Text style={styles.newsText}>{item.title}</Text>
                                <Text style={styles.newsText1}>
                                {item.source}{'  '}
                                {item.dateTime}
                                </Text>
                              </View>
                            </View>
                          </Pressable>
                          )
                       })
                   }
               </View>
            )
        }


        const styles = StyleSheet.create({
            flatListView1: {
              height: 550,
              marginLeft: 20,
              marginTop: 5,
            },
            news: {
              flexDirection: 'row',
              width: 350,
              height: 100,
              borderRadius: 20,
              marginLeft: 10,
              marginTop: 5,
              marginBottom: 20
            },
            newsPics: {
              width: 130,
              height: 100,
              borderRadius: 20,
              marginLeft: 0,
              marginTop: 0
            },
            newsPics1: {
              width: 213,
              height: 100,
              marginLeft: 7,
              marginTop: 0
            },
            newsText: {
              width: 213,
              height: 60,
              borderRadius: 20,
              marginLeft: 0,
              marginTop: 0,
              fontSize: 16
            },
            newsText1: {
              marginTop: 10,
              fontSize: 12,
            }
          });
        