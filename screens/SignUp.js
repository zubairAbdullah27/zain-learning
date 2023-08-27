import React from 'react'

import { useState } from 'react';
import Icon from 'react-native-vector-icons/dist/EvilIcons';
import { launchImageLibrary} from 'react-native-image-picker';
import storage, { firebase } from '@react-native-firebase/storage';
import uuid from 'react-native-uuid';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


import {
  SafeAreaView,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
  
  


  StyleSheet,
  Image,
  Text,
  View,
  Alert,
} from 'react-native';




const SignUp=({navigation})=>{
    const [email,setEmail]=useState('')

    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    
    const [next,setNext]=useState(false)
    const [image,setImage]=useState(null)
    const [loading,setLoading]=useState(false)

    if (loading){
      return <ActivityIndicator size="large" color="#00ff00" />
    }


  
    const userSignUp= async()=>{
      if (!email || !password || !name || !image){
          alert('Please input all fields')
          setLoading(false)

          return
        
      }
      
try {
  setLoading(true)


  const result = await auth().createUserWithEmailAndPassword(email,password)

  firestore().collection('users').doc(result.user.uid).set(

    {
      name: name,
      email: result.user.email,
      uid: result.user.uid,
      pic:image,
      
      

      
    }
    




  )

    setLoading(false)
}
catch (err){
  alert(err)
  setLoading(false)


}

    


    }
  
    const ImageUpload =()=>{


      launchImageLibrary({quality:0.5}, (fileobj)=>{

        const storageRef = storage().ref().child(`/userprofile/${uuid.v4()}`)

    
        const UploadTask= storageRef.putFile(String(fileobj.assets[0].uri))
    
    
    
                      UploadTask.on('state_changed',
                      (snapshot) => {
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                          if (progress==100) alert('Image uploaded')
    
                        switch (snapshot.state) {
                          case 'paused':
                            console.log('Upload is paused');
                            break;
                          case 'running':
                            console.log('Upload is running');
                            break;
                        }
                      }, 
                      (error) => {
    
                        alert("error uploading image")
    
                        // A full list of error codes is available at
                        // https://firebase.google.com/docs/storage/web/handle-errors
                        switch (error.code) {
                          case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                          case 'storage/canceled':
                            // User canceled the upload
                            break;
                    
                          // ...
                    
                          case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                        }
                      }, 
                      () => {
                        // Upload completed successfully, now we can get the download URL
                        storageRef.getDownloadURL(UploadTask.snapshot.ref).then((downloadURL) => {
                          console.log('File available at', downloadURL);
                           setImage(downloadURL)
                          console.log(setImage)
                         });
                        
                      }
                    );
    
    
    
    
    
      })
    
    
    
    }
    
   
  
    return (
        <SafeAreaView>

        <KeyboardAvoidingView behavior={'position'}>
  
         <View style={styles.container1}>
  
         <Image source={require('../assets/whatsapp-logo.png')} style={styles.logo}/>
         <Text style={{color:'#33D951', fontSize:25,}}>Welcome to WhatsApp</Text>
          
         </View>
  
         <View style={styles.container2}>
  
        
         {!next &&
    <>
  
    
   
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
           
           {/* <TextInput
              placeholder='+923361841973'
              style={styles.input}
  
  
  
              />
   */}
         
  
  
   </>
  
          
  
  }
  
  
  
          
  
  
  
     {next ?
     <>
  <TouchableOpacity  style={styles.upload} onPress={()=>ImageUpload()} >
            {/* <Text style={{color:'white',fontSize:25,}}>UPLOAD IMAGE</Text> */}
            <Icon name='camera' size={60} color='white'/>
            <Text style={{color:'white',fontSize:15}}>Add Image</Text>
  
          </TouchableOpacity>
  
          
          <TextInput
            placeholder='Name'
            
            style={styles.input}
            
            onChangeText={newText => setName(newText)}
  
  
            
          
          />
  
        
              <TouchableOpacity  style={styles.next} onPress={()=>userSignUp()}
            
            >
            <Text style={{color:'white',fontSize:25,}}>SIGN UP</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.next} onPress={()=>setNext(false)}>
            <Text style={{color:'white',fontSize:25,}}>BACK</Text>
          </TouchableOpacity>
  
  
  
  </> 
  :
  <>
  
  <TouchableOpacity  style={styles.next} onPress={()=>setNext(true)}>
            <Text style={{color:'white',fontSize:25,}}>NEXT</Text>
          </TouchableOpacity>
  
          
       
  
        
              
         
            
              
  
    </>              
     }
  
  <TouchableOpacity   onPress={()=>navigation.navigate('login')}>
            <Text style={{textAlign:'center'}}>Already have an Account? Login!</Text>
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
      height:"50%"
  
    },
    next:{
      borderRadius:40,
      height:40,
      width:150,
      backgroundColor:'#33D951',
      alignItems:'center',
      marginVertical:15,
  
    },
    input:{
      fontSize:15,
      borderWidth:1,
      height:'12%',
      width:'90%',
      marginVertical:10,
      borderColor:'#33D951',
  
  
    },
    upload:{
      borderRadius:100,
      justifyContent:'center',
      height:120,
      width:120,
      backgroundColor:'#C0C0C0',
      margin:10,
      marginVertical:20,
      alignItems:'center'
  
    },
    logo:{
      height:300,
      width:300,
    }
   
  });

  export default SignUp;

