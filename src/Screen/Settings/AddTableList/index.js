import React, {Component} from 'react';
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../../components/header';
import {screenHeight} from '../../../Config/screenRatio';
import styles from './style';

export default class AddTableList extends Component {
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
                <View>
                  <Text style={styles.qrText('bold')}> QR {index}</Text>
                  <Image
                    style={styles.image}
                    source={require('../../../../Assets/qrcode.png')}
                  />
                  <Text style={styles.qrText('normal')}>
                    {' '}
                    Table : {index * 89}{' '}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity style={styles.editBtn}>
                    <Text>Editer</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.mailBtn}>
                    <Text>Send Mail</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.pdfBtn}>
                    <Text>PDF</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
