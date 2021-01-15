import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Button, SafeAreaView } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useMutation } from "@apollo/client";
import { QUERY_MY_COLLECTION } from "../../utils/queries";
import { ADD_COLLECTED_CARD } from "../../utils/mutations";
// component imports
import StatusModal from "../StatusModal";
import Card from "../Card";

export default function QrCodeScanner() {
  const [show, setShow] = useState(false);
  const [modalStatus, setModalStatus] = useState("");
  const [modalData, setModalData] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [addCollectedCard, { error, data }] = useMutation(ADD_COLLECTED_CARD, {
    update(cache, { data: { addCollectedCard } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_MY_COLLECTION });
        cache.writeQuery({
          query: QUERY_MY_COLLECTION,
          data: { me: { ...me, collectedCards: [...me.collectedCards] } },
        });
      } catch (e) {
        console.error(error);
      }
    },
    onCompleted: (collectedCardData) => {
      setModalStatus("Success!");
      const NewCard = <Card isHome={false} cardInfo={collectedCardData} />;
      setModalData(NewCard);
      setShow(true);
    },
  });

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);
    console.log(data);
    try {
      await addCollectedCard({
        variables: { _id: data },
      });
    } catch (e) {
      console.error(e);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (show) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusModal
          style={{ width: 100 }}
          show={show}
          setShow={setShow}
          status={modalStatus}
          data={modalData}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.camera}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  camera: {
    position: "absolute",
    flex: 1,
    top: 50,
    left: 5,
    height: 760,
    width: 403,
  },
});

// import React, { useState, useEffect } from "react";
// import { Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
// import { BarCodeScanner } from "expo-barcode-scanner";
// import { useMutation, useLazyQuery } from "@apollo/client";
// import { QUERY_CARD } from "../../utils/queries";
// import { ADD_COLLECTED_CARD } from "../../utils/mutations";
// import StatusModal from "../StatusModal";

// export default function QrCodeScanner() {
//   // STATE
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scannedBool, setScannedBool] = useState(false);
//   const [modalToggleBool, setModalToggleBool] = useState(false);

//   // QUERIES & MUTATIONS
//   // query cards
//   const [getCard, { data: cardData, error }] = useLazyQuery(QUERY_CARD);
//   const cardObj = cardData?.card || {};
//   // mutate card collection
//   const [addCollectedCard] = useMutation(ADD_COLLECTED_CARD);

//   // USE EFFECTS
//   // ask for permission on render
//   useEffect(() => {
//     (async () => {
//       const { statusStr } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(statusStr === "granted");
//     })();
//   }, []);
//   // on scan set modalToggleBool to true
//   // useEffect(() => {
//   //   if (!modalToggleBool) {
//   //     setModalToggleBool(true);
//   //   }
//   // }, [scannedBool]);

//   // CALLBACKS & CONDITIONS
//   const handleBarCodeScanned = async ({ typeStr, data }) => {
//     setScannedBool(true);
//     alert(`Bar code with type ${typeStr} and data ${data} has been scanned!`);
//     // await getCard({ variables: { _id: data } });
//     // await addCard({ variables: { _id: data } });
//     // setModalToggleBool(true);
//     //"{id: jasldhgpa9erbasvnlkasjj, username: jake, businessName: Lendio}"
//   };
//   // check that device has allowed permission and return notice to user
//   if (hasPermission === null) {
//     return (
//       <SafeAreaView>
//         <Text>Requesting for camera permission</Text>
//       </SafeAreaView>
//     );
//   }
//   if (hasPermission === false) {
//     return (
//       <SafeAreaView>
//         <Text>No access to camera</Text>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView>
//       <BarCodeScanner
//         onBarCodeScanned={scannedBool ? undefined : handleBarCodeScanned}
//         style={styles.camera}
//       />
//       {scannedBool && (
//         <Button
//           title={"Tap to Scan Again"}
//           onPress={() => setScannedBool(false)}
//         />
//       )}
//       {/* {modalToggleBool && (
//         <StatusModal
//           show={modalToggleBool}
//           setShow={setModalToggleBool}
//           status="Success!"
//           data={cardObj}
//         />
//       )} */}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "center",
//   },
//   camera: {
//     position: "absolute",
//     flex: 1,
//     top: 50,
//     left: 5,
//     height: 760,
//     width: 403,
//   },
// });
