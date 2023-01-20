import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Bottun = ({btn = 'click me!', onPress, style}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={[styles.touch, style]}>
        <Text style={styles.txt}>{btn}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bottun;

const styles = StyleSheet.create({
  touch: {
    backgroundColor: 'blue',
    width: 100,
    height: 50,
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 20,
    alignSelf: 'center',
  },
  txt: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginVertical: 7,
  },
});
