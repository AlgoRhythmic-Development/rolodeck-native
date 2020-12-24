import React from 'react';
// import ContactForm from '../components/ContactForm';
import { Text, View } from 'react-native';
import QrCodeScanner from '../components/QrCodeScanner';

const ScanScreen = () => {
  return (
    <View>
      <Text>Scan Screen</Text>
      <QrCodeScanner />
    </View>
  );
};

export default ScanScreen;
