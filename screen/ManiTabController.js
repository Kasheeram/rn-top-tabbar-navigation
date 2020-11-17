import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

const HomeStack = createStackNavigator();

const MainTabController = () => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerStyle: {
             backgroundColor: '#fff',
             shadowColor: '#fff'
           },
           headerTintColor: '#333',
           headerTitleStyle: {
             fontWeight: 'bold'
           }
         }}>
           <HomeStack.Screen name="Home" component={HomeScreen} options={{
             title: 'Home',
           }}/>
         </HomeStack.Navigator>
      );
};

export default MainTabController;


