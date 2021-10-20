import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { MockData } from '../../service/data';

export const List = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                data={MockData}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity 
                            style={style.card}
                            onPress={() => navigation.push('listDetails', { item })}
                        >
                            <Image
                                source={item.pathImage}
                                style={{ width: 60, height: 60, borderRadius: 30 }}
                            />
                            <View>
                                <Text style={style.text}>{item.day}</Text>
                                <Text style={style.text}>{item.system}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const style = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 15,
        backgroundColor: '#ABABAB',
        borderRadius: 30,
    },
    text: {
        color: '#fff',
    }
})