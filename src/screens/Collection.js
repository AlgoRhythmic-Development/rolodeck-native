import React from 'react';
import { View } from 'react-native';
import { useQuery } from '@apollo/client';
import { QUERY_CARDS } from '../utils/queries';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';

const Item = ({ card }) => (
  <FlipCard
    friction={6}
    perspective={1000}
    flipHorizontal={true}
    flipVertical={false}
    flip={false}
    clickable={true}
  >
    {/* Face Side */}
    <View style={styles.card}>
      <Text style={styles.title}>{card.randomInfo.company.name}</Text>
      <Text style={styles.item}>{card.randomInfo.company.catchPhrase}</Text>
      <Text style={styles.item}>{card.randomInfo.name}</Text>
      <Text style={styles.item}>{card.randomInfo.website}</Text>
      <Text style={styles.item}>{card.randomInfo.phone}</Text>
      <Text style={styles.item}>{card.randomInfo.email}</Text>
    </View>
    {/* Back Side */}
    <View style={styles.back}>
      <Text style={styles.title}>Back Side</Text>
    </View>
    {/* <View style={styles.card}>
      <Image
        source={{
          uri: card.randomImage
        }}
      />
    </View> */}
  </FlipCard>
);

const Card = () => {
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
