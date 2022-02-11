import React, {useState, useRef} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {colors} from '../global/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {accountData, topCryptoData, newsData} from '../global/Data';
import Swiper from 'react-native-swiper';
import {Modalize} from 'react-native-modalize';

const {height, width} = Dimensions.get('window');

export default function HomeScreen({navigation}) {
  const modalizeRef = useRef(null);
  function onOpen() {
    modalizeRef.current?.open();
  }
  function onClose() {
    modalizeRef.current?.close();
  }

  const [indexCheck, setIndexCheck] = useState('0');
  return (
    <View style={styles.container}>
      {/* /////////////////////THIS IS THE STATUS BAR///////////////////////// */}

      <StatusBar translucent backgroundColor={colors.general} />

      {/* ///////////THIS IS THE VIEW CONTAINING THE PROFILE PIC AND BUTTON TO ADD CASH////////////////// */}

      <View style={styles.homeTop}>
        <View style={styles.circle}>
          <Image
            style={{height: 40, width: 40, borderRadius: 100 / 2}}
            source={require('../../images/Edmund.png')}
          />
        </View>
        <Text style={styles.addCash}>Add Cash</Text>
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

      {/* // THIS IS THE SCROLLVIEW CARRING ALL THE CONTENT OF THE HOME SCREEN///////////////////////////// */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ////////HOME SCREEN DASHBOARD///////////////////////////////// */}

        <View style={styles.dashboard}>
          <View style={styles.dashboardText}>
            <Text style={styles.tBalance}>Total balance</Text>
            <Text style={styles.Balance}>$5,460.05</Text>
            <Text style={styles.highAndLows}>+7.28%</Text>
          </View>

          {/* ///PRESSABLE SEND MONEY BUTTON////////////////////////////////////////// */}

          <View style={styles.actionButtons}>
            <Pressable onPress={onOpen}>
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

            {/* //PRESSABLE RECEIVE MONEY BUTTON///////////////////////////////////// */}

            <Pressable
              onPress={() => {
                navigation.navigate('SendCrypto');
              }}>
              <View style={styles.actionButtonCircle}>
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
            </Pressable>

            {/* //PRESSABLE P2P BUTTON//////////////////////////////////////////// */}

            <Pressable
              onPress={() => {
                navigation.navigate('PtoP');
              }}>
              <View style={styles.actionButtonCircle}>
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

            {/* //PRESSABLE BUTTON EXCHANGE CRYPTO BUTTON////////////////////////////// */}

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

        {/* /// VIEW ALL THE ASSETS BY CLICKING THIS LINK/////////////////////////////////////// */}
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

        {/* //FLATLIST VIEW OF ALL ASSETS//////////////////////////////////////// */}

        <View style={styles.flatListView}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={accountData}
            keyExtractor={item => item.id}
            extraData={indexCheck}
            renderItem={({item, index}) => (
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

        {/* //THIS THE SLIDER OF THE HOME PAGE//////////////////////////////////////////////// */}
        <View style={styles.slider}>
          <Swiper
            autoplay={true}
            loop={true}
            style={styles.swiper}
            showsButtons={false}
            showsPagination={false}>
            <View style={styles.slider1}>
              <Image
                source={require('./img1.jpg')}
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slider1}>
              <Image
                source={require('./img2.jpg')}
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slider1}>
              <Image
                source={require('./img3.jpg')}
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slider1}>
              <Image
                source={require('./img4.jpg')}
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>

        {/* /// VIEW ALL THE TOP CRYPTO BY CLICKING THIS LINK/////////////////////////////////////// */}

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

        {/* //FLATLIST VIEW OF ALL MAJOR CRYPTO ASSETS//////////////////////////////////////// */}

        <View style={styles.flatListViewSmall}>
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

        {/* /// VIEW ALL THE TOP NEWS BY CLICKING THIS LINK/////////////////////////////////////// */}
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

        {/* //THIS IS THE LATTEST BLOCKCHAIN AND CRYPTOCURRENCY NEWS////////////////////////////// */}
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
      <Modalize ref={modalizeRef} snapPoint={250}>
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
          }}>
          <View style={styles.modalbottons}>
            <Text style={styles.modalCaption}>Send Options</Text>
            <FontAwesome5
              name={'times-circle'}
              size={25}
              onPress={onClose}
              solid
              color={colors.major}
              style={styles.cancel}
            />
          </View>
          <TouchableOpacity
            style={styles.modalbottons1}
            onPress={() => {
              navigation.navigate('SendCrypto');
              onClose();
            }}>
            <View style={styles.actionIcon}>
              <FontAwesome5
                name={'credit-card'}
                size={25}
                solid
                color={colors.major}
                style={styles.card}
              />
            </View>
            <Text style={styles.actionText}>Send to Wallet Address</Text>
            <FontAwesome5
              name={'chevron-right'}
              size={15}
              solid
              color={colors.major}
              style={styles.redirectArrow}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalbottons1}>
            <View style={styles.actionIcon}>
              <FontAwesome5
                name={'user'}
                size={25}
                solid
                color={colors.major}
                style={styles.card}
              />
            </View>
            <Text style={styles.actionText}>Send to pennyswap contacts</Text>
            <FontAwesome5
              name={'chevron-right'}
              size={15}
              solid
              color={colors.major}
              style={styles.redirectArrow1}
            />
          </TouchableOpacity>
        </View>
      </Modalize>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: width,
  },
  redirectArrow: {
    paddingTop: 20,
    marginLeft: '17.5%',
  },
  redirectArrow1: {
    paddingTop: 20,
    marginLeft: '16%',
  },
  actionText: {
    width: '60%',
    fontSize: 16,
    color: colors.major,
    paddingTop: 20,
    paddingLeft: 20,
  },
  card: {
    padding: 10,
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.lightPink,
    marginLeft: '2%',
    marginTop: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  modalCaption: {
    width: '60%',
    marginLeft: '3.5%',
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 15,
    color: colors.major,
  },
  cancel: {
    marginLeft: '25%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  modalbottons: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
  },
  modalbottons1: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    marginBottom: 5,
  },
  flatListView: {
    marginLeft: '6.5%',
    // marginTop: 5,
    height: '9.5%',
    // backgroundColor:'red'
  },
  flatListViewSmall: {
    marginLeft: '6.5%',
    marginTop: 5,
    height: '6%',
    // backgroundColor:'green'
  },
  flatListView1: {
    height: '35%',
    width: '85%',
    marginLeft: '7.5%',
    marginRight: '7.5%',
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
    marginLeft: '51%',
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
    marginLeft: '62%',
  },
  message: {
    marginTop: 8,
  },
  under: {
    flexDirection: 'row',
    marginLeft: '7.5%',
    marginRight: '7.5%',
    width: '85%',
    marginTop: '5%',
    marginBottom: '1%',
    height: '2%',
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
    marginLeft: '10%',
    marginRight: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  dashboard: {
    width: '85%',
    height: '10%',
    backgroundColor: colors.lightPink,
    borderRadius: 20,
    marginLeft: '7.5%',
    marginRight: '7.5%',
    marginTop: '3%',
  },
  dashboardText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '7%',
  },
  notification: {
    marginLeft: '2%',
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
    width: width,
    backgroundColor: colors.general,
    height: '7%',
  },
  addCash: {
    marginLeft: '38%',
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
    width: '85%',
    height: '9.5%',
    borderRadius: 20,
    marginLeft: '7.5%',
    marginRight: '7.5%',
  },
  swiper: {
    height: '30%',
  },
  news: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
    borderRadius: 20,
    marginTop: 5,
    marginBottom: '3%',
  },
  newsPics: {
    width: '33%',
    height: 100,
    borderRadius: 20,
    marginLeft: 0,
    marginTop: 0,
  },
  newsPics1: {
    width: '60%',
    height: 100,
    marginLeft: 7,
    marginTop: 0,
    alignContent: 'center',
    alignItems: 'center',
  },
  newsText: {
    width: '100%',
    height: 60,
    borderRadius: 20,
    marginLeft: 0,
    marginTop: 0,
    fontSize: 16,
    color: colors.major,
  },
  newsText1: {
    width: '100%',
    marginTop: 10,
    fontSize: 12,
    color: colors.major,
  },
  sliderImage: {
    borderRadius: 20,
    height: '100%',
    width: '100%',
    backgroundColor: 'green',
  },
  slider1: {
    width: '100%',
    height: 205,
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
  },
});
