import React from 'react';
import { View } from 'react-native';
import { useQuery } from '@apollo/client';
import { QUERY_CARDS } from '../utils/queries';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';

const Collection = () => {
  const { data } = useQuery(QUERY_CARDS);

  const renderItem = ({ item }) => <Card card={item} />;

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        // key is used for optimization, when no key rn will re-render whole list, with key it will only re-render the item in list that is updated
        keyExtractor={(item) => item.username}
      />
    </View>
  );
};

export default Collection;
