import React, {Component} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  TouchableHighlight,
} from 'react-native';
import {
  fullHeight,
  screenHeight,
  fullWidth,
  screenWidth,
} from './src/Components/screenRatio';
import react from 'react';
import Header from './src/Components/header';
import {alignItems, justifyContent} from 'styled-system';
class Home extends react.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          left={
            <View style={{height: 24, width: 13}}>
              <Image
                source={require('./Image/backarrow.png')}
                style={{
                  width: '100%',
                  height:
                    Platform.OS === 'ios'
                      ? 24 * screenHeight
                      : 24 * screenHeight,
                }}
              />
            </View>
          }
          right={
            <View style={{height: 45, width: 45}}>
              <Image
                source={require('./Image/carticon.png')}
                style={{
                  width:
                    Platform.OS === 'ios' ? 46 * screenWidth : 46 * screenWidth,
                  height:
                    Platform.OS === 'ios'
                      ? 35 * screenHeight
                      : 35 * screenHeight,
                }}
              />
            </View>
          }
        />
        <Image
          source={require('./Image/rotiimg.png')}
          style={styles.imagestyle}
        />
        <View style={styles.borderview}>
          <View style={styles.titleView}>
            <View
              style={{
                paddingLeft: 14,
              }}>
              <Text style={styles.redtext}>Roti Bakar Kaepci</Text>
            </View>
            <View style={{flexDirection: 'column', padding: 5}}>
              <Text style={styles.bolitxt}>Pizza Boli</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  paddingTop: 7,
                }}>
                <Image
                  style={styles.imgleft}
                  source={require('./Image/locationicontwo.png')}
                />
                <Text
                  style={{
                    color: '#D60000',
                    fontSize: 10,
                    marginLeft: 8,
                  }}>
                  500m
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 350 * screenWidth,
              // minHeight: 239 * screenHeight,
              // margin: 1,
              backgroundColor: '#FFFF',
              alignSelf: 'center',
              shadowColor: 'grey',
              elevation: 6,
              shadowRadius: 10,
              shadowOffset: {width: 20, height: 2},
              shadowOpacity: 0.1,
            }}>
            <Text style={styles.boldtxt}>45€</Text>
            <View
              style={{
                width: 286 * screenWidth,
                alignSelf: 'center',
                paddingVertical: Platform.OS === 'ios' ? 20 : 10 * screenHeight,
              }}>
              <Text style={styles.centertxt}>
                Les légumes ou la viande sont mis à braiser avec de l’eau, du
                bouillon et du yaourt, de la crème ou du lait de coco ainsi que,
                parfois, de pâte de noix et de graines.
              </Text>
            </View>
            <View style={{marginRight: -8}}>
              <Text style={styles.endtxt}>View the full menu</Text>
            </View>
          </View>
        </View>
        {/* <View style={styles.addminus}></View> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingHorizontal: 148,
            // marginTop: Platform.OS === 'ios' ? 35 : 30,
            marginTop: Platform.OS === 'ios' ? 35 : 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: 26,
              height: 26,
              backgroundColor: '#FECF00',
              alignItems: 'center',
              borderRadius: 8,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20}}>-</Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              paddingLeft: 17,
              paddingRight: 10,
            }}>
            1
          </Text>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: 26,
              height: 26,
              backgroundColor: '#FECF00',
              alignItems: 'center',
              borderRadius: 8,
              justifyContent: 'center',
              marginLeft: 10,
            }}>
            <Text style={{fontSize: 20, fontWeight: '300'}}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.login}>
          <TouchableOpacity
            style={styles.loginbt}
            // onPress={() => {
            //   this.props.navigation.navigate('orderDetail', {});
            // }}
          >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.loginbtntext}>ADD TO CART</Text>
              <Image
                style={styles.arrow}
                source={require('./Image/rightarrow.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#307ECC',
    backgroundColor: '#ffff',
  },
  imagestyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 375 * screenWidth,
    height: 275 * screenHeight,
  },
  borderview: {
    width: 350 * screenWidth,
    // minHeight: 239 * screenHeight,
    margin: 1,
    backgroundColor: '#FFFF',
    alignSelf: 'center',
    marginTop: 18,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  itemdetail: {
    margin: 15,
    flexDirection: 'row',
  },
  redtext: {
    fontWeight: 'bold',
    fontSize: 19,
    color: '#D60000',
  },
  bolitxt: {
    color: '#D60000',
    fontWeight: 'bold',
    fontSize: 11,
  },
  lastview: {
    color: '#D60000',
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginHorizontal: 110,
    // flexDirection: 'column',
  },
  imgleft: {
    // marginLeft: 3,
    height: 14 * screenHeight,
    width: 9 * screenWidth,
  },
  minus: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FECF00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redtextwo: {
    fontWeight: '600',
    fontSize: 12,
    color: '#D60000',
    // justifyContent: 'flex-start',
  },
  boldtxt: {
    fontSize: 19,
    fontWeight: 'bold',
    paddingLeft: 14,
    bottom: 12,
  },
  centertxt: {
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontWeight: '400',
    textAlign: 'center',
  },
  endtxt: {
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
    color: '#D60000',
    fontSize: 12,
    fontWeight: '600',
    padding: Platform.OS === 'ios' ? 15 : 15,
    paddingTop: 35,
  },
  addminus: {
    flexDirection: 'row',
  },
  login: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 200,
    height: 53,
    backgroundColor: '#D60000',
    borderRadius: 42,
    // borderBottomWidth: 5,
    borderTopColor: 'white',
    shadowColor: '#D60000',
    shadowOpacity: 0.7,
    elevation: 6,
    // bordr
    shadowRadius: 10,
    shadowOffset: {width: 0.5, height: 1},
  },
  loginbt: {
    width: 190,
    height: 45,
    borderRadius: 42,
    // back: '#D60000',
    backgroundColor: '#D60000',
    // alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffff',
    borderWidth: 1.5,
  },
  arrow: {
    // justifyContent: 'flex-end',
    fontWeight: '600',
    marginLeft: 15,
    // marginRight: 5,
  },
  loginbtntext: {
    color: '#ffff',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center',
    marginLeft: 20,
    fontFamily: 'Arial',
  },
});