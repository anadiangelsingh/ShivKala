import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import QRCode from 'react-native-qrcode-svg';
import StockEntryForm from '../components/Forms/StockEntryForm';

const StockEntry = () => {
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <StockEntryForm />

        {/* <Text style={styles.textStyle}>
          Please insert any value to generate QR code
        </Text> */}
        <TextInput
          style={styles.textInputStyle}
          onChangeText={inputText => setInputText(inputText)}
          placeholder="Enter Any Value"
          placeholderTextColor="#8b8a8a"
          value={inputText}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setQrvalue(inputText)}>
          <Text style={styles.buttonTextStyle}>Generate QR Code</Text>
        </TouchableOpacity>
        {/* <Text style={styles.titleStyle}>
          Generation of QR Code in React Native
        </Text> */}
        <QRCode
          //QR code value
          value={qrvalue ? qrvalue : 'NA'}
          //size of QR Code
          size={80}
          //Color of the QR Code (Optional)
          color="black"
          //Background Color of the QR Code (Optional)
          backgroundColor="white"
          placeholder={'test'}
        />
      </View>
    </SafeAreaView>
  );
};
export default StockEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#cfcec6',
    //justifyContent: 'center',
    //alignItems: 'center',
    //textAlign: 'center',
    //padding: 10,
  },
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    margin: 10,
  },
  // textInputStyle: {
  //   flexDirection: 'row',
  //   height: 40,
  //   width: 200,
  //   padding: 10,
  //   borderWidth: 2,
  //   marginTop: 20,
  //   marginLeft: 35,
  //   marginRight: 35,
  //   margin: 10,
  // },
  buttonStyle: {
    backgroundColor: '#350c30',
    //borderWidth: 0,
    color: '#ab3a3a',
    borderColor: '#51D8C7',
    alignItems: 'center',
    //borderRadius: 5,
    //marginTop: 30,
    padding: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    // paddingVertical: 10,
    fontSize: 16,
  },
});
