import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import {colors} from '../global/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {accountData, topCryptoData, newsData} from '../global/Data';
import Swiper from 'react-native-swiper';


export default function HomeScreen({navigation}) {
  const [indexCheck, setIndexCheck] = useState('0');
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={colors.general} />
      <View style={styles.homeTop}>
        <View style={styles.circle}>
          <Image
            style={{height: 40, width: 40, borderRadius: 100 / 2}}
            source={require('../../images/Edmund.png')}
          />
        </View>
        <Text
          onPress={() => {
            navigation.navigate('NewsList');
          }}
          style={styles.addCash}>
          Add Cash
        </Text>
        <View style={styles.notification}>
          <FontAwesome5
            name={'plus-circle'}
            size={25}
            solid
            color={colors.major}
          />
        </View>
        <View style={styles.notification1}>
          <FontAwesome5 name={'bell'} size={25} solid color={colors.major} />
          <Text style={styles.notificationNo}>0</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.dashboard}>
          <View style={styles.dashboardText}>
            <Text style={styles.tBalance}>Total balance</Text>
            <Text style={styles.Balance}>$5,460.05</Text>
            <Text style={styles.highAndLows}>+7.28%</Text>
          </View>

          <View style={styles.actionButtons}>
            <Pressable
              onPress={() => {
                navigation.navigate('SendCrypto');
              }}>
              <View style={styles.actionButtonCircle}>
                <View style={styles.message2}>
                  <FontAwesome5
                    name={'arrow-up'}
                    size={25}
                    solid
                    color={colors.general}
                  />
                </View>
                <Text style={styles.desc}>Send</Text>
              </View>
            </Pressable>
            <View
              onPress={() => {
                navigation.navigate('FullNews');
              }}
              style={styles.actionButtonCircle}>
              <View style={styles.message2}>
                <FontAwesome5
                  name={'arrow-down'}
                  size={25}
                  solid
                  color={colors.general}
                />
              </View>
              <Text style={styles.desc}>Receive</Text>
            </View>
            <Pressable 
             onPress={() => {
              navigation.navigate('PtoP');
            }}
            >
            <View
              
              style={styles.actionButtonCircle}>
              <View style={styles.message2}>
                <FontAwesome5
                  name={'sync-alt'}
                  size={25}
                  solid
                  color={colors.general}
                />
              </View>
              <Text style={styles.desc}>P2P</Text>
            </View>
            </Pressable>

            <Pressable
              onPress={() => {
                navigation.navigate('ExchangeCrypto');
              }}>
              <View style={styles.actionButtonCircle}>
                <View style={styles.message2}>
                  <FontAwesome5
                    name={'exchange-alt'}
                    size={25}
                    solid
                    color={colors.general}
                  />
                </View>
                <Text style={styles.desc}>Exchange</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.under}>
          <Text style={styles.text1}>All Assets</Text>
          <FontAwesome5
            name={'exclamation-circle'}
            size={20}
            solid
            color={colors.major}
          />
          <Text style={styles.text2}>See All</Text>
        </View>
        <View style={styles.flatListView}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={accountData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item,index}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View style={styles.card1}>
                  <View style={styles.percentage_change}>
                    <View style={styles.circle2}>
                      <Image
                        style={{height: 40, width: 40, borderRadius: 30}}
                        source={item.image}
                      />
                    </View>
                    <View style={styles.percentage_change1}>
                      <FontAwesome5
                        name={'caret-up'}
                        size={25}
                        solid
                        color={colors.up}
                      />
                      <Text style={styles.text7}>{item.percentage_change}</Text>
                    </View>
                  </View>
                  <Text style={styles.text3}>{item.name}</Text>
                  <Text style={styles.text4}>USD {item.usd_price}</Text>
                  <View style={styles.textCarrier}>
                    <Text style={styles.text5}>NGN {item.naira_balance}</Text>
                    <Text style={styles.text6}>USD {item.usd_balance}</Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={styles.slider}>
          <Swiper autoplay={true} loop={true}>
            <View style={styles.slider1}>
              <Image
                source={require('./img1.jpg')}
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slider2}>
              <Image
                source={require('./img2.jpg')}
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slider3}>
              <Image
                source={require('./img3.jpg')}
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slider3}>
              <Image
                source={require('./img4.jpg')}
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>
        <View style={styles.under}>
          <Text style={styles.text1}>Top Crypto</Text>
          <FontAwesome5
            name={'exclamation-circle'}
            size={20}
            solid
            color={colors.major}
          />
          <Text style={styles.text2}>See All</Text>
        </View>
        <View style={styles.flatListView}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={topCryptoData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(item.id);
                }}>
                <View style={styles.card2}>
                  <View style={styles.percentage_change}>
                    <View style={styles.circle2}>
                      <Image
                        style={{height: 40, width: 40, borderRadius: 30}}
                        source={item.image}
                      />
                    </View>
                    <View style={styles.percentage_change1}>
                      <FontAwesome5
                        name={'caret-up'}
                        size={25}
                        solid
                        color={colors.up}
                      />
                      <Text style={styles.text7}>{item.percentage_change}</Text>
                    </View>
                  </View>
                  <Text style={styles.text3}>{item.name}</Text>
                  <Text style={styles.text4}>USD {item.usd_price}</Text>
                </View>
              </Pressable>
            )}
          />
        </View>
        <View style={styles.under}>
          <Text style={styles.text1}>News</Text>
          <FontAwesome5
            name={'exclamation-circle'}
            size={20}
            solid
            color={colors.major}
          />
          <Text
            style={styles.text8}
            onPress={() => {
              navigation.navigate('AllNews');
            }}>
            See All
          </Text>
        </View>
        <View style={styles.flatListView1}>
          {newsData.map((item, index) => {
            return (
              <Pressable
                onPress={() => {
                  navigation.navigate('FullNews');
                }}>
                <View style={styles.news} key="{index}">
                  <View style={styles.newsPics}>
                    <Image
                      style={{height: 100, width: 130, borderRadius: 30}}
                      source={item.image}
                    />
                  </View>
                  <View style={styles.newsPics1}>
                    <Text style={styles.newsText}>{item.title}</Text>
                    <Text style={styles.newsText1}>
                      {item.source}
                      {'  '}
                      {item.dateTime}
                    </Text>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatListView: {
    marginLeft: 20,
    marginTop: 5,
  },
  flatListView: {
    marginLeft: 20,
    marginTop: 5,
  },
  flatListView1: {
    height: 650,
    marginLeft: 20,
    marginTop: 5,
  },
  card1: {
    width: 155,
    height: 190,
    marginLeft: 10,
    backgroundColor: colors.grey3,
    borderRadius: 20,
  },
  card2: {
    width: 155,
    height: 130,
    marginLeft: 10,
    backgroundColor: colors.grey3,
    borderRadius: 20,
  },
  percentage_change: {
    flexDirection: 'row',
  },
  percentage_change1: {
    flexDirection: 'row',
    marginLeft: 40,
    marginTop: 20,
  },
  textCarrier: {
    marginTop: 25,
  },
  text1: {
    fontSize: 18,
    color: colors.major,
    marginRight: 10,
  },
  text2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.up,
    marginLeft: 180,
  },
  text3: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: 'bold',
    color: colors.major,
    marginLeft: 10,
  },
  text4: {
    fontSize: 14,
    marginTop: 5,
    color: colors.major,
    marginLeft: 10,
  },
  text5: {
    fontSize: 11,
    marginTop: 5,
    fontWeight: 'bold',
    color: colors.major,
    marginLeft: 10,
  },
  text6: {
    fontSize: 9,
    marginTop: 5,
    color: colors.major,
    marginLeft: 10,
  },
  text7: {
    marginLeft: 5,
    marginTop: 3,
  },
  text8: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.up,
    marginLeft: 220,
  },
  message: {
    marginTop: 8,
  },
  under: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 20,
    height: 40,
  },
  message1: {
    marginTop: 3,
  },
  desc: {
    marginTop: 15,
    fontSize: 11,
    color: colors.major,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  message2: {
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 10,
  },
  tBalance: {
    fontSize: 18,
    color: colors.major,
  },
  Balance: {
    fontSize: 35,
    color: colors.major,
  },
  highAndLows: {
    fontSize: 15,
    color: colors.up,
  },
  actionButtons: {
    width: '80%',
    marginLeft: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  dashboard: {
    width: 350,
    height: 230,
    backgroundColor: colors.lightPink,
    borderRadius: 20,
    marginLeft: 30,
    marginTop: 30,
  },
  dashboardText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  notification: {
    marginLeft: 5,
    marginTop: 11,
  },
  notification1: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 11,
  },
  notificationNo: {
    color: 'red',
    marginTop: -5,
    marginLeft: -3,
    fontWeight: 'bold',
  },
  homeTop: {
    flexDirection: 'row',
    marginTop: 47,
    backgroundColor: colors.general,
    height: 60,
  },
  addCash: {
    marginLeft: 155,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#210A54',
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: colors.lightPink,
    borderRadius: 100 / 2,
    marginLeft: 30,
    marginTop: 5,
  },
  actionButtonCircle: {
    width: 50,
    height: 50,
    backgroundColor: colors.major,
    borderRadius: 100 / 2,
  },
  circle1: {
    width: 40,
    height: 40,
    backgroundColor: colors.lightPink,
    borderRadius: 100 / 2,
    marginLeft: 20,
  },
  circle2: {
    width: 40,
    height: 40,
    backgroundColor: colors.general,
    borderRadius: 100 / 2,
    marginLeft: 10,
    marginTop: 10,
  },
  slider: {
    width: 350,
    height: 150,
    borderRadius: 20,
    marginLeft: 30,
    marginTop: 20,
    backgroundColor: colors.grey3,
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
  newsPics: {
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
  newsText: {
    width: 213,
    height: 60,
    borderRadius: 20,
    marginLeft: 0,
    marginTop: 0,
    fontSize: 16,
    color: colors.major,
  },
  newsText1: {
    marginTop: 10,
    fontSize: 12,
    color: colors.major,
  },
  sliderImage: {
    borderRadius: 20,
    height: '100%',
    width: '100%',
  },
  slider1: {
    flex: 1,
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey1,
  },
  slider2: {
    flex: 1,
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey2,
  },
  slider3: {
    flex: 4,
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey3,
  },
});
