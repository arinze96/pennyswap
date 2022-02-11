import React from 'react'

function RefDetailsModal() {
  return (
    <Modalize ref={modalizeRef} snapPoint={800} >
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
        <Text style={styles.modalCaption}>Referral Details</Text>
        <Text style={{width: '70%'}}>
          Invite a friend to register, tell them to make a cash deposit and
          trade at least 10 BUSD within 15 days
        </Text>
      </View>

      <View style={styles.stages}>
        <View style={styles.stageContainer}>
          <View style={styles.stageNo}>
            <Text style={styles.stageNumber}>1</Text>
          </View>
          <View style={styles.stageLine}></View>
          <View style={styles.stageNo}>
          <Text style={styles.stageNumber}>2</Text>
          </View>
          <View style={styles.stageLine}></View>
          <View style={styles.stageNo}>
          <Text style={styles.stageNumber}>3</Text>
          </View>
        </View>
      </View>
      <View style={styles.stagesdesc}>
        <View style={styles.textBox}>
          <Text>You invite your friends</Text>
        </View>
        <View style={styles.textBox}>
          <Text>Friend registers, makes cash deposit and trade up to NGN 5,000</Text>
        </View>
        <View style={styles.textBox}>
          <Text>You get NGN 500 on the 16th day</Text>
        </View>
      </View>
      <View style={styles.stages}>
        <TouchableOpacity style={styles.claimBonus}>
          <Text style={styles.text11} >claim signup bonus</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.stages}>
          <Text style={styles.stageCaption} >Please provide a valid username from a friend who referred you to signup</Text>
      </View>
   
      <TouchableOpacity
        style={styles.modalbottons2}
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
          <Text style={styles.upperText1}>PSP Rewards Earned </Text>
          <Text style={styles.upperText2}>0 PSP </Text>
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
        style={styles.modalbottons2}
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
          <Text style={styles.upperText1}>Commision Earned So Far </Text>
          <Text style={styles.upperText2}>0 NGN </Text>
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
        style={styles.modalbottons2}
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
          <Text style={styles.upperText1}>Friends Who Signed Up </Text>
          <Text style={styles.upperText2}>0 </Text>
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
        style={styles.modalbottons2}
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
          <Text style={styles.upperText1}>Friemds Who Traded </Text>
          <Text style={styles.upperText2}>0 </Text>
        </View>
        <FontAwesome5
          name={'chevron-right'}
          size={15}
          solid
          color={colors.major}
          style={styles.redirectArrow}
        />
      </TouchableOpacity>
      <View style={styles.stages}>
          <Text style={styles.stageCaption1} >Share Your Referral Link</Text>
      </View>
      <View style={styles.stages}>
          <View style={styles.refLink}>
            <TextInput placeholder='copy the referral link and send to your friends'/>
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
    refLink:{
        width: '80%',
        height: 40,
        borderColor:colors.major,
        borderRadius:20,
        borderWidth:1
      },
      refLink1:{
        width: '80%',
        height: 40,
        backgroundColor:colors.major,
        borderRadius:20,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:1
      },
      text11:{ color:colors.general },
      stageCaption:{ color:colors.major, width:'90%', fontSize:21 },
      stageCaption1:{ color:colors.major, fontSize:15 },
      claimBonus:{
        width: '40%',
        marginTop:10,
        height: 40,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:colors.major,
        borderRadius:20
      },
      textBox:{
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
      stageNumber:{
        fontWeight:'bold',
        fontSize:20,
        color: 'green'
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
        justifyContent:'center',
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
        justifyContent:'space-between',
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

export default RefDetailsModal