import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MockData } from '../../service/data'
import { sizeTheme } from '../../common/globalStyle'
import { StatusBar } from 'expo-status-bar'

const { CARD_HEIGHT, CARD_WIDTH, RADIUS, SPACING, HEIGHT_BAR, FULL_SIZE } = sizeTheme;


export const List = ({ navigation }) => {
    return (
        <View style={{
            flex: 1,
            marginTop: HEIGHT_BAR + SPACING,


        }}>

        <Text
        style={{
            fontSize:30,
            marginLeft:SPACING,

        }}>
            Dias de Treino
        </Text>
            <FlatList
                data={MockData}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal
                snapToInterval={FULL_SIZE}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            style={style.card}
                            activeOpacity={0.5}
                            onPress={() => navigation.push('ListDetails', { item })

                            }
                        >

                            <Image
                                source={
                                    item.pathImage
                                }
                                style={[StyleSheet.absoluteFillObject,
                                {
                                    width: CARD_WIDTH,
                                    height: CARD_HEIGHT,
                                    resizeMode: 'cover',
                                    borderRadius: RADIUS,
                                }]}

                            />
                            <View style={{

                                flex: 1,
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',



                            }}>

                                <Text style={style.text}>{item.day}</Text>
                                <View

                                    style={style.circle}>

                                    <Text style={style.text}>{item.system}</Text>

                                </View>



                            </View>
                        </TouchableOpacity>
                    )

                }}


            />
            <StatusBar
                style='auto'
                hidden
            />

        </View>


    );
};
const style = StyleSheet.create({
    card: {
        flexDirection: 'row',
        margin: SPACING,
        borderRadius: RADIUS,
        backgroundColor: '#ABABAB',
        padding: 16,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,



    },
    text: {

        color: '#fff',
        fontSize: 30,


    },

    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    }


});