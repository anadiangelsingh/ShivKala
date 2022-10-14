import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native';
//import StockEntry from '../../screens/StockEntry';
import Input from '../Auth/Input';
import {Colors} from '../../constants/styles';
import Button from '../ui/Button';
import {useState} from 'react';

function StockEntryForm(onSubmit, data) {
  const [enteredItemName, setEnteredItemName] = useState('');
  const [enteredItemCode, setEnteredItemCode] = useState('');
  const [enteredWholesalerCode, setEnteredWholesalerCode] = useState('');
  const [enteredNetPrice, setEnteredNetPrice] = useState('');
  const [enteredPurchasePrice, setEnteredPurchasePrice] = useState('');
  const [enteredSellingPrice, setEnteredSellingPrice] = useState('');
  const [enteredOther, setEnteredOther] = useState('');

  const {
    ItemName,
    ItemCode,
    WholesalerCode,
    NetPrice,
    PurchasePrice,
    SellingPrice,
    Other,
  } = data;

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
  function submitHandler() {
    onSubmit({
      ItemName: enteredItemName,
      ItemCode: enteredItemCode,
      WholesalerCode: enteredWholesalerCode,
      NetPrice: enteredNetPrice,
      PurchasePrice: enteredPurchasePrice,
      SellingPrice: enteredSellingPrice,
      Other: enteredOther,
    });
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
      <View style={styles.buttons}>
        <Button onPress={submitHandler}>
          {'Generate QR Code'}
          {/* {isLogin ? 'Log In' : 'Sign Up'} */}
        </Button>
      </View>
    </View>
  );
}

export default StockEntryForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
  },
});
