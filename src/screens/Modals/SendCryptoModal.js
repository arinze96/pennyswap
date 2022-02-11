import React, {useState, useRef} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../global/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Modalize} from 'react-native-modalize';

function SendCryptoModal() {
    const modalizeRef = useRef(null);
    function onOpen() {
      modalizeRef.current?.open();
    }
    function onClose() {
      modalizeRef.current?.close();
    }
  return (
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
  )
}
const styles = StyleSheet.create({
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
})
export default SendCryptoModal;
