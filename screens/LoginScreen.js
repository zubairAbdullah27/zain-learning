import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'


import { useState, useEffect,} from 'react';

import auth from '@react-native-firebase/auth';


export default function LoginScreen({navigation}) {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const signIn= async()=>{
    if (!email || !password ){
        

        return alert('Please input all fields')
      
    }
    try {
      
      
        const result = await auth().signInWithEmailAndPassword(email,password)
      
        
         alert('Loggen In Successfully')

          
      }
      catch (err){
        alert(err)
      
      
      }
          }

        
      
    // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)


        
   
    return subscriber; // unsubscribe on unmount
  }, []);


  if (initializing) return null;

if (!user) {
    return (

        <View>




        <TextInput
      placeholder='Email'
      style={styles.input}
      onChangeText={newText => setEmail(newText)}
    
    />
    
    <TextInput
      placeholder='Password'
      style={styles.input}

      onChangeText={newText => setPassword(newText)}
      secureTextEntry


    
    />
    <Button title='Login' onPress={()=>signIn()}></Button>
</View>
      
    )
  }

  
  return (
   navigation.navigate('home')
  )
}


const styles= StyleSheet.create({

    input:{
     borderWidth:1,
     
    }







})