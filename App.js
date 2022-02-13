import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './src/redux/store';

import Login from './src/onBording/Login'
import AuthStack from './src/navigation/AuthNavigation';

import Home from './src/navigation/AppNavigation';

const App = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);


  useEffect(() => {
    getTokens()
  })



  const getTokens = async () => {
    try {
      const value = await AsyncStorage.getItem('accessToken')
      if (value !== null) {
        setAccessToken(value);
      }

    } catch (error) {
      console.log(error)
    }

    try {
      const value = await AsyncStorage.getItem('refreshToken')
      if (value !== null) {
        setRefreshToken(value);
      }

    } catch (error) {
      console.log(error)
    }
  }


  return (
    console.log('get access tocken from asybc runs', accessToken),
    console.log('get refresh tocken from asybc runs', refreshToken),
    <Provider store={store}>
      <NavigationContainer>
        {/* <SafeAreaView /> */}
        {/* <AuthStack /> */}
        <Home />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
