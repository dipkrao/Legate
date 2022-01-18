import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import VerifyCode from '../screens/auth/VerifyCode';
import Home from '../screens/BottomTabBar/home/Home';
import Products from '../screens/BottomTabBar/products/Products';
import ForInquiry from '../screens/BottomTabBar/inquiry/ForInquiry';
import Notification from '../screens/BottomTabBar/notification/Notification';
import Profile from '../screens/BottomTabBar/profile/Profile';
import BottomTabBarNavigator from './BottomTabBarNavigator';
import FeatureProducts from '../screens/BottomTabBar/products/FeatureProducts';
import AllProducts from '../screens/BottomTabBar/products/AllProducts';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>

            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="VerifyCode" component={VerifyCode} />
            <Stack.Screen name="BottomTabBarNavigator" component={BottomTabBarNavigator} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Products" component={Products} />
            <Stack.Screen name="ForInquiry" component={ForInquiry} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="FeatureProducts" component={FeatureProducts} />
            <Stack.Screen name="AllProducts" component={AllProducts} />
        </Stack.Navigator>
    );
}