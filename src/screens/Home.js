import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, SafeAreaView, View, StyleSheet } from "react-native";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ADD_CARD } from "../utils/mutations";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/Store";
import { LOG_OUT } from "../utils/actions";

const Home = ({ route, navigation }) => {
  const { data, loading } = useQuery(QUERY_ME);
  const me = data?.me || [];
  const card = me?.cards[0];
  console.log(card);

  // const [addCard, { error }] = useMutation(ADD_CARD);

  // const variables = {
  //   name: "Taylor Remigi",
  //   jobTitle: "Full Stack Web Developer",
  //   phone: "385-424-8121",
  //   email: "tayremigi@gmail.com",
  // };

  const [state, dispatch] = useStoreContext();

  const logoutUser = async () => {
    try {
      await Auth.logout();
      dispatch({ type: LOG_OUT });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Text>Hello, {me.username}</Text>
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{card.name}</Text>
        <Text style={styles.cardText}>{card.jobTitle}</Text>
        <Text style={styles.cardText}>{card.email}</Text>
        <Text style={styles.cardText}>{card.phone}</Text>
      </View>
      <Button title="Log Out" onPress={() => logoutUser()} />
      {/* <Button title="add card" onPress={() => addCard({ variables })} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: 20,
    padding: 15,
    backgroundColor: "green",
  },
  cardTitle: {
    textAlign: "center",
    fontWeight: "bold",
    color: "red",
  },
  cardText: {
    textAlign: "center",
    color: "purple",
  },
});

export default Home;
