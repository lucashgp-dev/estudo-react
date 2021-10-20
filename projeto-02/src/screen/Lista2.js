import { StatusBar as BarStatus } from 'expo-status-bar';
import React, { useState } from 'react';

import { StyleSheet, Text, View, Dimensions, StatusBar, FlatList, Image, Platform, TouchableOpacity, Alert } from 'react-native';
import { DATA } from '../Data/mockData';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');

const zoom = {
    0: {
        opacity: 0,
        scale: 0,
    },

    0.25:{
        opacity: 1,
        scale: 1,
    },

    0.50:{
        opacity:0,
        scale:0,
    },
    1: {
        opacity: 1,
        scale: 1,
    }


}

const Lista2 = () => {

    const [clicavel, setClicavel] = useState(false);

    let variavel = 10;

    // if (Platform.OS === 'android') { console.warn('Plataforma: Android') }

    return (
        <View style={{ padding: 10 }}>

            <Image style={StyleSheet.absoluteFillObject} blurRadius={10} source={{ uri: 'https://images-ext-1.discordapp.net/external/r6jJzAJOD78hGwy3PLRkYycZzhr8bkNQMLWxf24w4SM/https/miro.medium.com/max/1400/1%2AaVqPxuHHBCRHCz4XxUH2AA.jpeg?width=788&height=492' }} />
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                //horizontal
                snapToInterval={width * 0.90 + 20}
                contentContainerStyle={{ paddingTop: StatusBar.currentHeight }}

                renderItem={({ item, index }) => {
                    return (

                        <Animatable.View
                            animation={zoom}
                            duration={1000}
                            delay={500 + (index*100)}

                            style={style.card}>

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

                                <TouchableOpacity onPress={() => {
                                    setClicavel(!clicavel)

                                    return (
                                        Alert.alert('Bom dia!!?', 'Você clicou no botão', [{
                                            text: 'Voltar',
                                            onPress: () => { Alert.alert('Você clicou no voltar') }
                                        }])
                                    )
                                }}>
                                    <Text style={style.btn}>Clique Aqui</Text>

                                    <Icon
                                        name={clicavel ? 'amazon' : 'arrow-left'}
                                        size={20}
                                        color={'black'}
                                    />

                                </TouchableOpacity>
                            </View>
                        </Animatable.View>
                    )

                }

                }


            />
        </View>
    )
}


const style = StyleSheet.create({
    card: {
        width: width * 0.9,
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#ABABAB',
        borderRadius: Platform.OS === 'web' ? 14 : 20,
        padding: 16,


    },
    text: {
        marginLeft: 20,
        color: '#fff',
        fontSize: 14,

    },

    btn: {
        marginLeft: 15,
        color: 'black',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 10,
        width: 'auto',
        height: 'auto',

    }


});
export default Lista2
