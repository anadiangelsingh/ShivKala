import React, {useState} from 'react';

import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import QRCode from 'react-native-qrcode-svg';
import StockEntryForm from '../components/Forms/StockEntryForm';
import {Colors} from '../constants/styles';

const StockEntry = () => {
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');

  function submitHandler() {
    // console.log(onSubmit);
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
        <ScrollView style={styles.container}>
          <View style={styles.formStyle}>
            <StockEntryForm onSubmit={submitHandler} />
          </View>
        </ScrollView>
      </ImageBackground>
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
    padding: 5,
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
  formStyle: {
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 5,
    backgroundColor: Colors.white0,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.35,
    shadowRadius: 4,
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
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.7,
  },
});
