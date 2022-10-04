import {useState} from 'react';
import {Alert, StyleSheet, View, ImageBackground, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import FlatButton from '../ui/FlatButton';
import AuthForm from './AuthForm';
import {Colors} from '../../constants/styles';

function AuthContent({isLogin, onAuthenticate}) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.navigate('Signup');
    } else {
      navigation.navigate('Login');
    }
  }

  function submitHandler(credentials) {
    let {email, confirmEmail, password, confirmPassword} = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({email, password});
  }

  return (
    <ImageBackground
      source={require('../../assets/images/marissa-grootes-flRm0z3MEoA-unsplash.jpg')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}>
      <View style={styles.authContent}>
        <Text style={styles.HeadingStyle}> Login</Text>
        <Text style={styles.HeadingStyle}>
          Hey, Enter your details to get Sign in to your account
        </Text>
        <AuthForm
          isLogin={isLogin}
          onSubmit={submitHandler}
          credentialsInvalid={credentialsInvalid}
        />
        <View style={styles.buttons}>
          {/* <FlatButton onPress={switchAuthModeHandler}>
            {isLogin ? 'Create a new user' : 'Log in instead'}
          </FlatButton> */}
        </View>
      </View>
    </ImageBackground>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 160,
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 16,
    backgroundColor: Colors.white0,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttons: {
    marginTop: 8,
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.7,
  },
  HeadingStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 7,
  },
});
