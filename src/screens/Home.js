import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Text, SafeAreaView, View } from "react-native";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/Store";
import { LOG_OUT } from "../utils/actions";
// components
import Card from "../components/Card";
import StatusModal from "../components/StatusModal";

const Home = ({ route, navigation }) => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("Success!");
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
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Text>Hello, {me.username}</Text>
      <Card cardInfo={card} />
      <Button
        style={{ marginTop: "15%" }}
        title="Log Out"
        onPress={() => logoutUser()}
      />
      <StatusModal show={show} setShow={setShow} status={status} />
      <Button title="test modal" onPress={() => setShow(true)} />
    </SafeAreaView>
  );
};

export default Home;
