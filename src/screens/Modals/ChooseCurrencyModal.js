import React from 'react'

function ChooseCurrencyModal() {
  return (
    <Modalize ref={modalizeRef} snapPoint={500}>
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
          }}>
          <View style={styles.modalbottons0}>
            <TouchableOpacity onPress={onClose}>
            <View style={styles.actionIcon} >
              <FontAwesome5
                name={'arrow-left'}
                size={17}
                solid
                color={colors.major}
                style={styles.card}
              />
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.modalbottons}>
            <Text style={styles.modalCaption}>Choose Currency</Text>
            <View style={styles.modalCaption0}>
              <View style={styles.textInput2}>
              
                <TextInput style={styles.textInput4}  />
                <View>
                  <Icon
                    type="material"
                    name="search"
                    iconStyle={{color: colors.grey1}}
                    style={styles.textInputIcon}
                  />
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.modalbottons1}
            onPress={() => {
              navigation.navigate('SendCrypto');
              onClose();
            }}>
            <View style={styles.actionIcon}>
            <Image
            style={{height: 40, width: 40, borderRadius: 20}}
            source={require('../../images/NGN.jpg')}
          />
            </View>
            <View style={styles.actionBox}>
              <Text style={styles.upperText1}>NGN </Text>
              <Text style={styles.upperText2}>Nigerian naira </Text>
            </View>
         
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalbottons2}
            onPress={() => {
              navigation.navigate('SendCrypto');
              onClose();
            }}>
            <View style={styles.actionIcon}>
            <Image
            style={{height: 40, width: 40, borderRadius: 20}}
            source={require('../../images/USA.png')}
          />
            </View>
            <View style={styles.actionBox}>
              <Text style={styles.upperText1}>USD </Text>
              <Text style={styles.upperText2}>US Dollar </Text>
            </View>
            <FontAwesome5
              name={'check'}
              size={15}
              solid
              color={colors.major}
              style={styles.redirectArrow}
            />
          </TouchableOpacity>
        </View>
      </Modalize>
  )
}

const styles = StyleSheet.create({
    textInput4: {
        width: '80%',
      },
      modalCaption0: {
        width: '100%',
        height: 70,
        alignContent:'center',
        alignItems:'center',
      },
      textInputIcon: {
        marginRight: 20,
      },
      textInput2: {
        borderWidth: 1,
        height: 35,
        width: 300,
        borderColor: '#210A54',
        borderRadius: 30,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: 25,
      },
      upperText1: {
        fontSize: 17,
        color: colors.major,
      },
      upperText2: {
        fontSize: 11,
        color: colors.grey1,
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
        flexDirection: 'column',
        width: '73%',
        paddingLeft: 15,
        paddingTop: 10,
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
        marginBottom: 10,
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
        alignContent: 'center',
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
        height: 55,
        marginTop: 45,
        marginBottom: 5,
      },
      modalbottons2: {
        flexDirection: 'row',
        width: '100%',
        height: 55,
        marginTop: 10,
        marginBottom: 5,
      },
})

export default ChooseCurrencyModal