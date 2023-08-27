
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomListItem from '../components/CustomListItem'
import { BackgroundImage } from 'react-native-elements/dist/config'
import auth from '@react-native-firebase/auth';
import { Avatar } from 'react-native-elements'
import { getStateFromPath } from '@react-navigation/native'

export default function HomeScreen({navigation}) {

  const signOut=()=>{
   auth().signOut().then(()=>{

      navigation.replace('login')

   });


  };

  useLayoutEffect(()=>{
      navigation.setOptions(
        {
          title:'WhatsAppClone',
          
          headerLeft: ()=>(
            <View style={{marginLeft:20, justifyContent:'space-evenly', }}>
              <TouchableOpacity onPress={signOut}>
              <Avatar
              
              source={{uri : 'https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/356866919_1032608441481261_480362472358293731_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG3_MtA2l3WqQgr9pHXrazulVyeCAWafLWVXJ4IBZp8tWQVLrqvGN4A9hwrCO3BQST8KuxgyMzW8jprKtqdfOUw&_nc_ohc=CtKK3kKFwmgAX9J-fO4&_nc_ht=scontent-fra5-1.xx&oh=00_AfCgZ8gEVnb3Jg5W4ZtApVTKeSfKggXQhrWY4BZ2_h3hqA&oe=64F043EE' }}

              rounded
              
              />
              
             

              </TouchableOpacity>

            </View>

          )

        }



      )

      }
  , [])
  return (
    <SafeAreaView>
      <ScrollView>
      <CustomListItem/>
      
      </ScrollView>
    </SafeAreaView>
  )
}