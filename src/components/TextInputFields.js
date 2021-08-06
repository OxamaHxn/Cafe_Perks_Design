import React from 'react'
import {StyleSheet, TextInput} from 'react-native'
import { screenHeight } from '../Config/screenRatio'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default TextInputFields = ({placeholder}) => {
    return (
        <TextInput
              placeholder={placeholder}
              keyboardType="email-address"
              style={styles.emailinput}
              placeholderTextColor="#9B9B9D"
            />
    )
}
const styles = StyleSheet.create({
    emailinput: {
        width: wp('70'),
        height: hp('4.7'),
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginVertical: 13 * screenHeight,
        fontSize: hp('1.7'),
        backgroundColor: '#ffff',
        borderRadius: 10,
      },
})
