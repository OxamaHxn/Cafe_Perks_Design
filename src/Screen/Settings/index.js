import React, { Component } from 'react'
import { SafeAreaView, Text, Image, TouchableOpacity, View } from 'react-native'
import  Header  from '../../components/header'
import { screenHeight } from '../../Config/screenRatio'
import Feather from "react-native-vector-icons/Feather"
import styles from './style'

export default class SettingsScreen extends Component {
    render() {
        return (
            <SafeAreaView 
            style={{flex: 1}}
            >
                <Header
                left={
                    <TouchableOpacity
                    style={{alignItems: 'center'}}
                    >
                        <Image
                        source={require("../../../Assets/backarrow.png")}
                        />
                  </TouchableOpacity>
                }
                mid={
                    <Text style={styles.centerText}>Settings</Text>
                }
                />
                <View style={styles.container}>
                    <Text style={styles.name}>Pizza Boli</Text>
                </View>
            </SafeAreaView>
        )
    }
}
