import React, { Component } from 'react'
import {
    View,
    Image,
    Text,
    TouchableOpacity,
  } from 'react-native';
import styles from "./style"
export default class WelcomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.uppperText}>Welcome</Text>
                <View style={styles.image}>
                    <Image 
                    source={require('../../../Assets/newPic.png')}
                    />
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity
                    style={styles.registerButton}
                    >
                        <Text style={styles.regText}>REGISTE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.loginButton}
                    onPress={()=>this.props.navigation.navigate('BottomNavigation')}
                    >
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
