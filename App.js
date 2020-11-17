/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './screen/HomeScreen';
import SettingsScreen from './screen/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import MainTabController from './screen/ManiTabController';


const Tab = createMaterialTopTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <MainTabController/>
      {/* <Tab.Navigator style={{marginTop: 50}}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}


export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center'
  }
});