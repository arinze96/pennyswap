import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {colors, parameters} from '../../global/styles';

export default function SignUpSuccess({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.textPosition}>
      </View>

      <View style={styles.textPosition1}>
        <Text style={styles.title2}>
          Successfully {'\n'} Created An Account
        </Text>
      </View>

      <View style={styles.button1}>
        <Button
          title="Continue"
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
    //   flex: 1,
    backgroundColor: 'white',
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
    marginTop: 120,
    borderWidth: 5,
    borderColor: 'green',
  },
  textPosition1: {
    alignItems: 'center',
    marginTop: 30,
  },
  button1: {
    marginHorizontal: 20,
    marginVertical: 200,
    borderRadius: 30,
  },
});
