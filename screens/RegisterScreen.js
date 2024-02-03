import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { Button, Input, Text } from 'react-native-elements';
import { useState } from 'react';
import { auth } from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    useLayoutEffect(()=>{navigation.setOptions({
        headerBackTitle:'Back To Login',
    })},[navigation]);
    const auth = getAuth();
    const register = async (email, password) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User registered successfully:', user);
      } catch (error) {
        console.error('Error creating user:', error.message);
        alert(error.message);
      }
    };

  return (
    <KeyboardAvoidingView  style={styles.container} behavior="padding">
      <Text h3 style={{marginBottom:50}}>Create a Signal account</Text>
      <View style={styles.inputContianer}>
       <Input
       placeholder='Full Name'
       autoFocus type='text'
       value={name}
       onChangeText={(text) => setName(text)}/>
       <Input
       placeholder='Email'
        type='email'
       value={email}
       onChangeText={(text) => setEmail(text)}/>
       <Input
       placeholder='Password'
        type='password'
        secureTextEntry
       value={password}
       onChangeText={(text) => setPassword(text)}/>
       <Input
       placeholder='Profile Picture URL (optional)'
       autoFocus type='text'
       value={imageUrl}
       onChangeText={(text) => setImageUrl(text)}
       onSubmitEditing={register}/>
      </View>
      <Button  containerStyle={styles.Button} raised onPress={register} title={'Register'}/>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        backgroundColor:"white",

    },
    inputContianer:{
        width:300,

    },
    Button:{
     width:200,
     marginTop:10,
    }
})