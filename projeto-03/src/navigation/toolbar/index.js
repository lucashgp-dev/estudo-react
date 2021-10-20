import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ToolBarTabs } from "./screens"
import { Icon } from '../../components/icons';
import { sizeTheme } from '../../common/globalStyle';

const Tab = createBottomTabNavigator();

export const ToolBar = ( ) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: sizeTheme.SPACING,
                    left: sizeTheme.SPACING,
                    right: sizeTheme.SPACING,
                    borderRadius: sizeTheme.RADIUS,
                }
            }}
        >
            {ToolBarTabs.map((item, index) => {
                return (
                    <Tab.Screen
                        key={index.toString()}
                        name={item.route}
                        component={item.component}
                        options={{
                            tabBarShowLabel: false,
                            headerShown: false,
                            tabBarButton: ( props ) => {

                                const focus = props.accessibilityState.selected;

                                return (
                                    <TouchableOpacity
                                        onPress={props.onPress}
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Icon 
                                            name={ focus ? item.activeIcon : item.inactiveIcon }
                                            size={30}
                                            color='black'
                                            type={item.type}
                                        />
                                    </TouchableOpacity>
                                )
                            }
                        }}
                    />
                )
            })}
        </Tab.Navigator>
    );
};
