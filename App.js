
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
 
  
  


  
  View,
} from 'react-native';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';



const Stack=createNativeStackNavigator();



const App =()=>{
 

  return (
    <NavigationContainer>
    <Stack.Navigator>
            {/* <Stack.Screen name='login' component={Login} options={{headerShown:false}}/> */}
            <Stack.Screen name='login' component={LoginScreen} options={{headerShown:false}}/>

            <Stack.Screen name='signup' component={SignUp} options={{headerShown:false}}/>

            <Stack.Screen name='home' component={HomeScreen} options={{headerShown:true, headerStyle:{ backgroundColor:'#25D366'},title:'WhatsApp', headerTitleStyle: {
            fontWeight: 'bold', color:'white'
          },}}/>


        </Stack.Navigator>


  </NavigationContainer>
  

      )
}


export default App;
