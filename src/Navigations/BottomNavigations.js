import React, {Component} from 'react';
import {View, Image, Text, Platform, SafeAreaView} from 'react-native';
import HomeScreen from '../Screen/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MenuScreen from '../Screen/MenuScreen';
import Menu from '../Config/menuScreen'
import OrdersScreen from '../Screen/MyOrders';
import SettingsScreen from '../Screen/Settings';
import {screenHeight, screenWidth} from '../Config/screenRatio';
import ChatScreen from '../Screen/ChatScreen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Tab = createBottomTabNavigator();
const tabs = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: require('../../Assets/homeicon.png'),
  },
  {
    name: 'Menu',
    component: Menu,

    icon: require('../../Assets/menuicon.png'),
  },
  {
    name: 'Scan',
    component: ChatScreen,

    icon: require('../../Assets/qrfull.png'),
  },
  {
    name: 'Orders',
    component: OrdersScreen,

    icon: require('../../Assets/ordricon.png'),
  },
  {
    name: 'Setting',
    component: SettingsScreen,
    icon: require('../../Assets/settingsicon.png'),
  },
];
export default class BottomNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          showLabel: false,
          tabStyle: {
            backgroundColor: '#D60000',
            height: hp('10'),
            bottom: Platform.OS === "ios" ? 5 : 26,
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
                    height: 60,
                    width: 60,
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
                      backgroundColor: focused ? 'white' : '#D60000',
                      color: focused ? '#D60000' : '#FECF00',
                    }}>
                    {tab.name}
                  </Text>
                </View>
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    );
  }
}
