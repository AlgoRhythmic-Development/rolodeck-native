import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, SafeAreaView, View, StyleSheet } from "react-native";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ADD_CARD } from "../utils/mutations";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/Store";
import { LOG_OUT } from "../utils/actions";
// components
import Card from "../components/Card";

const Home = ({ route, navigation }) => {
  const { data, loading } = useQuery(QUERY_ME);
  const me = data?.me || {};

  const card = data?.me.cards[0] || {};

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
      <View style={{ marginTop: "15%" }}>
        <Card cardInfo={card} />
      </View>
      <View>
        <Button
          style={{ marginTop: "15%" }}
          title="Log Out"
          onPress={() => logoutUser()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
