import React from 'react';
import {StyleSheet, Text, ImageBackground, View} from 'react-native';

import InputContainer from '../components/InputContainer';
import Colors from '../constants/colors';

function LoginScreen() {
  return (
    <ImageBackground
      source={require('../assets/images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}>
      <View style={styles.sectionContainer}>
        <Text style={styles.HeadingStyle}> Login</Text>
        <Text>Hey, Enter your details to get Sign in to your account</Text>
        <InputContainer placeholder="Enter Email/Phone Number" />
        <InputContainer placeholder="Passcode" />
      </View>
    </ImageBackground>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: Colors.white0,
    marginTop: 50,
    marginBottom: 50,
    marginHorizontal: 200,
    // padding: 16,
    //height: 250,
    //width: 500,
    elevation: 4,
    borderRadius: 10,
    shadowColor: Colors.black1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.7,
  },
  HeadingStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 7,
  },
});
