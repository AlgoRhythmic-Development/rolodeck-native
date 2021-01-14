import React from 'react';
import { View } from 'react-native';
import { useQuery } from '@apollo/client';
import { QUERY_MY_COLLECTION } from '../utils/queries';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';
import { useStoreContext } from '../utils/Store';
import SET_ID from '../utils/reducers';

const Collection = () => {
  // const [state] = useStoreContext();
  // const { scannedId } = state;

  const { data } = useQuery(QUERY_MY_COLLECTION);
  const collectedCards = data?.collectedCards || [];
  console.log(collectedCards)

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
