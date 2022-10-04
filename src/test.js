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
