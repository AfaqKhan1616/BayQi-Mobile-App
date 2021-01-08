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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Friends from "./src/screens/Friends";
import Test from "./src/screens/Test";
import QRScreen from "./src/screens/QRScreen";

export default function App() {
    const QRStack = createStackNavigator();

    const ContactsStackScreen = () => (
        <QRStack.Navigator>
            <QRStack.Screen
                name="ContactsList"
                component={QRScreen}
                options={{
                    headerShown:false
                }}
            />

        </QRStack.Navigator>
    );

    const FriendsStackScreen = () => (
        <QRStack.Navigator>
            <QRStack.Screen
                name="Friends"
                component={Friends}
                options={{
                   headerShown:false
                }}
            />

        </QRStack.Navigator>
    );

    const AppTabs = createBottomTabNavigator();
    const AppTabsScreen = () => (
        <AppTabs.Navigator>
            <AppTabs.Screen name="QRCode" component={ContactsStackScreen}/>
            <AppTabs.Screen name="Friends" component={FriendsStackScreen}/>
        </AppTabs.Navigator>
    );

    return (
        <NavigationContainer>
            <AppTabsScreen/>
        </NavigationContainer>
    );
}
