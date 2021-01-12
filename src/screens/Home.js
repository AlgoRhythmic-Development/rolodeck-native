import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Text, SafeAreaView, View } from "react-native";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { QUERY_ME, QUERY_USERS } from "../utils/queries";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/Store";
import { LOG_OUT } from "../utils/actions";
import AnimatedLoader from "react-native-animated-loader";
// components
import Card from "../components/Card";
import StatusModal from "../components/StatusModal";
import Search from "../components/Search";
import { ADD_COLLECTED_CARD } from "../utils/mutations";



const Home = ({ route, navigation }) => {
    // Since we're working with multiple queries in one functional component,
    // we need to give our destructured data properties different names
    // or it will throw an error saying data is already defined
    const { data: meData, loading: meLoading } = useQuery(QUERY_ME);
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

    // set up a lazyQuery which will run a callback function
    // setting our modal state
    // *** this query is not necessary for this screen so this is
    // for demo purposes only***
    const [queryUsers, { error, loading: usersLoading }] = useLazyQuery(
        QUERY_USERS,
        {
            onCompleted: (data) => {
                if (!error) {
                    setModalStatus("Success!");
                    const user = data.users[0].username;
                    setModalData(user);
                    setShow(true);
                } else {
                    setModalStatus("Error");
                    setModalData("Couldn't fetch user data...");
                    setShow(true);
                }
            },
        }
    );

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

    const { collectedCards } = state;


    const [addCollectedCard] = useMutation(ADD_COLLECTED_CARD, {
        update(cache, { data: { addCollectedCard } }) {
          try {
            //could potentially not exist yet, so wrap in a try...catch
            const { me } = cache.readQuery({ query: QUERY_MY_COLLECTION });
            cache.writeQuery({
              query: QUERY_MY_COLLECTION,
              data: {
                me: {
                  ...me,
                  collectedCards: [addCollectedCard, ...collectedCards],
                },
              },
            });
          } catch (e) {
            console.error(e);
          }
        },
      });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="auto" />
            {meLoading ? (
                <AnimatedLoader
                    visible={true}
                    source={require("../assets/lottie/contact-fill.json")}
                    animationStyle={{ width: "100%", height: "100%" }}
                    speed={1}
                />
            ) : (
                    <>
                        <Text>Hello, {me.username}</Text>
                        <Card isHome={true} cardInfo={card} />
                        <View>
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
                                onPress={() => queryUsers()}
                            />
                            <Search
                                addCollectedCard={addCollectedCard}
                                collectedCards={collectedCards}
                            />
                        </View>
                    </>
                )}
        </SafeAreaView>
    );
};

export default Home;
