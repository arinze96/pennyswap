import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import Header from '../../components/Header';
import {colors, parameters} from '../../global/styles';

export default function ActivationPage({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Header type="arrow-left" navigation={navigation} />
      </View>
      <View style={styles.textPosition}>
        <Text style={styles.title1}>Check your email for OTP</Text>
      </View>
      <View style={styles.textPosition}>
        <Text style={styles.title3}>
          Type in the 6-digit code you received on your phone
        </Text>
      </View>
      <View style={styles.inputMargin1}>
        <View style={styles.title5}>
          <Text style={styles.title6}>Authentication Code</Text>
        </View>
        <View style={styles.textInput2}>
          <TextInput style={styles.textInput3} placeholder="000000" />
        </View>
      </View>
      <View style={styles.button1}>
        <Button
          title="Confirm"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => navigation.navigate('ResetPassword')}
        />
      </View>
      <View style={styles.textPosition1}>
        <Text style={styles.title2}>
          Didn't get te code? Try resending the code
        </Text>
      </View>
      <View style={styles.title5}>
          <View style={styles.circle}>
            <View style={styles.message}>
              <Icon name="message" iconStyle={{color: colors.major}} />
            </View>
          </View>
            <Text style={styles.resend}>Resend the code</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title1: {
    color: '#210A54',
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 8,
  },
  resend:{
      marginTop: 8,
      marginLeft:3,
      color: '#210A54',
  },
  title2: {
    color: '#210A54',
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title3: {
    color: '#210A54',
    fontSize: 16,
    textAlign: 'center',
  },
  title4: {
    color: '#210A54',
    fontSize: 18,
    marginLeft: 140,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  title5: {
    flexDirection: 'row',
    marginTop: 20,
  },
  title6: {
    color: '#210A54',
    fontSize: 18,
    marginLeft: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title7: {
    color: '#210A54',
    fontSize: 18,
    marginLeft: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
  },
  textPosition: {
    alignItems: 'center',
  },
  textPosition1: {
    alignItems: 'center',
    marginTop: 30,
  },
  inputMargin1: {
    marginTop: 60,
  },
  textInput1: {
    borderWidth: 1,
    borderColor: '#210A54',
    marginHorizontal: 20,
    borderRadius: 30,
    marginBottom: 20,
    paddingLeft: 25,
  },
  circle: {
    width: 40,
    height: 40,
    backgroundColor: '#FCC0EF',
    borderRadius: 100 / 2,
    marginLeft:120
  },
  textInput2: {
    borderWidth: 1,
    borderColor: '#210A54',
    marginHorizontal: 20,
    borderRadius: 30,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    paddingLeft: 25,
  },
  textInput3: {
    width: '90%',
  },
  textInput4: {
    width: '80%',
  },
  textInputIcon: {
    marginRight: 20,
  },
  button1: {
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 30,
  },
});
