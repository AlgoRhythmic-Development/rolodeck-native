import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
// screen imports
import Loading from "../screens/Loading";
// component imports
import CardModal from "../components/CardModal";

// ****** THIS IS A SCREEN FOR TESTING OTHER COMPONENTS, QUERIES, ETC ******

const TestScreen = () => {
  const [myCard, setMyCard] = useState();
  const { data, loading } = useQuery(QUERY_ME, {
    onCompleted: (data) => {
      setMyCard(data.me.cards[0] || {});
      console.log(myCard);
    },
  });

  const [show, setShow] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Text>Test Your Stuff Here!</Text>
          <CardModal
            show={show}
            setShow={setShow}
            isHome={false}
            cardData={myCard}
          />
          <Button title="Show CardModal" onPress={() => setShow(true)} />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
});

export default TestScreen;
