import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../../global/styles';
const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

export default function VerificationPage({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.lightPink} barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon
              name="chevron-left"
              size={24}
              color="#210A54"
              onPress={() => {
                navigation.goBack();
              }}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.headerTitle}>Verification Code</Text>
          </View>
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Confirmation</Text>
          <Text style={styles.subTitle}>
            Please type the verification code sent to +192381193858
          </Text>
          <View style={styles.otpWrapper}>
            <View style={styles.otpButton}>
              <Text style={styles.textOtp}>1</Text>
            </View>
            <View style={styles.otpButton}>
              <Text style={styles.textOtp}>8</Text>
            </View>
            <View style={styles.otpButton}>
              <Text style={styles.textOtp}>0</Text>
            </View>
            <View style={styles.otpButton}>
              <Text style={styles.textOtp}>4</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonWrapper}>
            <Text style={styles.buttonResend}>Resend Code &gt; </Text>
          </TouchableOpacity>
          <View>
            {numbers.map((item, index) => {
              return (
                <View key={index} style={styles.numPadWrapper}>
                  {item.map(number => {
                    return (
                      <View key={number} style={styles.numPad}>
                        <Text style={styles.numPadNumber}>{number}</Text>
                      </View>
                    );
                  })}
                </View>
              );
            })}
            <View style={styles.numPadWrapper}>
              <View style={styles.numPad}>
                <Text style={styles.numPadNumber}>.</Text>
              </View>
              <View style={styles.numPad}>
                <Text style={styles.numPadNumber}>0</Text>
              </View>
              <View style={styles.numPad}>
                <Icon name="backspace" size={24} color="#210A54" />
              </View>
            </View>
          </View>

          <View style={styles.buttonVerifyWrapper}>
            <TouchableOpacity style={styles.buttonVerify}>
              <Text style={styles.textButtonVerify}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  header: {
    flexDirection: 'row',
    // justifyContent:'space-between',
    alignItems: 'center',
    padding: 20,
    width: wp('100%'), // 80% of width device screen
    // backgroundColor: colors.lightPink,
    marginTop: 45,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.major,
    marginLeft: '34%',
  },
  iconHeader: {
    color: colors.major,
  },
  iconHeader1: {
    color: colors.general,
  },
  content: {
    flex: 1,
    // backgroundColor: 'orange',
    paddingTop: 20,
    paddingHorizontal: 40,
  },
  title: {
    textTransform: 'uppercase',
    color: colors.major,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  subTitle: {
    color: colors.major,
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 18,
    fontWeight: '300',
  },
  otpWrapper: {
    width: wp('80%'), // 80% of width device screen
    flexDirection: 'row',
    // marginVertical: 10,
    // backgroundColor: 'green',
  },
  otpButton: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.major,
  },
  textOtp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.general,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginVertical: 20,
    width: wp('80%'), // 80% of width device screen
    // backgroundColor:'green'
  },
  buttonResend: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.major,
    textTransform: 'uppercase',
  },
  buttonVerifyWrapper: {
    alignItems: 'center',
    marginVertical: 20,
    width: wp('80%'), // 80% of width device screen
    height: hp('9.5%'), // 70% of height device screen
  },
  buttonVerify: {
    backgroundColor: colors.major,
    paddingHorizontal: 30,
    paddingVertical: 20,
    width: '80%',
    alignItems: 'center',
    borderRadius: 30,
  },
  textButtonVerify: {
    color: colors.general,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  numPadWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    width: wp('80%'), // 80% of width device screen
    height: hp('4.5%'), // 70% of height device screen
    // backgroundColor:'green'
  },
  numPad: {
    alignSelf: 'center',
  },
  numPadNumber: {
    fontWeight: 'bold',
    color: colors.major,
    fontSize: 24,
  },
});
