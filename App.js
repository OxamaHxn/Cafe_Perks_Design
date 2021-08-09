import React, { Component } from 'react'
import { Platform } from 'react-native';

import Splash from './src/Screen/SplashScreen/index'
import WelcomeScreen from './src/Screen/WelcomeScreen/index'
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/Screen/AuthScreens/LoginScreen/index';
import {NavigationContainer, CommonActions} from '@react-navigation/native';
import SignUpScreen from './src/Screen/AuthScreens/SignupScreen';
import { StatusBar } from 'react-native';
import BottomNavigation from './src/Navigations/BottomNavigations';
import Menu from './src/Config/menuScreen'
import Cart from './src/Config/cart';
import HomeScreen from './src/Screen/HomeScreen';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <>
      <StatusBar backgroundColor={'rgba(0,0,0,0.2)'}
      barStyle={
        Platform.OS === "ios" ? "dark-content" : "light-content"
      }
      />
      <NavigationContainer>
        <Stack.Navigator nitialRouteName="BottomNavigation">
          <Stack.Screen 
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen 
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen 
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen 
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen 
          name="BottomNavigation"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen 
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen 
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen 
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </>
    )
  }
}
