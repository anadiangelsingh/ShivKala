import React from 'react';
import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native';
//import StockEntry from '../../screens/StockEntry';
import Input from '../Auth/Input';
import {Colors} from '../../constants/styles';

function StockEntryForm() {
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
              //onUpdateValue={updateInputValueHandler.bind(this, 'email')}
              // value={enteredEmail}
              keyboardType="email-address"
              //isInvalid={emailIsInvalid}
              placeholder={'Please enter item name'}
            />
          </View>
          <View>
            <Input
              label="Item Code"
              //onUpdateValue={updateInputValueHandler.bind(this, 'email')}
              // value={enteredEmail}
              keyboardType="email-address"
              //isInvalid={emailIsInvalid}
              placeholder={'Please enter Item Code '}
            />
          </View>
          <View>
            <Input
              label="Wholesaler Code"
              //onUpdateValue={updateInputValueHandler.bind(this, 'email')}
              // value={enteredEmail}
              keyboardType="email-address"
              //isInvalid={emailIsInvalid}
              placeholder={'Please enter wholesaler code'}
            />
          </View>
          <View>
            <Input
              label="Net Price"
              //onUpdateValue={updateInputValueHandler.bind(this, 'email')}
              // value={enteredEmail}
              keyboardType="email-address"
              //isInvalid={emailIsInvalid}
              placeholder={'Please enter Net price'}
            />
          </View>
          <View>
            <Input
              label="Purchasing Price"
              //onUpdateValue={updateInputValueHandler.bind(this, 'email')}
              // value={enteredEmail}
              keyboardType="email-address"
              //isInvalid={emailIsInvalid}
              placeholder={'Please enter '}
            />
          </View>
          <View>
            <Input
              label="Selling Price"
              //onUpdateValue={updateInputValueHandler.bind(this, 'email')}
              // value={enteredEmail}
              keyboardType="email-address"
              //isInvalid={emailIsInvalid}
              placeholder={'Please enter selling price'}
            />
          </View>
          <View>
            <Input
              label="Other Details (Optional)"
              //onUpdateValue={updateInputValueHandler.bind(this, 'email')}
              // value={enteredEmail}
              keyboardType="email-address"
              //isInvalid={emailIsInvalid}
              placeholder={''}
            />
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
});
