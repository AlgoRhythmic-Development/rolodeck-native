import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useMutation, useLazyQuery } from '@apollo/client';
import { QUERY_CARD } from '../../utils/queries';
import { ADD_COLLECTED_CARD } from '../../utils/mutations';
import StatusModal from '../StatusModal';
// import { useStoreContext } from '../../utils/Store';
// import { SET_ID } from '../../utils/reducers';

export default function QrCodeScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalToggle, setModalToggle] = useState(false);
  // const [result, setResult] = useState();
  // const [oldResult, setOldResult] = useState();
  // const [state, dispatch] = useStoreContext();

  // const cardId = '5ff3f4802cc5664cd0a1126d';
  const [getCard, { data, error }] = useLazyQuery(QUERY_CARD, {
    variables: { _id: cardId },
  });
  const [addCard] = useMutation(ADD_COLLECTED_CARD);
  const card = data?.card || {};

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    // after qrscanner collapses and if you scanned a new code show the success modal
    if (modalToggle) {
      setModalToggle(true);
    }
  }, [scanned]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    getCard({ variables: { _id: data } });
    addCard({ variables: { _id: card } });
    setModalToggle(true);
    dispatch({ type: SET_ID, scannedId: data });
    // mutate the collection to have that card in it
    //"{id: jasldhgpa9erbasvnlkasjj, username: jake, businessName: Lendio}"
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.camera}
      />
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
      {modalToggle && (
        <StatusModal
          show={modalToggle}
          setShow={setModalToggle}
          status="Success!"
          data={card}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  camera: {
    position: 'absolute',
    flex: 1,
    top: 50,
    left: 5,
    height: 760,
    width: 403,
  },
});
