import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {colors, parameters} from '../global/styles';

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={colors.general} />
      <View style={styles.dashboard}>
        <View style={styles.uploadPix}>
          <Image
            style={{height: 100, width: 100, borderRadius: 100}}
            source={require('../../images/Edmund.png')}
          />
        </View>
        <Pressable style={styles.uploadButton}>
          <Icon
            name="person-add"
            type="material"
            color={colors.major}
            size={25}
            style={styles.uploadIcon}
          />
        </Pressable>
        <Text style={styles.name}>Carol Monde</Text>
        <Text style={styles.name2}>carolmonde@gmail.com</Text>
        <Text style={styles.name2}>+2348102941339</Text>
      </View>
      <View style={styles.functions}>
        <Pressable style={styles.functions2}>
          <Icon
            name="account-box"
            type="material"
            color={colors.major}
            size={40}
            style={styles.uploadIcon1}
          />
          <Text style={styles.name1}>My Details</Text>
          <Icon
            name="chevron-right"
            type="material"
            color={colors.major}
            size={40}
            style={styles.uploadIcon21}
          />
        </Pressable>
        <Pressable style={styles.functions2}>
          <Icon
            name="people-alt"
            type="material"
            color={colors.major}
            size={40}
            style={styles.uploadIcon1}
          />
          <Text style={styles.name1}>Refer and Earn</Text>
          <Icon
            name="chevron-right"
            type="material"
            color={colors.major}
            size={40}
            style={styles.uploadIcon2}
          />
        </Pressable>
        <Pressable style={styles.functions2}>
          <Icon
            name="monetization-on"
            type="material"
            color={colors.major}
            size={40}
            style={styles.uploadIcon1}
          />
          <Text style={styles.name1}>Default Currency</Text>
          <Icon
            name="chevron-right"
            type="material"
            color={colors.major}
            size={40}
            style={styles.uploadIcon3}
          />
        </Pressable>
        <Pressable style={styles.functions2}>
          <Icon
            name="help-center"
            type="material"
            color={colors.major}
            size={40}
            style={styles.uploadIcon1}
          />
          <Text style={styles.name1}>Help Center</Text>
          <Icon
            name="chevron-right"
            type="material"
            color={colors.major}
            size={40}
            style={styles.uploadIcon4}
          />
        </Pressable>
        <Pressable style={styles.functions2}>
          <Icon
            name="security"
            type="material"
            color={colors.major}
            size={40}
            style={styles.uploadIcon1}
          />
          <Text style={styles.name1}>Security Center</Text>
          <Icon
            name="chevron-right"
            type="material"
            color={colors.major}
            size={40}
            style={styles.uploadIcon5}
          />
        </Pressable>
        <Pressable style={styles.functions2}>
          <Icon
            name="people"
            type="material"
            color={colors.major}
            size={40}
            style={styles.uploadIcon1}
          />
          <Text style={styles.name1}>Join Our Commuity</Text>
          <Icon
            name="chevron-right"
            type="material"
            color={colors.major}
            size={40}
            style={styles.uploadIcon6}
          />
        </Pressable>
      </View>
      {/* <Pressable 
          omnPress={() => {
            navigation.navigate('SignInScreen')
          }} 
          style={styles.functions3}
        >
              <Text style={styles.signOut}>LogOut</Text>
          </Pressable> */}
      <View style={styles.button1}>
        <Button
          title="LOG-OUT"
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 30,
  },
  dashboard: {
    width: 350,
    height: 200,
    backgroundColor: colors.grey4,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  functions: {
    width: 350,
    height: 370,
    marginTop: 20,
  },
  functions2: {
    width: 350,
    height: 53,
    marginBottom: 7,
    borderTopWidth: 1,
    borderTopColor: colors.grey3,
    flexDirection: 'row',
  },
  functions3: {
    width: 300,
    height: 53,
    backgroundColor: colors.major,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  signOut: {
    textAlign: 'center',
    color: colors.general,
  },
  uploadPix: {
    width: 105,
    height: 105,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey3,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: colors.major,
  },
  uploadButton: {
    width: 30,
    height: 30,
    marginLeft: 100,
    marginTop: -45,
    backgroundColor: colors.general,
    borderRadius: 100,
  },
  uploadIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -2,
    marginTop: 1,
  },
  uploadIcon1: {
    marginLeft: 0,
    marginTop: 5,
  },
  uploadIcon21: {
    marginLeft: 179,
    marginTop: 5,
  },
  uploadIcon2: {
    marginLeft: 142,
    marginTop: 5,
  },
  uploadIcon3: {
    marginLeft: 125,
    marginTop: 5,
  },
  uploadIcon4: {
    marginLeft: 166,
    marginTop: 5,
  },
  uploadIcon5: {
    marginLeft: 135,
    marginTop: 5,
  },
  uploadIcon6: {
    marginLeft: 100,
    marginTop: 5,
  },
  name: {
    fontSize: 26,
    marginTop: 17,
    color: colors.major,
    fontWeight: 'bold',
  },
  name1: {
    fontSize: 20,
    marginTop: 12,
    marginLeft: 10,
    color: colors.major,
  },
  name2: {
    fontSize: 16,
    marginTop: 0,
    color: colors.major,
  },
});
