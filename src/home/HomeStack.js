import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GetStart from './GetStart';
import BookingsForm from './BookingsForm';

const Stack = createStackNavigator();

function getStartStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: 'transparent' } }} >
            <Stack.Screen name="getStart" component={GetStart} />
        </Stack.Navigator>
    )
}


function formStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="bookingsForm" component={BookingsForm} />
        </Stack.Navigator>
    )
}

export const GetStarStack = getStartStack;
export const BookingsFormStack = formStack;