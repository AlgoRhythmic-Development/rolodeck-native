import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import QrCodeScanner from '../components/QrCodeScanner';

const ScanScreen = () => {
  return (
    <View>
      <QrCodeScanner />
    </View>
  );
};

export default ScanScreen;
