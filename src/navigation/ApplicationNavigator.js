/* eslint-disable prettier/prettier */
import React, { useEffect, useMemo, useReducer, useState } from 'react';
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import StackNavigator from './StackNavigator';

const Stack = createStackNavigator();

export default function ApplicationNavigator() {

    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                keyboardHidesTabBar: true,
            }}>
            <Stack.Screen name="StackNavigator" component={StackNavigator} />
        </Stack.Navigator>
    );
}
