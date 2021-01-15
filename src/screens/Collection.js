import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { useQuery } from "@apollo/client";
import { QUERY_MY_COLLECTION } from "../utils/queries";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import { useStoreContext } from "../utils/Store";
import SET_ID from "../utils/reducers";

const Collection = () => {
  // const [state] = useStoreContext();
  // const { scannedId } = state;
  const [collectedCards, setcollectedCards] = useState({});

  const { data } = useQuery(QUERY_MY_COLLECTION, {
    onCompleted: (data) => {
      console.log(data.me.collectedCards);
      setcollectedCards(data);
    },
  });

  const renderItem = ({ item }) => <Card cardInfo={item} />;

  return (
    <SafeAreaView>
      <Text>Collected Cards</Text>
      <FlatList
        data={collectedCards}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </SafeAreaView>
  );
};

export default Collection;
