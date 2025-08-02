import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

import { SafeAreaView } from 'react-native-safe-area-context'
import { createNewUser } from '../utilityFunctions'

const Register = ({navigation}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus',()=>{
      setName('');
      setEmail('');
      setPassword('');
    });
    return unsubscribe;
  },[navigation])

  const signUp = async() =>{
    setShowIndicator(true);
    const result = await createNewUser(name, email, password);
    setShowIndicator(false);
    if(result.status === true){
      navigation.navigate('Tabs')
    }    
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        placeholderTextColor="black"
        value={name}
        onChangeText={text => setName(text)}        
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        placeholderTextColor="black"
        value={email}
        inputMode='email-address'
        onChangeText={text => setEmail(text)}        
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="black"
        value={password}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}        
      />
      
      <View style={{marginBottom: wp(10)}}></View>

      
      <Pressable underlayColor='transparent' onPress={() => signUp()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </View>
      </Pressable>
      
      <Text style={{marginTop: wp(7), fontSize: wp(4)}}>
        Already have an Account? <Text onPress={() => navigation.navigate('Login')} style={{textDecorationLine: 'underline', color: 'blue'}}>Log In</Text>
      </Text>

      <ActivityIndicator
        size="large"
        color="green"
        animating={showIndicator}
        style={styles.indicator}
      />
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  input: {
    width: wp(80),
    height: hp(7),
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: hp(2),
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

  indicator: {
    marginTop: wp(10),
  },
})