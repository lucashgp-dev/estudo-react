import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon, Icons } from '../../components/icons';

export const ListDetails = ( props ) => {
    const { route: { params: { item } }, navigation } = props;

    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Icon
                    name={'arrow-back'}
                    type={Icons.Ionicons}
                    color={'black'}
                    size={50}
                />
            </TouchableOpacity>
            <Text>
                {JSON.stringify(item)}
            </Text>
        </View>
    );
};
