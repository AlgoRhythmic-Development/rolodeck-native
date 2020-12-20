import React from 'react'
import { StyleSheet, StatusBar, Text, View, Image } from 'react-native'
// import { gql, useQuery } from '@apollo/client'
// import { QUERY_CARD } from '../../utils/queries'
import faker from 'faker'
import { FlatList } from 'react-native-gesture-handler'
import FlipCard from 'react-native-flip-card'

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
)

const Card = () => {
  // let id = '5fd45172ff34161dc421c37e'
  // const { data, loading } = useQuery(QUERY_CARD, { variables: { id } })
  // const cardData = data?.card || []
  // console.log(cardData)
  const cardArr = []
  for (let i = 0; i < 10; i++) {
    let randomInfo = faker.helpers.createCard()
    let randomImage = faker.image.image()
    console.log(randomImage)

    cardArr.push({ randomInfo, randomImage })
  }

  // const createCards = () => {
  //   cardArr.map(card => (
  //     <View>
  //       <Text>{card.company.name}</Text>
  //       <Text>{card.company.catchPhrase}</Text>
  //       <Text>{card.name}</Text>
  //       <Text>{card.website}</Text>
  //       <Text>{card.phone}</Text>
  //       <Text>{card.email}</Text>
  //     </View>
  //   ))
  // }

  // const { data, loading } = useQuery(QUERY_CARDS)

  // let usersArr = data?.users || []

  // usersArr.forEach(user => {
  //   console.log(user.username)
  //   console.log(user.email)
  // })

  const renderItem = ({ item }) => <Item card={item} />

  return (
    <View>
      <FlatList
        data={cardArr}
        renderItem={renderItem}
        keyExtractor={item => item.username}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  card: {
    backgroundColor: 'pink',
    margin: 20,
    borderRadius: 20
  },
  back: {
    margin: 20,
    borderRadius: 20,
    paddingVertical: 175,
    backgroundColor: 'darkcyan'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    textAlign: 'center'
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 20
  }
})

export default Card
