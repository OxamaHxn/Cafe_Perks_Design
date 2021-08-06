import React from 'react';
import {View, Text, StyleSheet, StatusBar, TextInput} from 'react-native';
import {screenHeight, screenWidth} from '../Config/screenRatio';
const EditInputFeild = ({
  right,
  placeholder,
  value,
  editable,
  numberOfLines,
}) => {
  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={value}
          placeholder={placeholder}
          editable={editable}
          keyboardType="email-address"
          style={styles.emailinput}
          placeholderTextColor="#9B9B9D"
          numberOfLines={numberOfLines && 1}
        />
        <View style={styles.right}>{right && right}</View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  emailinput: {
    width: '100%',
    height: 44 * screenHeight,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 13 * screenHeight,
    fontSize: 15,
    backgroundColor: '#ffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: -4, height: 8},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
    color: 'black',
  },
  container: {
    minHeight: 20 * screenHeight,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {position: 'absolute', right: 15 * screenWidth, elevation: 11},
});
export default EditInputFeild;
