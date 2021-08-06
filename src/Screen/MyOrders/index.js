import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  Platform,
} from 'react-native';
import Header from '../../components/header';
import {screenHeight} from '../../Config/screenRatio';
import styles from './style';
let data = [
  {
    name: 'Gabi Per',
    orderTime: '13h 32m',
    image: require('./../../../Assets/orders/person1.png'),
  },
  {
    name: 'Gabi Per',
    orderTime: '13h 32m',
    image: require('./../../../Assets/orders/person2.png'),
  },
  {
    name: 'Gabi Per',
    orderTime: '13h 32m',
    image: require('./../../../Assets/orders/person3.png'),
  },
  {
    name: 'Gabi Per',
    orderTime: '13h 32m',
    image: require('./../../../Assets/orders/person4.png'),
  },
];
export default class OrdersScreen extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          paddingBottom: Platform.OS == 'android' ? 35 * screenHeight : 0,
          backgroundColor: 'white',
        }}>
        <Header
          left={
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Image source={require('../../../Assets/backarrow.png')} />
            </TouchableOpacity>
          }
          mid={<Text style={styles.centerText}>Past orders</Text>}
        />

        <FlatList
          data={data}
          style={{flex: 1}}
          renderItem={({item, id}) => {
            return (
              <View key={'card' + id} style={styles.card}>
                <View style={styles.cardRow}>
                  <View style={styles.cardFirstCol}>
                    <View
                      style={{
                        borderRightWidth: 0.5,
                        borderColor: '#070606',
                        width: '100%',
                        alignItems: 'center',
                        height: '100%',
                      }}>
                      <View style={styles.imageView}>
                        <Image style={styles.image} source={item.image} />
                      </View>
                      <Text>{item.name}</Text>
                      <Text>{item.orderTime}</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.tableBtn}
                      onPress={() => console.log('pressed')}>
                      <Text style={styles.btnText('white', false)}>Detail</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.cardSecondCol}>
                    <View
                      style={{
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                      }}>
                      <Text>
                        1x Fish and Chips 2x Salmon Dish 3x Coca 4x Ice cream
                        Pistachio 2x Sprite
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={styles.tableTextBtn}
                      onPress={() => console.log('pressed')}>
                      <Text style={styles.btnText('#D60000', true)}>
                        Detail
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
