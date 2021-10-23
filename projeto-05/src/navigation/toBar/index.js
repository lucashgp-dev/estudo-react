import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from '../../components/Icons';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ToBarTabs } from './screens'
import { sizeTheme } from '../../common/globalStyle'

const Tab = createBottomTabNavigator()

export const ToBar = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: sizeTheme.SPACING,
                    left: sizeTheme.SPACING,
                    right:sizeTheme.SPACING,
                    borderRadius:sizeTheme.RADIUS,


                }

            }}

        >
            {
                ToBarTabs.map((item, index) => {

                    return (
                        <Tab.Screen
                            key={index.toString()}
                            name={item.route}
                            component={item.component}
                            options={{
                                tabBarShowLabel: false,
                                headerShown: false,
                                tabBarButton: (props) => {

                                    const focus = props.accessibilityState.selected

                                    console.log(props)

                                    return (
                                        <TouchableOpacity
                                            onPress={props.onPress}
                                            style={
                                                {
                                                    justifyContent:'center',
                                                    alignItems:'center',
                                                    flex:1,
                                                }
                                            }

                                        >
                                            <Icon
                                                name={focus? item.activeIcon : item.inactiveIcon}
                                                size={30}
                                                type={item.type}
                                                color={'black'}


                                            />
                                        </TouchableOpacity>

                                    )

                                }

                            }}


                        />
                    )

                })
            }

        </Tab.Navigator>
    );
};
