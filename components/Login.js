import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

import { SafeAreaView } from 'react-native-safe-area-context'
import { login } from '../utilityFunctions'

const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setEmail("");
      setPassword("");
    });
    return unsubscribe;
  }, [navigation]);

  const signIn = async () => {
    setShowIndicator(true);
    const result = await login( email, password);
    setShowIndicator(false);
    if (result.status === true) {
      navigation.navigate("Tabs");
    }
    else{
      window.alert(result.output)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="black"
        value={email}
        inputMode='email-address'
        onChangeText={text => setEmail(text)}        
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="black"
        value={password}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}        
      />

      <Text 
      onPress={() => navigation.navigate('ForgotPassword')}
      style={{textDecorationLine: 'underline',color: 'blue', marginTop: hp(2), fontSize: wp(4)}}>
      Forgot Password?</Text>

      <Pressable onPress={() => signIn()}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign in</Text>
        </View>
      </Pressable>
      
      <Text style={{marginTop: wp(7), fontSize: wp(4)}}>
        Don't have an account? <Text onPress={() => navigation.navigate('Register')} style={{textDecorationLine: 'underline', color: 'blue'}}>Sign Up</Text>
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

export default Login

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