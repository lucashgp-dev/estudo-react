import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { List } from '../screen/List';
import { ListDetails } from '../screen/ListDetails'
import { Hello } from '../screen/Hello';
import { ToolBar } from './toolbar'

const Stack = createStackNavigator();

export const RootStack = ( ) => {
    return (
        <Stack.Navigator
            initialRouteName='screen1'
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }}
        >
            <Stack.Screen 
                name='screen1'
                component={ToolBar}
            />
            <Stack.Screen 
                name='home'
                component={List}
            />
            <Stack.Screen 
                name='hello'
                component={Hello}
            />
            <Stack.Screen 
                name='listDetails'
                component={ListDetails}
            />
        </Stack.Navigator>
    );
};
