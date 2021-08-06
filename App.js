import React, {Component} from 'react';
import {Platform, LogBox} from 'react-native';

import Splash from './src/Screen/SplashScreen/index';
import WelcomeScreen from './src/Screen/WelcomeScreen/index';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/Screen/AuthScreens/LoginScreen/index';
import {NavigationContainer, CommonActions} from '@react-navigation/native';
import SignUpScreen from './src/Screen/AuthScreens/SignupScreen';
import {StatusBar} from 'react-native';
import BottomNavigation from './src/Navigations/BottomNavigations';
import HomeScreen from './src/Screen/HomeScreen';
const Stack = createStackNavigator();
LogBox.ignoreAllLogs();
export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar
          backgroundColor={'rgba(0,0,0,0.2)'}
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="BottomNavigation">
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
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}
