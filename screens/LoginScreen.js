import { StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Button, Input,Image } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';

const LoginScreen = ({navigation}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const signIn=()=>{ }
    useEffect(()=>{
      const unsubscribe = auth.onAuthStateChanged((authUser)=>{
        if(authUser) navigation.replace("Home")  //if user is already logged in
      })
      return unsubscribe;   //clean up subscription when component unmounts
    },[])
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style='light'/>
      <Image
       source={{uri:'https://www.iba.cw/wp-content/uploads/2021/04/SignalTA.jpg'}}
       style={{width:150,height:150,borderRadius:15,margin:20}}
      />
      <View style={styles.inputContainer}>
        <Input 
        placeholder='Email'
        autoFocus 
        keyboardType='email-address' 
        type='email'
        value={email} 
        onChangeText={(text) => setEmail(text)}/>
        <Input 
        placeholder='Password'
         secureTextEntry 
         type='password'
         value={password} 
         onChangeText={(text) => setPassword(text)}/>
      </View>
      <Button title="Login" containerStyle={styles.Button} onPress={signIn}/>
      <Button title="Register" type='outline' containerStyle={styles.Button} onPress={()=>navigation.navigate('Register')}/>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    inputContainer: {
        width:300,
    },
    Button:{
        width:200,
        marginTop:10,
    },
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        backgroundColor:'white'
    },
})