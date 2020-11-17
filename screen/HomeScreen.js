import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import AccountScreen from './AccountScreen';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      justifyContent: 'center'
    }
  });