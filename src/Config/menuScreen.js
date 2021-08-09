import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import react from 'react';
import Header from '../components/header';
class Menu extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.logintext}>LOGIN</Text> */}
        <View style={styles.headerView}>
          <Header
            left={
              <View
                style={{
                  height: 45,
                  width: 45,
                  paddingLeft: 10,
                  alignSelf: 'flex-start',
                }}>
                <Image
                  source={require('../../Assets/profileheader.png')}
                  style={{
                    width: 51,
                    height: 51,
                    resizeMode: 'contain',
                    borderRadius: 10,
                  }}
                />
              </View>
            }
            mid={
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  marginTop: 10,
                  marginRight: 40,
                  // paddingVertical: 30,
                }}>
                <Text style={styles.welcomtxt}>Welcome, Jeremy! </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    // margin: 10,m
                    marginTop: 8,
                  }}>
                  <Image source={require('../../Assets/locationicon.png')} />
                  <Text style={{color: '#0B0B0B', fontSize: 11, marginLeft: 5}}>
                    New York City
                  </Text>
                </View>
              </View>
            }
            right={
              <View style={{height: 37, width: 39}}>
                <Image
                  source={require('../../Assets/carticon.png')}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                    borderRadius: 10,
                  }}
                />
              </View>
            }
          />
        </View>
        <View style={styles.inputsearch}>
          <View style={styles.inputsearchtwo}>
            <View style={{justifyContent: 'center'}}>
              <TextInput
                placeholder="Type a dish name"
                // keyboardType="email-address"
                style={styles.secondinput}
                placeholderTextColor="#9B9B9D"
              />
              <Image
                style={styles.searchicon}
                source={require('../../Assets/searchIcon.png')}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('FilterScreen');
              }}>
              <Image
                style={styles.filtericon}
                source={require('../../Assets/filterIcon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.tags}>
          <TouchableOpacity style={styles.btnTag}>
            <Text style={styles.tagtext}>Pizza Boli</Text>
            <Image
              style={styles.cross}
              source={require('../../Assets/crossicon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondbtnTag}>
            <Text style={styles.tagtext}>Pizza Boli</Text>
            <Image
              style={styles.cross}
              source={require('../../Assets/crossicon.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.redHeader}>
          <TouchableOpacity style={styles.Headerbutton}>
            <Text style={{color: '#D60000', fontWeight: '500', fontSize: 11}}>
              STARTER
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.twoHeaderbutton} onPress={() => this.props.navigation.navigate('Cart')}>
            <Text style={{color: 'black', fontWeight: '500', fontSize: 11}}>
              DISHES
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Headerbutton}>
            <Text style={{color: '#D60000', fontWeight: '500', fontSize: 11}}>
              DESSERTS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Headerbutton}>
            <Text style={{color: '#D60000', fontWeight: '500', fontSize: 11}}>
              DRINKS
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={[
            {
              id: '1',
              title: 'Cheese Piza            ',
              img: require('../../Assets/Cheesepiza.png'),
            },
            {
              id: '2',
              title: 'BBQ Piza               ',
              img: require('../../Assets/BBQpiza.png'),
            },
            {
              id: '3',
              title: 'Hot Cheese Pizza',
              img: require('../../Assets/CheesePizza.png'),
            },
            {
              id: '3',
              title: 'Hot Cheese Pizza',
              img: require('../../Assets/CheesePizza.png'),
            },
          ]}
          renderItem={({item}) => (
            <View style={styles.secondheaderView}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('AddCart');
                }}>
                <Header
                  left={
                    <View
                      style={{
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowOpacity: 0.8,
                        elevation: 6,
                        shadowRadius: 15,
                        shadowOffset: {width: 1, height: 13},
                      }}>
                      <View
                        style={{
                          height: 90,
                          width: 90,
                          backgroundColor: '#FFFF',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginBottom: 10,
                          borderRadius: 24,
                        }}>
                        <Image
                          source={item.img}
                          style={{
                            width: 80,
                            height: 80,
                            resizeMode: 'contain',
                            borderRadius: 10,
                          }}
                        />
                      </View>
                    </View>
                  }
                  mid={
                    <View
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        // marginVertical: 30,
                        // margin: 10,
                        marginHorizontal: 10,
                      }}>
                      <Text style={styles.blacktxt}>{item.title}</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <Image source={require('../../Assets/Iconboli.png')} />
                        <Text
                          style={{
                            color: '#0B0B0B',
                            fontSize: 14,
                            marginLeft: 5,
                          }}>
                          Pizza Boli
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        <Image
                          source={require('../../Assets/locationicon.png')}
                        />
                        <Text
                          style={{
                            color: '#0B0B0B',
                            fontSize: 14,
                            marginLeft: 5,
                          }}>
                          500m
                        </Text>
                      </View>
                    </View>
                  }
                  right={
                    <View
                      style={{height: 45, width: 45, justifyContent: 'center'}}>
                      <Text style={styles.boldtxt}>12€</Text>
                    </View>
                  }
                />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#307ecc',
    backgroundColor: '#ffff',
  },
  headerView: {
    // borderBottomColor: '#0B0B0B',
    shadowColor: 'grey',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: 'white',
  },
  secondheaderView: {
    // borderBottomColor: '#0B0B0B',
    shadowColor: '#000',
    // borderColor: '#D60000',
    // borderWidth: 2,

    justifyContent: 'center',
    backgroundColor: 'white',
  },
  inputsearchtwo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  welcomtxt: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#D60000',
  },
  blacktxt: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000000',
  },
  boldtxt: {
    fontWeight: '600',
  },
  underslider: {
    marginTop: Platform.OS === 'ios' ? 25 : 38,

    flexDirection: 'row',
    margin: 10,
  },
  carticon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  inputsearch: {
    flexDirection: 'row',
    marginTop: 14,
    justifyContent: 'center',
    // alignItems: 'center',
    marginHorizontal: 10,
  },
  secondinput: {
    width: 263,
    height: 47,
    padding: 15,
    fontSize: 15,
    // placeholderTextColor: '#9B9B9D',
    borderRadius: 45,
    borderColor: 'black',
    borderWidth: 1,
    opacity: 0.5,
    backgroundColor: '#ffff',
    // borderRadius: 6,
    paddingLeft: 45,
    textAlign: 'center',
  },
  searchicon: {
    position: 'absolute',
    left: 15,
    width: 17,
    height: 17,
  },
  filtericon: {
    alignItems: 'flex-end',
    // alignSelf: 'flex-end',
    marginLeft: 30,
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 9,
    margin: 15,
  },
  btnTag: {
    backgroundColor: '#FECF00',
    width: 67,
    height: 18,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  secondbtnTag: {
    backgroundColor: '#FECF00',
    width: 67,
    height: 18,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    left: 15,
  },
  tagtext: {
    fontSize: 8,
  },
  cross: {
    width: 5,
    height: 5,
    margin: 5,
    fontWeight: 'bold',
    borderColor: 'black',
  },
  redHeader: {
    width: '100%',
    height: 53,
    backgroundColor: '#D60000',
    marginBottom: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    // margin: 10,
  },
  Headerbutton: {
    width: 73,
    height: 39,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 10,
    margin: 5,
  },

  twoHeaderbutton: {
    width: 73,
    height: 39,
    backgroundColor: '#FECF00',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 10,
    margin: 5,
  },

  forgotxt: {
    alignSelf: 'center',
    margin: 15,
  },

  or: {
    alignSelf: 'center',
    margin: 15,
    fontWeight: '800',
    fontSize: 18,
  },
  buttonSelected: {
    backgroundColor: 'red',
  },
  buttons: {
    // flexDirection: 'column',
    marginVertical: 10,
    alignItems: 'center',
    // marginTop: 100,
    margin: 20,
    justifyContent: 'center',
  },
  firstbutton: {
    width: '95%',
    height: 50,
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#3B5999',
    justifyContent: 'center',
    alignItems: 'center',
    // marginRight: 10,
  },
});
