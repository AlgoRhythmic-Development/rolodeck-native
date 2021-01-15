import React from "react";
import { StyleSheet, StatusBar, Text, View, Image } from "react-native";
import FlipCard from "react-native-flip-card";
import QrCode from "react-native-qrcode-svg";
// component imports
import EditCardButton from "../EditCardButton";

const Card = ({ isHome, cardInfo }) => {
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
        {isHome && <EditCardButton cardData={cardInfo} />}
        {cardInfo.companyName !== "" && (
          <Text style={styles.title}>{cardInfo.companyName}</Text>
        )}
        {cardInfo.tagline && (
          <Text style={styles.item}>{cardInfo.tagline}</Text>
        )}
        <Text style={styles.item}>{cardInfo.name}</Text>
        <Text style={styles.item}>{cardInfo.jobTitle}</Text>
        {cardInfo.website && (
          <Text style={styles.item}>{cardInfo.website}</Text>
        )}
        <Text style={styles.item}>{cardInfo.phone}</Text>
        <Text style={styles.item}>{cardInfo.email}</Text>
      </View>
      {/* Back Side */}
      <View style={styles.back}>
        <QrCode value={cardInfo._id} />
      </View>
    </FlipCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  card: {
    height: "25%",
    backgroundColor: "pink",
    margin: 8,
    borderRadius: 6,
  },
  back: {
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    borderRadius: 6,
    paddingVertical: 10,
    backgroundColor: "darkcyan",
  },
  item: {
    padding: 1,
    marginVertical: 8,
    marginHorizontal: 5,
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    marginTop: 20,
  },
});

export default Card;
