import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function News() {
    return (
        <View style={styles.container}>
            <Text>News Page</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})