import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  label,
} from 'react-native';
import {ScrollView} from 'react-native';
//import StockEntry from '../../screens/StockEntry';
import Input from '../Auth/Input';
import {Colors} from '../../constants/styles';
import Button from '../ui/Button';
import {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';

function StockEntryForm() {
  const [enteredItemName, setEnteredItemName] = useState('');
  const [enteredItemCode, setEnteredItemCode] = useState('');
  const [enteredWholesalerCode, setEnteredWholesalerCode] = useState('');
  const [enteredNetPrice, setEnteredNetPrice] = useState('');
  const [enteredPurchasePrice, setEnteredPurchasePrice] = useState('');
  const [enteredSellingPrice, setEnteredSellingPrice] = useState('');
  const [enteredOther, setEnteredOther] = useState('');
  const [qrvalue, setQrvalue] = useState('');
  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'Item Name':
        setEnteredItemName(enteredValue);
        break;
      case 'Item Code':
        setEnteredItemCode(enteredValue);
        break;
      case 'Wholesaler Code':
        setEnteredWholesalerCode(enteredValue);
        break;
      case 'Net Price':
        setEnteredNetPrice(enteredValue);
        break;
      case 'Purchasing Price':
        setEnteredPurchasePrice(enteredValue);
        break;
      case 'Selling Price':
        setEnteredSellingPrice(enteredValue);
        break;
      case 'Other Details':
        setEnteredOther(enteredValue);
        break;
    }
  }

  function QR() {
    setQrvalue([
      (IName = enteredItemName),
      (ICode = enteredItemCode),
      (IWCode = enteredWholesalerCode),
      (INetPrice = enteredNetPrice),
      (IPurPrice = enteredPurchasePrice),
      (ISellPrice = enteredSellingPrice),
      (IOther = enteredOther),
    ]);
    console.log(IName);
  }

  return (
    <View>
      <View>
        <Input
          label="Item Name"
          onUpdateValue={updateInputValueHandler.bind(this, 'Item Name')}
          value={enteredItemName}
          keyboardType="email-address"
          //isInvalid={emailIsInvalid}
          placeholder={'Please enter Item Name'}
        />
      </View>
      <View>
        <Input
          label="Item Code"
          onUpdateValue={updateInputValueHandler.bind(this, 'Item Code')}
          value={enteredItemCode}
          // keyboardType="email-address"
          //isInvalid={emailIsInvalid}
          placeholder={'Please enter Item Code '}
        />
      </View>
      <View>
        <Input
          label="Wholesaler Code"
          onUpdateValue={updateInputValueHandler.bind(this, 'Wholesaler Code')}
          value={enteredWholesalerCode}
          //keyboardType="email-address"
          //isInvalid={emailIsInvalid}
          placeholder={'Please enter Wholesaler Code'}
        />
      </View>
      <View>
        <Input
          label="Purchasing Price"
          onUpdateValue={updateInputValueHandler.bind(this, 'Purchasing Price')}
          value={enteredPurchasePrice}
          keyboardType="number-pad"
          //isInvalid={emailIsInvalid}
          placeholder={'Please enter Purchasing Price'}
        />
      </View>
      <View>
        <Input
          label="Net Price"
          onUpdateValue={updateInputValueHandler.bind(this, 'Net Price')}
          value={enteredNetPrice}
          keyboardType="number-pad"
          //isInvalid={emailIsInvalid}
          placeholder={'Please enter Net Price'}
        />
      </View>

      <View>
        <Input
          label="Selling Price"
          onUpdateValue={updateInputValueHandler.bind(this, 'Selling Price')}
          value={enteredSellingPrice}
          keyboardType="decimal-pad"
          //isInvalid={emailIsInvalid}
          placeholder={'Please enter Selling Price'}
        />
      </View>
      <View>
        <Input
          label="Other Details (Optional)"
          onUpdateValue={updateInputValueHandler.bind(this, 'Other Details')}
          value={enteredOther}
          //keyboardType="email-address"
          //isInvalid={emailIsInvalid}
          placeholder={''}
        />
      </View>
      {/* <View style={styles.buttons}> */}
      {/* <Button onPress={({}) => setData(enteredItemCode)}> */}
      {/* {'Generate QR Code'} */}
      {/* {isLogin ? 'Log In' : 'Sign Up'} */}
      {/* </Button> */}
      {/* </View> */}

      {/*.......
      ......
       QRCode Logic ......
       ...........
       */}

      <View>
        <Button style={styles.buttonStyle} onPress={QR}>
          <Text style={styles.buttons}>Generate QR Code</Text>
        </Button>
        {/* <Text style={styles.titleStyle}>
          Generation of QR Code in React Native
        </Text> */}
        <View style={styles.QRStyle}>
          <QRCode
            //QR code value
            value={qrvalue ? qrvalue : 'NA'}
            //size of QR Code
            size={120}
            //Color of the QR Code (Optional)
            color="black"
            //Background Color of the QR Code (Optional)
            backgroundColor="white"
            placeholder={'test'}
          />
          <View>
            <Text> Item Name: {IName} </Text>
            <Text> Item Code: {ICode}</Text>
            <Text> Wholesaler Code : {IWCode}</Text>
            <Text> Net Price : {INetPrice}</Text>
            <Text> Purchase Price : {IPurPrice}</Text>
            <Text> Selling Price : {ISellPrice}</Text>
            <Text> Other Details : {IOther}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default StockEntryForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
  QRStyle: {
    flexDirection: 'row',
    marginTop: 12,
    width: 220,
  },
});
