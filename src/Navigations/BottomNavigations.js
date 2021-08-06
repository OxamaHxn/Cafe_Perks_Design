import React, {Component} from 'react';
import {View, Image, Text, Platform, SafeAreaView} from 'react-native';
import HomeScreen from '../Screen/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MenuScreen from '../Screen/MenuScreen';
import ScannerScreen from '../Screen/ScanScreen';
import OrdersScreen from '../Screen/MyOrders';
import SettingsScreen from '../Screen/Settings';
import {screenHeight, screenWidth} from '../Config/screenRatio';
import Today from '../Screen/Today';
import Messages from '../Screen/Messages';
import AddTable from '../Screen/Settings/AddTable';
import AddMenu from '../Screen/Settings/AddMenu';
import AddMenuList from '../Screen/Settings/AddMenuList';
import AddTableList from '../Screen/Settings/AddTableList';

const Tab = createBottomTabNavigator();
const tabs = [
  {
    name: 'Today',
    component: Today,
    icon: require('../../Assets/today.png'),
  },
  {
    name: 'Messages',
    component: Messages,

    icon: require('../../Assets/messages.png'),
  },

  {
    name: 'My Orders',
    component: OrdersScreen,

    icon: require('../../Assets/ordricon.png'),
  },
  {
    name: 'Settings',
    component: AddTableList,
    icon: require('../../Assets/settingsicon.png'),
  },
];
export default class BottomNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Settings"
        tabBarOptions={{
          showLabel: false,
          tabStyle: {
            backgroundColor: '#D60000',
            height: 80,
            bottom: Platform.OS === 'ios' ? 0 : 30,
            justifyContent: 'flex-start',
          },
          tabBarItemStyle: {
            backgroundColor: 'blue',
          },
        }}>
        {tabs.map(tab => (
          <Tab.Screen
            name={tab.name}
            component={tab.component}
            options={{
              headerShown: false,
              tabBarIcon: ({color, size, focused}) => (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    // backgroundColor: focused ? 'white' : '#D60000',
                    borderRadius: 60,
                    height: 70 * screenHeight,
                    width: 70 * screenHeight,
                    backgroundColor: focused ? 'white' : '#D60000',
                  }}>
                  <Image
                    style={{
                      tintColor: focused ? '#D60000' : '#FECF00',
                      height: 30 * screenHeight,
                      width: 30 * screenWidth,
                      resizeMode: 'contain',
                    }}
                    source={tab.icon}
                  />
                  <Text
                    style={{
                      fontSize: 11,
                      color: focused ? '#D60000' : '#FECF00',
                    }}>
                    {tab.name}
                  </Text>
                </View>
              ),
            }}
          />
        ))}
        {/* <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerShown: false,
                  tabBarIcon: ({color, size, focused}) => (
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: focused ? 'white' : '#D60000',
                        borderRadius: Platform.OS === 'ios' ? 70  : 60 ,
                        height: Platform.OS === 'ios' ? 55 * screenHeight : 54 * screenHeight,
                        width: Platform.OS === 'ios' ? 55 * screenWidth : 54 * screenWidth,
                      }}>
                      <Image
                        style={{
                          tintColor: focused ? '#D60000' : '#FECF00',
                        }}
                        source={require('../../Assets/homeicon.png')}
                      />
                      <Text style={{backgroundColor: focused ? 'white' : '#D60000', color: focused ? '#D60000' : '#FECF00'}}>Home</Text>
                    </View>
                  ),
                }}
                />
                <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarLabel: 'Menu',
            headerShown: false,
            tabBarIcon: ({color, size, focused}) => (
              <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: focused ? 'white' : '#D60000',
                    borderRadius: Platform.OS === 'ios' ? 70  : 60 ,
                    height: Platform.OS === 'ios' ? 55 * screenHeight : 54 * screenHeight,
                    width: Platform.OS === 'ios' ? 55 * screenWidth : 54 * screenWidth,
                  }}>
                <Image
                  style={{
                    tintColor: focused ? '#D60000' : '#FECF00',
                  }}
                  source={require('../../Assets/menuicon.png')}
                />
                <Text style={{backgroundColor: focused ? 'white' : '#D60000', color: focused ? '#D60000' : '#FECF00'}}>Menu</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Scan"
          component={ScannerScreen}
          options={{
            tabBarLabel: 'Scan',
            headerShown: false,
            tabBarIcon: ({color, size, focused}) => (
              <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: focused ? 'white' : '#D60000',
                    borderRadius: Platform.OS === 'ios' ? 70  : 60 ,
                    height: Platform.OS === 'ios' ? 55 * screenHeight : 54 * screenHeight,
                    width: Platform.OS === 'ios' ? 55 * screenWidth : 54 * screenWidth,
                  }}>
                <Image
                  style={{
                    height: 26 * screenHeight,
                    width: 28 * screenWidth,
                    tintColor: focused ? 'red' : 'yellow',
                  }}
                  source={require('../../Assets/qrfull.png')}
                />
                <Text style={{backgroundColor: focused ? 'white' : '#D60000', color: focused ? '#D60000' : '#FECF00'}}>Scan</Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="MyOrder"
          component={OrdersScreen}
          options={{
            tabBarLabel: 'MyOrders',
            headerShown: false,
            tabBarIcon: ({color, size, focused}) => (
              <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? 'white' : '#D60000',
                borderRadius: Platform.OS === 'ios' ? 70  : 60 ,
                height: Platform.OS === 'ios' ? 59 * screenHeight : 54 * screenHeight,
                width: Platform.OS === 'ios' ? 59 * screenWidth : 54 * screenWidth,
              }}>
                <Image
                  style={{
                    height: 26 * screenHeight,
                    width: 28 * screenWidth,
                    tintColor: focused ? 'red' : 'yellow',
                  }}
                  source={require('../../Assets/ordricon.png')}
                />
                <Text style={{fontSize: 12,backgroundColor: focused ? 'white' : '#D60000', color: focused ? '#D60000' : '#FECF00'}}>Orders</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            headerShown: false,
            tabBarIcon: ({color, size, focused}) => (
              <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? 'white' : '#D60000',
                borderRadius: Platform.OS === 'ios' ? 70  : 60 ,
                height: Platform.OS === 'ios' ? 59 * screenHeight : 54 * screenHeight,
                width: Platform.OS === 'ios' ? 59 * screenWidth : 54 * screenWidth,
              }}>
                <Image
                  style={{
                    tintColor: focused ? 'red' : 'yellow',
                  }}
                  source={require('../../Assets/settingsicon.png')}
                />
                <Text style={{fontSize: 12, backgroundColor: focused ? 'white' : '#D60000', color: focused ? '#D60000' : '#FECF00'}}>Settings</Text>
              </View>
            ),
          }}
        /> */}
      </Tab.Navigator>
    );
  }
}
