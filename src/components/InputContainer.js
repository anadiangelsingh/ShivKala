import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

const InputContainer = ({value, placeholder, onChangeText}) => {
  const {numberInput} = styles;

  return (
    <TextInput
      style={styles.numberInput}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      placeholderTextColor="#aba7a7"
      keyboardType="email-address"
    />
  );
};

export default InputContainer;

const styles = StyleSheet.create({
  numberInput: {
    height: 35,
    width: 350,
    fontSize: 15,
    borderWidth: 0.7,
    marginVertical: 8,
    borderColor: Colors.GreyColor,
    color: Colors.black1,
    textAlign: 'left',
    borderRadius: 10,
    paddingLeft: 7,
  },
});
