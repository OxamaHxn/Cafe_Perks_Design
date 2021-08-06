import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
  Platform,
  FlatList,
} from 'react-native';
import Header from '../../../components/header';
import Feather from 'react-native-vector-icons/Feather';
import styles from './style';
import EditInputFeild from '../../../components/EditTextInput';
import PrimaryButton from '../../../components/PrimaryButton';
import {screenHeight} from '../../../Config/screenRatio';

export default class AddMenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 1, 1, 1, 1],
    };
  }
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
        <FlatList
          data={this.state.data}
          style={{paddingVertical: 10}}
          ListHeaderComponent={
            <View style={styles.flatListHeaderView}>
              <Text style={styles.btnText}>Ajouter un menu </Text>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Ajouter Une Table </Text>
              </TouchableOpacity>
            </View>
          }
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={styles.btnRow}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                  <Image
                    style={styles.image}
                    source={require('../../../../Assets/Cheesepiza.png')}
                  />
                  <View style={styles.textContainer}>
                    <Text> New </Text>
                    <Text>Usama</Text>
                  </View>
                </View>
                <Text>324</Text>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
