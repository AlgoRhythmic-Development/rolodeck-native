import React from 'react';
import { SafeAreaView, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useQuery } from '@apollo/client';
import { QUERY_MY_COLLECTION } from '../utils/queries';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';

const Collection = () => {

    const { data } = useQuery(QUERY_MY_COLLECTION);
    const collectedCards = data?.collectedCards || [];
    console.log(collectedCards)

    const renderItem = ({ item }) => <Card cardInfo={item} />;

    return (
      <SafeAreaView>
        <FlatList
          data={collectedCards}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </SafeAreaView>
    );
  };

export default Collection;
