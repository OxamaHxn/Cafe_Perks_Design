import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../Config/screenRatio';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default PrimaryButton = ({height, width, onPress, text}) => {
  return (
    <TouchableOpacity
      style={styles.loginButton(height, width)}
      onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.signupText}>{text}</Text>
        <Image
          style={styles.arrow}
          source={require('../../Assets/rightarrow.png')}
        />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    width: wp('46'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  signupText: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: hp('1.7'),
  },
  loginButton: (height = hp('6%'), width = wp('51%')) => ({
    width,
    height,
    margin: 5,
    borderRadius: 42,
    backgroundColor: '#D60000',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 1.5,
    shadowColor: 'red',
    shadowOffset: {width: -4, height: 8},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
  }),
  arrow: {},
});
