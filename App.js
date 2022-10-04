import React from 'react';
import {View, StyleSheet} from 'react-native';

import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  return (
    <View style={styles.rootScreen}>
      <LoginScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
