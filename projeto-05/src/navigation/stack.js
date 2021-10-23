import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { List } from '../screens/list'
import { ToBar } from './toBar';
import { ListDetails } from '../screens/listDetails';
import { One } from '../screens/one';

const Stack = createStackNavigator()

export const Rootstack = () => {
    return (
        <Stack.Navigator
            initialRouteName='tela1'
            screenOptions = {{
                headerShown:false,
                gestureEnabled:true,
            }}>

             <Stack.Screen name='tela1'
                component={ToBar}
            />
            <Stack.Screen name='home'
                component={List}
            />
             <Stack.Screen name='ListDetails'
                component={ListDetails}
            />
              <Stack.Screen name='tela2'
                component={One}
            />

        </Stack.Navigator>
    );
};



