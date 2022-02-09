import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../onBording/Login';
import ForgotPassword from '../onBording/ResetPassword';
import Signup from '../onBording/Signup';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}


export default MyStack;