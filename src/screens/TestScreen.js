import { StatusBar } from "expo-status-bar";
// import Constants from "expo-constants";
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
  let myCard = {};
  const { data, loading } = useQuery(QUERY_ME, {
    onCompleted: (data) => {
      myCard = data.me.cards[0] || {};
    },
  });

  const [show, setShow] = useState(false);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <Text>Test Your Stuff Here!</Text>
          {myCard ? (
            <>
              <CardModal
                show={show}
                setShow={setShow}
                isHome={false}
                cardData={myCard}
              />
              <Button title="Show CardModal" onPress={setShow(true)} />
            </>
          ) : (
            <Text>No card data found...</Text>
          )}
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  list: {
    marginTop: "10%",
  },
});

export default TestScreen;
