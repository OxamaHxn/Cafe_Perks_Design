import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import Header from '../../../components/header';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';
import EditInputFeild from '../../../components/EditTextInput';
import PrimaryButton from '../../../components/PrimaryButton';
import {screenHeight} from '../../../Config/screenRatio';
import {Picker} from '@react-native-picker/picker';

export default class AddMenu extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingBottom: Platform.OS == 'android' ? 35 * screenHeight : 0,
        }}>
        <Header
          left={
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Image source={require('../../../../Assets/backarrow.png')} />
            </TouchableOpacity>
          }
          mid={<Text style={styles.centerText}>Ajouter un menu</Text>}
        />
        <ScrollView>
          <View style={styles.container}>
            <TouchableOpacity style={styles.profileContainer}>
              <Image
                style={styles.profileImage}
                source={require('../../../../Assets/plusIcon.png')}
              />
            </TouchableOpacity>
            <View style={{width: '70%'}}>
              <Text style={styles.text}>Numèro de table*</Text>
              <EditInputFeild
                right={
                  <Image source={require('../../../../Assets/editicon.png')} />
                }
              />
            </View>
            <View style={{width: '70%'}}>
              <Text style={styles.text}>PLATS</Text>

              <EditInputFeild
                right={
                  <Image
                    source={require('../../../../Assets/arrow-down.png')}
                  />
                }
              />
            </View>
            <View style={{width: '70%'}}>
              <Text style={styles.text}>Prix* </Text>
              <EditInputFeild
                right={
                  <Image source={require('../../../../Assets/editicon.png')} />
                }
              />
            </View>
            <View style={{width: '70%'}}>
              <Text style={styles.text}>Article spècial</Text>
              <EditInputFeild
                right={
                  <Image
                    source={require('../../../../Assets/arrow-down.png')}
                  />
                }
              />
            </View>
            <View style={{width: '70%'}}>
              <Text style={styles.text}>La description</Text>
              <EditInputFeild
                editable={false}
                value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit"
              />
            </View>
          </View>
          <View style={styles.btnContainer}>
            <PrimaryButton text="SAUVEGARDER" />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
