import { Pressable, StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Landing = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>ShopVista</Text>
        <Pressable underlayColor="yellow" onPress={() => navigation.navigate('Login')}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Register')}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </View>
        </Pressable>
    </SafeAreaView> 
  )
}

export default Landing

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',        
    },
    
    title: {
        fontSize: wp(10),
        fontWeight: 'bold',
        fontFamily: 'notoserif',
        marginBottom: hp(8),
    },
    
    button: {
        width: wp(50),
        height: hp(8),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007BFF',
        borderRadius: wp(5),
        elevation: 3,
        marginTop: wp(5),
        },
        
    buttonText: {
        color: '#FFFFFF',
        fontSize: wp(6),
    },  
})