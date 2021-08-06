import React, { Component } from 'react'
import { SafeAreaView, Text, Image, TouchableOpacity, View } from 'react-native'
import  Header  from '../../components/header'
import { screenHeight, screenWidth } from '../../Config/screenRatio'
import Feather from "react-native-vector-icons/Feather"
import styles from './style'
import PrimaryButton from '../../components/PrimaryButton'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
                    <Image
            style={styles.resturantimg}
            source={require('../../../Assets/pizabolosetting.png')}
          />
          <View style={styles.loginOuterView}>
          <PrimaryButton
          text={"EDIT PROFILE"}
          />
          </View>
          <View style={styles.loginOuterView}>
          <PrimaryButton
          text={"EDIT MENU"}
          />
          </View>
          <View style={styles.loginOuterView}>
          <PrimaryButton
          text={"TABLE MANAGMENT"}
          />
          </View>
          <View style={styles.loginOuterView}>
          <PrimaryButton
          text={"LOGOUT"}
          />
          </View>
                </View>
            </SafeAreaView>
        )
    }
}
