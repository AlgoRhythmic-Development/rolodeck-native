import React from 'react'
import { StyleSheet, StatusBar, Text, View, Image } from 'react-native'
import FlipCard from 'react-native-flip-card'

const Card = ({ cardInfo }) => (
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
      <Text style={styles.title}>{cardInfo.randomInfo.company.name}</Text>
      <Text style={styles.item}>{cardInfo.randomInfo.company.catchPhrase}</Text>
      <Text style={styles.item}>{cardInfo.randomInfo.name}</Text>
      <Text style={styles.item}>{cardInfo.randomInfo.website}</Text>
      <Text style={styles.item}>{cardInfo.randomInfo.phone}</Text>
      <Text style={styles.item}>{cardInfo.randomInfo.email}</Text>
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
