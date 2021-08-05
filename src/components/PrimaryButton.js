import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'

export default PrimaryButton = ({style,onPress, text}) => {
    return (
        <TouchableOpacity
                style={styles.loginButton}
                onPress={onPress}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.signupText}>{text}</Text>
                  <Image
                    style={styles.arrow}
                    source={require('../../Assets/rightarrow.png')}
                  />
                </View>
              </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    signupText: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 17,
        alignSelf: 'center',
        marginLeft: 20,
      },
      loginButton: {
        width: 142,
        height: 42,
        borderRadius: 42,
        backgroundColor: '#D60000',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ffff',
        borderWidth: 1.5,
      },
    arrow: {
        marginLeft: 7,
      },
})