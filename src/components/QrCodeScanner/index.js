import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_CARD } from '../../utils/queries';;

export default function QrCodeScanner({ cardId }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { data } = useQuery(QUERY_CARD, { variables: { cardId } });
  console.log(object)
  const []

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
