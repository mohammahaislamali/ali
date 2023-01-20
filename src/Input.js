import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({input, placeholder = 'enter the name', onchange, value}) => {
  return (
    <View>
      <TextInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onchange}>
        {input}
      </TextInput>
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'red',
    width: '90%',
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});
