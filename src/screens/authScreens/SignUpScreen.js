import React, { useState } from "react";
// import { CheckBox} from "react-native";
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, Icon, CheckBox} from 'react-native-elements';
import Header from '../../components/Header';
import {colors, parameters} from '../../global/styles';

export default function SignUpScreen({navigation}) {
    const [isSelected, setSelected] = useState(false);
  return (
    <View style={styles.container}>
      <Header type="arrow-left" navigation={navigation} />
      <View style={styles.textPosition}>
        <Text style={styles.title1}>Create Account</Text>
      </View>

      <View style={styles.textPosition}>
        <Text style={styles.title2}>Enter details to setup account</Text>
      </View>

      <View style={styles.inputMargin1}>
        <View style={styles.title5}>
          <Text style={styles.title6}>Email</Text>
        </View>

        <View style={styles.textInput2}>
          <View>
            <Icon name="email" iconStyle={{color: colors.grey1}} />
          </View>
          <TextInput style={styles.textInput3} placeholder="Email" />
        </View>

        <View style={styles.title5}>
          <Text style={styles.title7}>Phone</Text>
        </View>

        <View style={styles.textInput2}>
          <View>
            <Icon name="phone" iconStyle={{color: colors.grey1}} />
          </View>
          <TextInput style={styles.textInput3} placeholder="Phone number" />
        </View>

        <View style={styles.title5}>
          <Text style={styles.title7}>Password</Text>
        </View>

        <View style={styles.textInput2}>
          <View>
            <Icon name="lock" iconStyle={{color: colors.grey1}} />
          </View>
          <TextInput style={styles.textInput4} placeholder="Password" />
          <View>
            <Icon
              name="visibility-off"
              iconStyle={{color: colors.grey1}}
              style={styles.textInputIcon}
            />
          </View>
        </View>

        <View style={styles.title5}>
          <Text style={styles.title7}>Confirm Password</Text>
        </View>

        <View style={styles.textInput2}>
          <View>
            <Icon name="lock" iconStyle={{color: colors.grey1}} />
          </View>
          <TextInput
            style={styles.textInput4}
            placeholder=" Confirm Password"
          />
          <View>
            <Icon
              name="visibility-off"
              iconStyle={{color: colors.grey1}}
              style={styles.textInputIcon}
            />
          </View>
        </View>
      </View>

 <View style={styles.acceptTandC}>
 <CheckBox
     title = "i accept the terms and conditions"
     checkedIcon="check"
     uncheckedColor="square-o"
     width="60%"
     checkedColor="green"
     uncheckedColor="red"
     checked={isSelected}
     onPress={() => {
         setSelected(!isSelected)
     }}
   />
 </View>
      <View style={styles.button1}>
        <Button
          title="SIGNUP"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => navigation.navigate('SignUpSuccess')}
        />
      </View>
      <View style={styles.title5}>
        <Text
          style={styles.title3}
          onPress={() => navigation.navigate('SignInScreen')}>
          Already have an account?
        </Text>

        <Text
          style={styles.title4}
          onPress={() => navigation.navigate('SignInScreen')}>
          Signin
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    // flex: 1,
    backgroundColor: 'white',
  },
  title1: {
    color: '#210A54',
    fontSize: 35,
  },
  title2: {
    color: '#210A54',
    fontSize: 18,
  },
  title3: {
    color: '#210A54',
    fontSize: 18,
    marginLeft: 50,
    textDecorationLine: 'underline',
  },
  title4: {
    color: '#210A54',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 40,
    textDecorationLine: 'underline',
  },
  title5: {
    flexDirection: 'row',
    marginTop: -40,
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
  inputMargin1: {
    marginTop: 70,
  },
  textInput1: {
    borderWidth: 1,
    borderColor: '#210A54',
    marginHorizontal: 20,
    borderRadius: 30,
    marginBottom: 20,
    paddingLeft: 25,
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
    marginVertical: 50,
    borderRadius: 30,
  },
  acceptTandC:{
    marginTop:-25,
    marginLeft:10,
    alignContent:"center",
    marginBottom: -30
  }
});
