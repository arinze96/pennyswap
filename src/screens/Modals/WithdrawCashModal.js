import React from 'react'

function WithdrawCashModal() {
  return (
    <Modalize ref={modalizeRef} snapPoint={800}>
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
          }}>
          <View style={styles.modalbottons0}>
            <TouchableOpacity onPress={onClose}>
              <View style={styles.actionIcon}>
                <FontAwesome5
                  name={'arrow-left'}
                  size={17}
                  solid
                  color={colors.major}
                  style={styles.card}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.actionIcon1}>
                <Text style={{color: colors.major}}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.modalbottons}>
            <Text style={styles.modalCaption}>Withdraw Cash</Text>
            <Text style={styles.desc9}>
               Type in the amount you want to withdraw to a bank account
            </Text>
          </View>
        </View>
        <View style={styles.howmuch}>
          <Text style={[styles.cashAmount]}>NGN</Text>
          <Text style={[styles.cashAmount1]}>5,000</Text>
        </View>

        <View style={styles.botonContainer}>
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
        
      </Modalize>>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    botonContainer:{
      width: wp('100%'), 
      height: hp('40%'), 
      alignContent:'center',
      justifyContent:'center',
      alignItem:'center',
      paddingHorizontal: 40,
    },
    numPadWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 20,
      width: wp('80%'), 
      height: hp('4.5%'), 
    },
    numPad: {
      alignSelf: 'center',
    },
    numPadNumber: {
      fontWeight: 'bold',
      color: colors.major,
      fontSize: 24,
    },
    cashAmount:{
      fontSize:20,
      color: colors.grey2
    },
    cashAmount1:{
      fontSize:30,
      fontWeight:'bold'
    },
    howmuch:{
      flexDirection:'row',
      width: wp('100%'), 
      height: hp('10%'), 
      paddingVertical:15,
      // backgroundColor:'gray',
      alignContent:'center',
      justifyContent:'center',
      alignItem:'center',
    },
    modalbottons0: {
      flexDirection: 'row',
      paddingLeft: 30,
      paddingRight: 30,
      justifyContent: 'space-between',
    },
    noOfFriends: {
      width: '100%',
      height: 30,
      flexDirection: 'row',
      paddingLeft: 30,
      marginTop: 15,
    },
    noOfFriends1: {
      color: colors.major,
      fontSize: 18,
      fontWeight: 'bold',
    },
    top: {
      fontSize: 22,
      color: colors.major,
    },
    top1: {
      fontSize: 18,
      color: colors.major,
    },
    desc9: {paddingLeft: '9%', paddingRight: '9%'},
    desc19: {paddingLeft: '9%', paddingRight: '9%', marginTop:10},
    desc1: {color: colors.major, fontWeight: 'bold', marginBottom: 5},
    exclamation: {
      width: 60,
      marginLeft: 10,
      height: 60,
      borderRadius: 50,
      backgroundColor: 'gold',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    amount: {
      flexDirection: 'row',
    },
    amount1: {
      width: '65%',
      alignContent: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    amountNo: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#d1d1e0',
    },
    amountNo1: {
      fontSize: 40,
      fontWeight: 'bold',
      marginLeft: 3,
    },
    innerBox: {
      width: '70%',
      height: 180,
      borderRadius: 20,
      backgroundColor: '#f0f0f5',
      alignContent: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerBox1: {
      width: '70%',
      height: 180,
      borderRadius: 20,
      backgroundColor: '#ffe6e6',
      alignContent: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    box10: {
      width: '100%',
      height: 380,
      padding: 30,
      // alignContent: 'center',
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor:'gray'
    },
    refLink: {
      width: '80%',
      height: 40,
      borderColor: colors.major,
      borderRadius: 20,
      borderWidth: 1,
    },
    refLink1: {
      width: '80%',
      height: 40,
      backgroundColor: colors.major,
      borderRadius: 20,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
    },
    text11: {color: colors.general},
    stageCaption: {color: colors.major, width: '90%', fontSize: 21},
    stageCaption1: {color: colors.major, fontSize: 15},
    claimBonus: {
      width: '40%',
      marginTop: 10,
      height: 40,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.major,
      borderRadius: 20,
    },
    textBox: {
      width: '30%',
      height: 70,
      alignContent: 'center',
      alignItems: 'center',
      // backgroundColor:'yellow'
    },
    stageNo: {
      width: 30,
      height: 30,
      alignContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      backgroundColor: '#d9ffb3',
    },
    stageNumber: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'green',
    },
    stageLine: {
      width: 120,
      height: 0.3,
      backgroundColor: 'gray',
    },
    stages: {
      width: '100%',
      height: 60,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: 'gray',
    },
    stageContainer: {
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      width: '80%',
      height: 60,
      // backgroundColor: 'gold',
    },
    stagesdesc: {
      width: '100%',
      height: 70,
      flexDirection: 'row',
      justifyContent: 'space-between',
      // backgroundColor: 'green',
    },
    textInput4: {
      width: '80%',
    },
    modalCaption0: {
      width: '100%',
      height: 60,
      paddingTop: 18,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor:'gray'
    },
    textInputIcon: {
      marginRight: 20,
    },
    textInput2: {
      borderWidth: 1,
      height: 40,
      width: 350,
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
      // marginLeft: '4%',
      marginTop: 10,
      alignContent: 'center',
      alignItems: 'center',
    },
    actionIcon1: {
      width: 80,
      height: 40,
      borderRadius: 20,
      backgroundColor: colors.lightPink,
      // marginLeft: '4%',
      marginTop: 10,
      alignContent: 'center',
      justifyContent: 'center',
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
      marginBottom: 35,
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
      backgroundColor: '#ffffe6',
      width: '100%',
      height: 55,
      marginTop: 5,
      marginBottom: 5,
    },
    modalbottons2: {
      flexDirection: 'row',
      width: '100%',
      height: 55,
      marginTop: 10,
      marginBottom: 5,
    },
    space: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 500,
      width: '100%',
      backgroundColor: 'indigo',
    },
    bottom: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
      borderRadius: 20,
    },
  });

export default WithdrawCashModal