import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import Header from '../../components/Header';
import {colors, parameters} from '../../global/styles';

export default function ResetPassword({navigation}) {
    return (
        <View style={styles.container}>
        <Header type="arrow-left" navigation={navigation} />
        <View style={styles.textPosition}>
          <Text style={styles.title1}>Set a New Password</Text>
        </View>
        <View style={styles.textPosition}>
          <Text style={styles.title2}>Your password must be at least 8 characters long,
          contains lowercase, uppercase, number, special character</Text>
        </View>
        <View style={styles.inputMargin1}>
        <View style={styles.title5}>
            <Text style={styles.title6}>Password</Text>
        </View>
          <View style={styles.textInput2}>
            <TextInput style={styles.textInput3} />
            <View style={styles.visibilityOff}>
              <Icon name="visibility-off" iconStyle={{color: colors.grey1}} />
            </View>
          </View>
        </View>
        <View style={styles.button1}>
          <Button
            title="Save Password"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => navigation.navigate('SignInScreen')}
          />
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"white"
    },
    visibilityOff:{
        marginRight:15
    },
    title1: {
      color: '#210A54',
      fontSize: 35,
      fontWeight:'bold'
    },
    title2: {
      color: '#210A54',
      fontSize: 16,
      textAlign:'center',
      width: 330,
    //   paddingLeft:10,
    //   paddingRight:10,
    },
    title3: {
      color: '#210A54',
      fontSize: 18,
      marginLeft:30,
      textDecorationLine: 'underline',
    },
    title4: {
      color: '#210A54',
      fontSize: 18,
      marginLeft:140,
      fontWeight:'bold',
      textDecorationLine: 'underline',
    },
    title5:{
      flexDirection:"row",
       marginTop:-40
    },
    title6:{
      color: '#210A54',
      fontSize: 18,
      marginLeft:30,
      fontWeight:'bold',
      marginBottom:10
    },
    title7:{
      color: '#210A54',
      fontSize: 18,
      marginLeft:30,
      fontWeight:'bold',
      marginBottom:10,
      marginTop:30
    },
    textPosition: {
      alignItems: 'center',
    },
    inputMargin1: {
      marginTop: 120,
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
      marginVertical: 20,
      borderRadius: 30,
    },
  });