import React from 'react';
import { View } from 'react-native';
import { useQuery } from '@apollo/client';
import {
  QUERY_CARDS,
  QUERY_MY_COLLECTION,
  QUERY_CARD,
  QUERY_USER,
} from '../utils/queries';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';

const Collection = () => {
  // let id = '5fd45172ff34161dc421c37e'
  // const { data, loading } = useQuery(QUERY_CARD, { variables: { id } })
  // const cardData = data?.card || []
  // console.log(cardData)
  // const cardArr = [];
  // for (let i = 0; i < 10; i++) {

  //   cardArr.push({ randomInfo, randomImage });
  //   console.log(cardArr);
  // }

  const username = 'Minnie Schaefer';
  const { data } = useQuery(QUERY_USER, { variables: username });
  console.log(data)

  const renderItem = ({ item }) => <Card card={item} />;

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.username}
      />
    </View>
  );
};

export default Collection;
