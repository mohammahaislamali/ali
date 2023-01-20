import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import { FULL_WIDTH } from '../../constants/layout';

const Input = ({
  placeholder = 'Search Here',
  onChangeText = e => {},
  ref,
  placeholderTextColor='#000',
  error,
  style,
  secureTextEntry,
  value,
  keyboardType
}) => {
  return (
    <View>
      <TextInput
        style={{
          fontSize: 17,
          padding:15,
          ...style,
        }}
        placeholder={placeholder}
        onChangeText={text => onChangeText(text)}
        ref={ref}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        value={value}
        keyboardType = {keyboardType}
        
      />
      <Text style={{color:"red",textAlign:"right",marginRight:10,fontWeight:"bold"}}>{error}</Text>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  Input: {
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 17,
    // width:'100%'
  },
});
