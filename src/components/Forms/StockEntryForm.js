import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native';
//import StockEntry from '../../screens/StockEntry';
import Input from '../Auth/Input';
import {Colors} from '../../constants/styles';
import Button from '../ui/Button';
import {useState} from 'react';

function StockEntryForm() {
  const [enteredItemName, setEnteredItemName] = useState('');
  const [enteredItemCode, setEnteredItemCode] = useState('');
  const [enteredWholesalerCode, setEnteredWholesalerCode] = useState('');
  const [enteredNetPrice, setEnteredNetPrice] = useState('');
  const [enteredPurchasePrice, setEnteredPurchasePrice] = useState('');
  const [enteredSellingPrice, setEnteredSellingPrice] = useState('');
  const [enteredOther, setEnteredOther] = useState('');

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
    return console.log(
      enteredItemName,
      enteredItemCode,
      enteredWholesalerCode,
      enteredNetPrice,
      enteredPurchasePrice,
      enteredSellingPrice,
      enteredOther,
    );
  }

  return (
    <ImageBackground
      source={require('../../assets/images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}>
      <ScrollView style={styles.container}>
        <View style={styles.formStyle}>
          <View>
            <Input
              label="Item Name"
              onUpdateValue={updateInputValueHandler.bind(this, 'Item Name')}
              value={enteredItemName}
              keyboardType="email-address"
              //isInvalid={emailIsInvalid}
              placeholder={'Please enter item name'}
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
              onUpdateValue={updateInputValueHandler.bind(
                this,
                'Wholesaler Code',
              )}
              value={enteredWholesalerCode}
              //keyboardType="email-address"
              //isInvalid={emailIsInvalid}
              placeholder={'Please enter wholesaler code'}
            />
          </View>
          <View>
            <Input
              label="Net Price"
              onUpdateValue={updateInputValueHandler.bind(this, 'Net Price')}
              value={enteredNetPrice}
              keyboardType="number-pad"
              //isInvalid={emailIsInvalid}
              placeholder={'Please enter Net price'}
            />
          </View>
          <View>
            <Input
              label="Purchasing Price"
              onUpdateValue={updateInputValueHandler.bind(
                this,
                'Purchasing Price',
              )}
              value={enteredPurchasePrice}
              keyboardType="number-pad"
              //isInvalid={emailIsInvalid}
              placeholder={'Please enter '}
            />
          </View>
          <View>
            <Input
              label="Selling Price"
              onUpdateValue={updateInputValueHandler.bind(
                this,
                'Selling Price',
              )}
              value={enteredSellingPrice}
              keyboardType="decimal-pad"
              //isInvalid={emailIsInvalid}
              placeholder={'Please enter selling price'}
            />
          </View>
          <View>
            <Input
              label="Other Details (Optional)"
              onUpdateValue={updateInputValueHandler.bind(
                this,
                'Other Details',
              )}
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
      </ScrollView>
    </ImageBackground>
  );
}

export default StockEntryForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  inputContainer: {
    paddingTop: 15,
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  formStyle: {
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 5,
    backgroundColor: Colors.white0,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.7,
  },
  buttons: {
    marginTop: 12,
  },
});
