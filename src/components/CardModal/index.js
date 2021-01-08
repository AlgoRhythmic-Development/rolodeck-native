import React from 'react'
import {View} from 'react-native';
import Card from '../Card';

// need actual data to be able to test qr code
// should have capacity to scan a card, save it, and quickly scan another
const CardModal = () => {
  return (
    <View>
      <Card card={card}/>
    </View>
  )
}

export default CardModal