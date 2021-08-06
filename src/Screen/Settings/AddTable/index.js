import React, {Component} from 'react';
import {SafeAreaView, Text, Image, TouchableOpacity, View} from 'react-native';
import Header from '../../../components/header';
import {screenHeight} from '../../Config/screenRatio';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';
import EditInputFeild from '../../../components/EditTextInput';
import PrimaryButton from '../../../components/PrimaryButton';

export default class AddTable extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header
          left={
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Image source={require('../../../../Assets/backarrow.png')} />
            </TouchableOpacity>
          }
          mid={<Text style={styles.centerText}>AJOUTER UNE TABLE</Text>}
        />
        <View style={styles.container}>
          <View style={{width: '85%'}}>
            <Text style={styles.text}>Numèro de table*</Text>
            <EditInputFeild
              right={
                <Image source={require('../../../../Assets/editicon.png')} />
              }
            />
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton text="SAUVEGARDER" />
          </View>
          <View style={styles.qrContainer}>
            <View style={styles.qrCode}>
              <Image
                style={styles.image}
                source={require('../../../../Assets/qrcode.png')}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
