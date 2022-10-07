// import React from 'react';
// import {View, StyleSheet} from 'react-native';

// import LoginScreen from './src/screens/LoginScreen';

// const App = () => {
//   return (
//     <View style={styles.rootScreen}>
//       <LoginScreen />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   rootScreen: {
//     flex: 1,
//   },
// });

// //....................................

// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   ImageBackground,
//   View,
//   SafeAreaView,
// } from 'react-native';

// import InputContainer from '../components/InputContainer';
// import Colors from '../constants/colors';
// import Button from '../components/Button';

// function LoginScreen() {
//   return (
//     <ImageBackground
//       source={require('../assets/images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
//       resizeMode="cover"
//       style={styles.rootScreen}
//       imageStyle={styles.backgroundImage}>
//       <SafeAreaView>
//         <View style={styles.sectionContainer}>
//           <Text style={styles.HeadingStyle}> Login</Text>
//           <Text style={styles.HeadingStyle}>
//             Hey, Enter your details to get Sign in to your account
//           </Text>
//           <InputContainer
//             placeholder="Enter Email/Phone Number"
//             keyboardType="email-address"
//             //secureTextEntry={'false'}
//             //="false"
//           />
//           <InputContainer
//             placeholder="Passcode"
//             keyboardType="phone-pad"
//             //secureTextEntry={'true'}
//             //="false"
//           />
//           <Button>{'Sign In'}</Button>
//         </View>
//       </SafeAreaView>
//     </ImageBackground>
//   );
// }

// export default LoginScreen;

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 150,
//     marginHorizontal: 90,
//     padding: 10,
//     alignItems: 'stretch',
//     alignContent: 'center',
//     justifyContent: 'center',
//     borderRadius: 6,
//     alignSelf: 'center',
//     backgroundColor: Colors.white0,
//     // maxWidth: '90%',
//     //maxHeight: '80%',
//     height: '60%',
//     width: '90%',
//     elevation: 4,
//     borderRadius: 8,
//     shadowColor: Colors.black1,
//     shadowOffset: {width: 0, height: 2},
//     shadowRadius: 6,
//     shadowOpacity: 0.25,
//   },
//   rootScreen: {
//     flex: 1,
//   },
//   backgroundImage: {
//     opacity: 0.7,
//   },
//   HeadingStyle: {
//     fontWeight: 'bold',
//     textAlign: 'center',
//     fontSize: 18,
//     marginTop: 10,
//     marginBottom: 7,
//   },
// });

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
          onUpdateValue={updateInputValueHandler.bind(this, 'Wholesaler Code')}
          value={enteredWholesalerCode}
          //keyboardType="email-address"
          //isInvalid={emailIsInvalid}
          placeholder={'Please enter wholesaler code'}
        />
      </View>
      <View>
        <Input
          label="Purchasing Price"
          onUpdateValue={updateInputValueHandler.bind(this, 'Purchasing Price')}
          value={enteredPurchasePrice}
          keyboardType="number-pad"
          //isInvalid={emailIsInvalid}
          placeholder={'Please enter '}
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
          label="Selling Price"
          onUpdateValue={updateInputValueHandler.bind(this, 'Selling Price')}
          value={enteredSellingPrice}
          keyboardType="decimal-pad"
          //isInvalid={emailIsInvalid}
          placeholder={'Please enter selling price'}
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
