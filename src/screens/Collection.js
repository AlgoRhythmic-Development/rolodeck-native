import React from 'react';
import { View } from 'react-native';
import { useQuery } from '@apollo/client';
import { QUERY_CARDS } from '../utils/queries';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';

const Collection = () => {
  // let id = '5fd45172ff34161dc421c37e'
  // const { data, loading } = useQuery(QUERY_CARD, { variables: { id } })
  // const cardData = data?.card || []
  // console.log(cardData)
  const cardArr = [];
  for (let i = 0; i < 10; i++) {
    let randomInfo = faker.helpers.createCard();
    let randomImage = faker.image.image();
    console.log(randomImage);

    cardArr.push({ randomInfo, randomImage });
    console.log(cardArr);
  }

  const renderItem = ({ item }) => <Card card={item} />;

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={ item => item.username }
      />
    </View>
  );
};

export default Collection;
