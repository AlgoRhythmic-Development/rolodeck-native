import React from "react";
import { StyleSheet, StatusBar, Text, View, Image } from "react-native";
import FlipCard from "react-native-flip-card";
import QrCode from "react-native-qrcode-svg";
// component imports
import EditCardButton from "../EditCardButton";

const Card = ({ isHome, cardData }) => {
  return (
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
        {isHome && <EditCardButton cardData={cardData} />}
        {cardData.companyName !== "" && (
          <Text style={styles.title}>{cardData.companyName}</Text>
        )}
        {cardData.tagline && (
          <Text style={styles.item}>{cardData.tagline}</Text>
        )}
        <Text style={styles.item}>{cardData.name}</Text>
        <Text style={styles.item}>{cardData.jobTitle}</Text>
        {cardData.website && (
          <Text style={styles.item}>{cardData.website}</Text>
        )}
        <Text style={styles.item}>{cardData.phone}</Text>
        <Text style={styles.item}>{cardData.email}</Text>
      </View>
      {/* Back Side */}
      <View style={styles.back}>
        <QrCode value="some random string" />
      </View>
    </FlipCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  card: {
    backgroundColor: "pink",
    margin: 20,
    borderRadius: 20,
  },
  back: {
    margin: 20,
    borderRadius: 20,
    paddingVertical: 175,
    backgroundColor: "darkcyan",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    marginTop: 20,
  },
});

export default Card;
