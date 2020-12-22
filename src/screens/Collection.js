import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// import { gql, useQuery } from '@apollo/client'
// import { QUERY_CARD } from '../../utils/queries'

import Card from '../components/Card';

import faker from 'faker';


const Collection = () => {
  // const { data, loading } = useQuery(QUERY_CARD, { variables: { id } })
  // const cardData = data?.card || []
  const cardArr = [];
  for (let i = 0; i < 10; i++) {
    let randomInfo = faker.helpers.createCard();
    let randomImage = faker.image.image();
    console.log(randomImage);

    cardArr.push({ randomInfo, randomImage });
  }

  // const { data, loading } = useQuery(QUERY_CARDS)

  // let usersArr = data?.users || []

  // usersArr.forEach(user => {
  //   console.log(user.username)
  //   console.log(user.email)
  // })

  const renderItem = ({ item }) => <Card cardInfo={item} />;

  return (
    <View>
      <FlatList
        data={cardArr}
        renderItem={renderItem}
        keyExtractor={(card) => card.username}
      />
    </View>
  );
};

export default Collection;
