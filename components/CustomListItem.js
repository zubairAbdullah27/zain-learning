import { View, Text } from 'react-native'
import React from 'react'
import {ListItem, Avatar} from 'react-native-elements';

const CustomListItem = () => {
  return (
    <ListItem>
      <Avatar
            rounded
            source={{uri : 'https://scontent-fra5-1.xx.fbcdn.net/v/t39.30808-6/356866919_1032608441481261_480362472358293731_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG3_MtA2l3WqQgr9pHXrazulVyeCAWafLWVXJ4IBZp8tWQVLrqvGN4A9hwrCO3BQST8KuxgyMzW8jprKtqdfOUw&_nc_ohc=CtKK3kKFwmgAX9J-fO4&_nc_ht=scontent-fra5-1.xx&oh=00_AfCgZ8gEVnb3Jg5W4ZtApVTKeSfKggXQhrWY4BZ2_h3hqA&oe=64F043EE' }}

      />
      <ListItem.Content>
            <ListItem.Title  style={{fontWeight:800}}>

            Zain ul Abdin
            </ListItem.Title>
            <ListItem.Subtitle numberOfLines={1} ellipsizeMode='tail'>

                Abey Zain Bsdk kab krega react native



            </ListItem.Subtitle>
            

      </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem