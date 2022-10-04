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
    fontSize: 15,
    borderWidth: 0.7,
    borderColor: Colors.GreyColor,
    margin: 10,
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
});
