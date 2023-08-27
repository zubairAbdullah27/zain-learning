import React from 'react'

import { useState, useEffect,} from 'react';

import auth from '@react-native-firebase/auth';

import firestore from '@react-native-firebase/firestore';


import {
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  ActivityIndicator,


  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
const Login=({navigation})=> {



    const [email,setEmail]=useState('');

    const [password,setPassword]=useState('');
    
    const [next,setNext]=useState(false);
    const [loading,setLoading]=useState(false)

  

    if (loading){
      return <ActivityIndicator size="large" color="#00ff00" />
    }



    // useEffect(()=>{

    //  const unregister =  auth().onAuthStateChanged((authUser)=>{

    //     if (authUser){
    //         navigation.replace('home');

    //     }

    //     return unregister();



    //   })

       


    // }, [])




    const signIn= async()=>{
      if (!email || !password ){
          alert('Please input all fields')
          setLoading(false)

          return
        
      }
      
try {
  setLoading(true)


  const result = await auth().signInWithEmailAndPassword(email,password)

  
    setLoading(false)
   alert('Loggen In Successfully')
}
catch (err){
  alert(err)
  setLoading(false)


}
    }

    


    
  
// const signIn= async()=>{

//   // auth().signInWithEmailAndPassword(email,password)
//   // .catch((error)=> alert (error))



//   try {
//     setLoading(true)
  
  
//     const result = auth().signInWithEmailAndPassword(email,password)
  
  
  
  
  
  
    
  
//       setLoading(false)
//   }
//   catch (err){
//     alert(err)
//     setLoading(false)
  
  
//   }
  
      
  
  
//       }
   
 
  
  
   
  
    return (
        <SafeAreaView>
        <KeyboardAvoidingView behavior={'position'}>
  


        <View style={styles.container1}>
  
              <Image source={require('../assets/whatsapp-logo.png')} style={styles.logo}/>
              <Text style={{color:'#33D951', fontSize:25,}}>Welcome to WhatsApp</Text>
                  
      </View>

         <View style={styles.container2}>
  
       
  
    
   
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
  
  
            // onSubmitEditing={signIn}
          
          />
           
  
  
        
              {/* <TouchableOpacity  style={styles.next} onPress={signIn}>
            <Text style={{color:'white',fontSize:25,}}>Login</Text>
          </TouchableOpacity> */}
          <View>
          <Button variant="contained" title='Hello' onPress={signIn}></Button>
          </View>
          <TouchableOpacity   onPress={()=>navigation.goBack()}>
                          <Text style={{textAlign:'center'}}>Don't have an Account? Sign Up!</Text>
          </TouchableOpacity>
  
  
  
  
  
  
          
       
  
        
              
         
            
              
  
     
  
             
          
                  </View>
  
            </KeyboardAvoidingView>
  
  
            </SafeAreaView>
                 
          
  
    )
}






const styles = StyleSheet.create({
 
    container1:{
      alignItems:"center"
  
     
  
  
    },
    container2:{
      alignItems:'center',
      paddingHorizontal:30,
      justifyContent:"space-evenly",
      height:"50%",
  
    },
    next:{
      borderRadius:40,
      height:40,
      width:150,
      backgroundColor:'#33D951',
      alignItems:'center'
  
    },
    input:{
      fontSize:15,
      borderWidth:1,
      height:'12%',
      width:'90%',
      
      borderColor:'#33D951',
  
  
    },
    upload:{
      borderRadius:100,
      justifyContent:'center',
      height:150,
      width:150,
      backgroundColor:'#C0C0C0',
      margin:10,
  
      alignItems:'center'
  
    },
    logo:{
      height:300,
      width:300,
    }
   
  });


  export default Login;
