import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, Image} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors, parameters} from '../../global/styles';

export default function ExchangeConfirmedScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.textPosition}>
        <FontAwesome5
          name={'check'}
          size={65}
          solid
          color='green'
        />
      </View>

      <View style={styles.textPosition1}>
        <Text style={styles.title2}>
          Exchange Confirmed 
        </Text>
        <Text style={styles.info}>$24,000.79</Text>
        <Text style={styles.info}>4.92 ETH</Text>
        <Text style={{textAlign: 'center', marginTop:5}}>23rd of April 2022</Text>

       
      </View>

      <View style={styles.button1}>
        <Button
          title="Done"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={() => navigation.navigate('SignInScreen')}
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
  info:{
      marginTop:10,
      fontSize:25,
      color:colors.major
  },
  title1: {
    color: '#210A54',
    fontSize: 35,
  },
  title2: {
    color: '#210A54',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textPosition: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    marginLeft: 100,
    marginTop: 80,
    borderWidth: 5,
    borderColor: 'green',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textPosition1: {
    alignItems: 'center',
    marginTop: 30,
  },
  button1: {
    marginHorizontal: 20,
    marginVertical: '15%',
    borderRadius: 30,
  },
});
