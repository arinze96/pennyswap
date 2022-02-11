import React from 'react';

function FundCryptoModal() {
  return (
    <Modalize ref={modalizeRef} snapPoint={300}>
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}>
        <View style={styles.modalbottons0}>
          <View style={styles.actionIcon} onPress={onClose} >
          <FontAwesome5
            name={'arrow-left'}
            size={17}
            solid
            color={colors.major}
            style={styles.card}
          />
        </View>
        </View>
      <View style={styles.modalbottons}>
        <Text style={styles.modalCaption}>You Have Options</Text>
        <Text style={styles.modalCaption0}>How will you like to fund from your wallet?</Text>
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
        <View style={styles.actionBox}>
        <Text style={styles.upperText1}>Fund with cash </Text>
          <Text style={styles.upperText2}>add cash with mobile money </Text>
        </View>
        <FontAwesome5
          name={'chevron-right'}
          size={15}
          solid
          color={colors.major}
          style={styles.redirectArrow}
        />
      </TouchableOpacity>
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
        <View style={styles.actionBox}>
          <Text style={styles.upperText1}>Fund with BUSD </Text>
          <Text style={styles.upperText2}>add BUSD directly from your card </Text>
        </View>
        <FontAwesome5
          name={'chevron-right'}
          size={15}
          solid
          color={colors.major}
          style={styles.redirectArrow}
        />
      </TouchableOpacity>
    </View>
  </Modalize>
  )
const styles = StyleSheet.create({
    upperText1:{
        fontSize:17,
        color: colors.major
      },
      upperText2:{
        fontSize:11,
        color: colors.grey1
      },
      redirectArrow: {
        paddingTop: 20,
        marginLeft: '4%',
      },
      redirectArrow1: {
        paddingTop: 20,
        marginLeft: '16.5%',
      },
      actionBox: {
        flexDirection:'column',
        width: '75%',
        paddingLeft:15,
        paddingTop:10,
        height: '100%',
      },
      card: {
        padding: 10,
      },
      actionIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.lightPink,
        marginLeft: '4%',
        marginTop: 10,
        alignContent: 'center',
        alignItems: 'center',
      },
      modalCaption: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 7,
        color: colors.major,
      },
      cancel: {
        marginLeft: '25%',
        paddingTop: 20,
        paddingBottom: 20,
      },
      modalbottons: {
        flexDirection: 'column',
        width: '100%',
        alignContent:'center',
        alignItems: 'center',
        height: 70,
      },
      modalbotton0: {
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
export default FundCryptoModal;