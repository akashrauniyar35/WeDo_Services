import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../home/Home';
import Profile from '../profile/Profile';
import Modal from '../commonComponents/Modal';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

function TabNavigation() {

    const activeTintColor = '#0C3469';
    const inactiveTintColor = '#E2E6EC'


    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: activeTintColor,
            tabBarInactiveTintColor: inactiveTintColor,
            tabBarStyle: { backgroundColor: 'white', alignment: 'center', justifyContent: 'space-between' },
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ios-home" color={color} size={size} />
                    ),
                    // tabBarBadge: 3,
                }}
            />
            <Tab.Screen name="profile" component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="ios-person" color={color} size={size} />
                    ),
                }}

            />
        </Tab.Navigator>
    )
}


export default TabNavigation;

