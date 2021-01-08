import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Text, SafeAreaView, View } from "react-native";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USERS } from "../utils/queries";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/Store";
import { LOG_OUT } from "../utils/actions";
// components
import Card from "../components/Card";
import StatusModal from "../components/StatusModal";

const Home = ({ route, navigation }) => {
  // Since we're working with multiple queries in one functional component,
  // we need to give our destructured data properties different names
  // or it will throw an error saying data is already defined
  const { data: meData } = useQuery(QUERY_ME);
  const me = meData?.me || {};
  const card = meData?.me.cards[0] || {};

  // ***************START OF MODAL USAGE EXAMPLE*********************

  // show/setShow determine modal visibility
  const [show, setShow] = useState(false);

  // modalStatus is a message that is passed through props
  // to be displayed in modal
  const [modalStatus, setModalStatus] = useState("");

  // modalData is any other data you want passed to the modal and displayed
  // under the status message
  const [modalData, setModalData] = useState("");

  // set up a lazyQuery which will run at beginning of
  // handlePress() function call
  const [queryUsers, { data: userData, loading }] = useLazyQuery(QUERY_USERS);

  // handling state updates for the modal seems to work best
  // when done asynchronously so that everything is certainly
  // ready before "show" is set to true
  const handlePress = async () => {
    // run our lazy query and define a variable from the first user object's
    // username property
    let user;
    await queryUsers();
    (await userData) ? (user = userData?.users[0].username) : (user = "");

    // if task was successful, set status to "Success!",
    // set modalData to the user const defined above,
    // and set show to true, triggering the modal to become
    // visible
    if (userData) {
      await setModalStatus("Success!");
      await setModalData(user);
      return setShow(true);
    } else {
      // if unsuccessful, set status to inform user of what happened
      // then set show to true
      await setModalStatus("No user data");
      await setModalData("");
      return setShow(true);
    }
  };

  // see return jsx for <StatusModal> and props

  // *********************END OF MODAL USAGE EXAMPLE*************************

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
      <StatusModal
        show={show}
        setShow={setShow}
        status={modalStatus}
        data={modalData}
      />
      <Button
        title="Query Users and Test Modal"
        onPress={() => handlePress()}
      />
    </SafeAreaView>
  );
};

export default Home;
