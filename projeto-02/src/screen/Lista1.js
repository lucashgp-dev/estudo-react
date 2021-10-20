import { StatusBar as BarStatus } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, FlatList, Image, Platform } from 'react-native';
import { DATA } from '../Data/mockData';

const { width, height } = Dimensions.get('screen');

const Lista1 = () => {

    let variavel = 10;

    if (Platform.OS === 'android'){
        console.warn('Plataforma: Android')
    }

        return (
            <View style={{ padding: 10 }}>
                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    showVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={style.card}>

                                <Image
                                    source={{
                                        uri: item.image
                                    }}
                                    style={{ width: 60, height: 60, borderRadius: 30 }}

                                />
                                <View>

                                    <Text style={style.text}>{item.name}</Text>
                                    <Text style={style.text}>{item.email}</Text>
                                    <Text style={style.text}>{item.jobTitle}</Text>

                                </View>
                            </View>
                        )

                    }}


                />
            </View>
        )
}


const style = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 15,
        backgroundColor: '#ABABAB',
        borderRadius: Platform.OS === 'web' ? 14 : 20,
        padding: 16,


    },
    text: {
        marginLeft: 20,
        color: '#fff',
        fontSize: 14,

    },


});
export default Lista1
