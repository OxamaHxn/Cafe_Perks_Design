import React from 'react'
import {StyleSheet, TextInput} from 'react-native'
import { screenHeight } from '../Config/screenRatio'
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
        width: '70%',
        height: 38,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginVertical: 13 * screenHeight,
        fontSize: 15,
        backgroundColor: '#ffff',
        borderRadius: 10,
      },
})
