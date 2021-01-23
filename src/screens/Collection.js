import React from 'react';
import { View } from 'react-native';
import { useQuery } from '@apollo/client';
import { QUERY_MY_COLLECTION } from '../utils/queries';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';

const Collection = () => {
  const { data } = useQuery(QUERY_MY_COLLECTION);
  const collectedCards = data?.me.collectedCards || [];
  // console.log(collectedCards)
  // console.log("render")

  const renderItem = ({ item }) => <Card cardInfo={item} />;

  return (
    <View>
      <FlatList
        data={collectedCards}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default Collection;
