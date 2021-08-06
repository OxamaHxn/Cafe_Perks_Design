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
import Ionicons from 'react-native-vector-icons/Ionicons';
let data = [
  {
    completed: false,
    name: 'Gabi Per',
    orderTime: '13h 32m',
    image: require('./../../../Assets/orders/person1.png'),
  },
  {
    completed: false,
    name: 'Gabi Per',
    orderTime: '13h 32m',
    image: require('./../../../Assets/orders/person2.png'),
  },
  {
    completed: true,
    name: 'Gabi Per',
    orderTime: '13h 32m',
    image: require('./../../../Assets/orders/person3.png'),
  },
  {
    completed: false,
    name: 'Gabi Per',
    orderTime: '13h 32m',
    image: require('./../../../Assets/orders/person4.png'),
  },
];
export default class Today extends Component {
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
          mid={<Text style={styles.centerText}>Tuesday 21st, July 2020</Text>}
        />

        <FlatList
          data={data.filter(item => item.completed === false)}
          style={{flex: 1}}
          renderItem={({item, id}) => {
            return (
              <View key={'card' + id} style={styles.card}>
                <View style={styles.cardRow}>
                  <View style={styles.cardFirstCol}>
                    <View
                      style={{
                        borderRightWidth: 0.5,
                        borderColor: 'rgba(0,0,0,0.3)',
                        alignItems: 'center',
                        width: '100%',
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
                      <Text style={styles.btnText('white', false)}>Table</Text>
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
                  </View>
                  <View style={styles.cardFirstCol}>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                      }}>
                      <View style={styles.circle(item.completed)}>
                        {item.completed ? (
                          <View style={styles.checkMark}>
                            <Image
                              style={styles.image}
                              source={require('../../../Assets/checkMark.png')}
                            />
                          </View>
                        ) : null}
                      </View>
                      <Text style={styles.text}>
                        {item.completed ? 'Completed' : 'Not complete'}
                      </Text>
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
              </View>
            );
          }}
        />
        <FlatList
          data={data.filter(item => item.completed === true)}
          style={{flex: 1}}
          renderItem={({item, id}) => {
            return (
              <View key={'card' + id} style={styles.card}>
                <View style={styles.cardRow}>
                  <View style={styles.cardFirstCol}>
                    <View
                      style={{
                        borderRightWidth: 0.5,
                        borderColor: 'rgba(0,0,0,0.3)',
                        alignItems: 'center',
                        width: '100%',
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
                      <Text style={styles.btnText('white', false)}>Table</Text>
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
                  </View>
                  <View style={styles.cardFirstCol}>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                      }}>
                      <View style={styles.circle(item.completed)}>
                        {item.completed ? (
                          <View style={styles.checkMark}>
                            <Image
                              style={styles.image}
                              source={require('../../../Assets/checkMark.png')}
                            />
                          </View>
                        ) : null}
                      </View>
                      <Text style={styles.text}>
                        {item.completed ? 'Completed' : 'Not complete'}
                      </Text>
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
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
