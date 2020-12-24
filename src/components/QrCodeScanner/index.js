import React, { useState } from 'react';
import {
  Alert,
  Linking,
  Dimensions,
  LayoutAnimation,
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

const QrCodeScanner = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [lastScannedUrl, setLastScannedUrl] = useState(null);

  const requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setHasCameraPermission(status === 'granted');
  };

  const componentDidMount = () => {
    requestCameraPermission();
  };
  componentDidMount();

  const handleBarCodeRead = (result) => {
    if (result.data !== lastScannedUrl) {
      LayoutAnimation.spring();
      setLastScannedUrl(result.data);
    }
  };

  const handlePressUrl = () => {
    Alert.alert(
      'Open this URL?',
      setLastScannedUrl,
      [
        {
          text: 'Yes',
          onPress: () => Linking.openURL(lastScannedUrl),
        },
        { text: 'No', onPress: () => {} },
      ],
      { cancellable: false }
    );
  };

  const handlePressCancel = () => {
    setLastScannedUrl(null);
  };

  const maybeRenderUrl = () => {
    // if (!lastScannedUrl) {
    //   return;
    // }

    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.url} onPress={handlePressUrl}>
          <Text numberOfLines={1} style={styles.urlText}>
            {lastScannedUrl}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={handlePressCancel}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {hasCameraPermission === null ? (
        <Text>Requesting for camera permission</Text>
      ) : hasCameraPermission === false ? (
        <Text style={{ color: '#fff' }}>Camera permission is not granted</Text>
      ) : (
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeRead}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={{
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
          }}
        />
      )}

      {maybeRenderUrl()}

      <StatusBar hidden />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
    flexDirection: 'row',
  },
  url: {
    flex: 1,
  },
  urlText: {
    color: '#fff',
    fontSize: 20,
  },
  cancelButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
});

export default QrCodeScanner;
