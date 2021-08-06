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
import {fullHeight, screenHeight} from '../../Config/screenRatio';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
let data = [
  {
    table: 4,
    name: 'Jacque Degen',
    orderTime: '13h 32m',
    image: require('./../../../Assets/orders/person1.png'),
    msgs: [
      {
        time: '14h 34',
        msg: 'I need a fork',
      },
      {
        time: '14h 35',
        msg: 'Please bring some water as well ',
      },
    ],
    complete: true,
  },
  {
    table: 4,
    name: 'Jacque Degen',
    orderTime: '13h 32m',
    image: require('./../../../Assets/orders/person1.png'),
    msgs: [
      {
        time: '14h 34',
        msg: 'I need a fork',
      },
      {
        time: '14h 35',
        msg: 'Please bring some water as well ',
      },
    ],
    complete: false,
  },
  {
    table: 5,
    name: 'Jacque Degen',
    orderTime: '13h 32m',
    image: require('./../../../Assets/orders/person1.png'),
    msgs: [
      {
        time: '14h 34',
        msg: 'I need a fork',
      },
      {
        time: '14h 35',
        msg: 'Please bring some water as well ',
      },
    ],
    complete: true,
  },
  {
    table: 5,
    name: 'Jacque Degen',
    orderTime: '13h 32m',
    image: require('./../../../Assets/orders/person1.png'),
    msgs: [
      {
        time: '14h 34',
        msg: 'I need a fork',
      },
      {
        time: '14h 35',
        msg: 'Please bring some water as well ',
      },
    ],
    complete: false,
  },
  {
    table: 5,
    name: 'Jacque Degen',
    orderTime: '13h 32m',
    image: require('./../../../Assets/orders/person1.png'),
    msgs: [
      {
        time: '14h 34',
        msg: 'I need a fork',
      },
      {
        time: '14h 35',
        msg: 'Please bring some water as well ',
      },
    ],
    complete: true,
  },
];
export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          table: 4,
          name: 'Jacque Degen',
          orderTime: '13h 32m',
          image: require('./../../../Assets/orders/person1.png'),
          msgs: [
            {
              time: '14h 34',
              msg: 'I need a fork',
            },
            {
              time: '14h 35',
              msg: 'Please bring some water as well ',
            },
          ],
          complete: true,
        },
        {
          table: 4,
          name: 'Jacque Degen',
          orderTime: '13h 32m',
          image: require('./../../../Assets/orders/person1.png'),
          msgs: [
            {
              time: '14h 34',
              msg: 'I need a fork',
            },
            {
              time: '14h 35',
              msg: 'Please bring some water as well ',
            },
          ],
          complete: false,
        },
        {
          table: 5,
          name: 'Jacque Degen',
          orderTime: '13h 32m',
          image: require('./../../../Assets/orders/person1.png'),
          msgs: [
            {
              time: '14h 34',
              msg: 'I need a fork',
            },
            {
              time: '14h 35',
              msg: 'Please bring some water as well ',
            },
          ],
          complete: true,
        },
        {
          table: 5,
          name: 'Jacque Degen',
          orderTime: '13h 32m',
          image: require('./../../../Assets/orders/person1.png'),
          msgs: [
            {
              time: '14h 34',
              msg: 'I need a fork',
            },
            {
              time: '14h 35',
              msg: 'Please bring some water as well ',
            },
          ],
          complete: false,
        },
        {
          table: 5,
          name: 'Jacque Degen',
          orderTime: '13h 32m',
          image: require('./../../../Assets/orders/person1.png'),
          msgs: [
            {
              time: '14h 34',
              msg: 'I need a fork',
            },
            {
              time: '14h 35',
              msg: 'Please bring some water as well ',
            },
          ],
          complete: true,
        },
      ],
    };
  }
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
          data={this.state.data.filter(item => item.complete === false)}
          style={{height: fullHeight / 3}}
          keyExtractor={(_, id) => id.toString()}
          renderItem={({item, index}) => {
            return (
              <View key={'card' + index} style={styles.card}>
                <View style={styles.textContainer}>
                  <View>
                    <Text style={styles.tableText}>
                      Table {item.table}{' '}
                      <Text style={styles.textName}>- {item.name}</Text>
                    </Text>
                    {item.msgs.map(msg => (
                      <Text style={styles.msgText}>
                        {msg.time} : {msg.msg}
                      </Text>
                    ))}
                  </View>
                  <View style={styles.msgImageView}>
                    <Image
                      source={require('../../../Assets/msgs.png')}
                      style={styles.msgImage}
                    />
                    <View style={styles.badge}>
                      <Text style={styles.badgeNumber}>10</Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      data: this.state.data.map((val, id) => {
                        if (id === index) val.complete = true;
                        console.log(val.complete, id, index);
                        return val;
                      }),
                    });
                  }}
                  style={styles.btn}>
                  <Text style={styles.btnText('white')}>Mark as complete</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <FlatList
          data={this.state.data.filter(item => item.complete === true)}
          style={{flex: 1}}
          keyExtractor={(_, id) => id.toString()}
          renderItem={({item, index}) => {
            return (
              <View key={+index} style={styles.completedCard}>
                <TouchableOpacity style={styles.completeBtn}>
                  <Text style={styles.btnText('black')}>
                    <Text style={styles.tableText}>
                      Table {item.table}{' '}
                      <Text style={styles.textName}>- {item.name}</Text>
                    </Text>
                  </Text>
                </TouchableOpacity>
                <View style={styles.msgImageView}>
                  <Image
                    source={require('../../../Assets/msgComplete.png')}
                    style={styles.msgImage}
                  />
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
