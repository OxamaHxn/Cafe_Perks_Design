import React, { Component } from 'react'
import {
    ActivityIndicator,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    Text,
  } from 'react-native';

import styles from "./style"
export default class Splash extends Component {
    componentDidMount = async () => {
        setTimeout(async () => {
            await this.props.navigation.navigate('WelcomeScreen');
        }, 2000);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageWrapper}>
                    <ImageBackground
                    style={styles.image}
                    source={require('../../../Assets/splashimg.png')}
                    >
                        <Image 
                        source={require('../../../Assets/aTable!.png')}
                        style={styles.splashtext}
                        />
                    </ImageBackground>
                </View>
                <Text style={styles.lasttext}>LE SERVICE A TABLE 2.0</Text>
            </View>
        )
    }
}
