import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import store from './src/redux/store';

import Login from './src/onBording/Login'
import AuthStack from './src/navigation/AuthNavigation'



const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <SafeAreaView /> */}
        <AuthStack />
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
