import React from 'react'

function CommisionModal() {
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
          </View>
          <View style={styles.modalbottons}>
            <Text style={styles.modalCaption}>Commission Earned</Text>
            <Text style={{paddingLeft: '7%', paddingRight: '7%'}}>
              Your Total Earning from referral. Pennyswap Rewards have been
              limited to your first 10 successful referrals every month
            </Text>
          </View>

          <View style={styles.box1}>
            <View style={styles.innerBox}>
              <Text>YOU HAVE EARNED</Text>
              <View style={styles.amount}>
                <Text style={styles.amountNo}>PSP</Text>
                <Text style={styles.amountNo1}>30000000</Text>
              </View>
            </View>
          </View>
          <View style={styles.box1}>
            <View style={styles.innerBox1}>
              <View style={styles.amount1}>
                <Text style={styles.desc1}>How do i earn on pennyswap?</Text>
                <Text>
                  We will pay you a commission on the 15th day from when your
                  referral joins pennyswap
                </Text>
              </View>
              <View style={styles.exclamation}>
                <FontAwesome5
                  name={'exclamation'}
                  size={25}
                  solid
                  color={colors.major}
                  style={styles.card}
                />
              </View>
            </View>
          </View>

          <View style={styles.stages}>
            <TouchableOpacity style={styles.refLink1}>
              <Text style={styles.text11}>Invite Friends</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modalize>
  )
}

const styles = StyleSheet.create({
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
  box1: {
    width: '100%',
    height: 220,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
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
    height: 70,
    alignContent: 'center',
    alignItems: 'center',
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

export default CommisionModal