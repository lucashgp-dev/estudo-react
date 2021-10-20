import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native';
import React from 'react';
import { Icon, Icons } from '../../components/Icons';
import { sizeTheme, width, height } from '../../common/globalStyle'
import { Timer } from '../../components/Timer'

const { CARD_HEIGHT, CARD_WIDTH, RADIUS, SPACING, HEIGHT_BAR, FULL_SIZE } = sizeTheme;

export const ListDetails = (props) => {

    const { route: { params: { item } }, navigation } = props;

    return (

        <>
            <Image
                source={item.pathImage}
                blurRadius={4}
                style={[StyleSheet.absoluteFillObject, {
                    width: width,
                    height: height,
                }]}
            />

            <View style={{
                paddingTop: HEIGHT_BAR,
                paddingHorizontal: SPACING,
                flex: 1,
            }} >
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        zIndex: 90,
                    }}
                >

                    <Icon
                        name={'arrow-back'}
                        type={Icons.Ionicons}
                        color={'white'}
                        size={35}

                    />
                </TouchableOpacity>


                <View
                    style={{ flex: 1 }}>
                    <View
                        style={{

                            flex: 0.3,
                            justifyContent: 'center'
                        }}

                    >
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 38,
                                fontWeight: 'bold',
                                marginLeft: SPACING,

                            }}>
                            {item.day}
                        </Text>
                    </View>

                    <View
                        style={{

                            flex: 0.6,
                        }}

                    >
                        <Timer />

                    </View>
                    <View
                        style={{
                            backgroundColor: 'blue',
                            flex: 1.2,
                            marginBottom: SPACING
                        }}>

                    </View>
                </View>


            </View>
        </>

    );
};
