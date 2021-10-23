import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { sizeTheme, width, height } from '../../common/globalStyle'
const { CARD_HEIGHT, CARD_WIDTH, RADIUS, SPACING, HEIGHT_BAR, FULL_SIZE } = sizeTheme;
import { RestButton } from '../RestButton'

export const Timer = () => {
    return (

        <View
            style={{ flex: 1, }}>

            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                <Text
                    style={{
                        color: 'white',
                        fontSize: 45,
                        fontWeight: 'bold',

                    }}> 00:00:00 </Text>

            </View>

            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'


                }}>

                <TouchableOpacity style={styles.btn}>

                    <Text style={styles.text}> Start</Text>

                </TouchableOpacity>


                <TouchableOpacity style={styles.btn}>

                    <Text style={styles.text}> Pause</Text>

                </TouchableOpacity>


                <TouchableOpacity style={styles.btn}>

                    <Text style={styles.text}> Stop</Text>

                </TouchableOpacity>


            </View>


            <View
                style={{ flex: 1 }}>

                <RestButton
                    timeRest={60} />

            </View>


        </View>

    );
};

const styles = StyleSheet.create({
    btn: {
        height: height * 0.05,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: ((width * 0.85) / 3) * 0.95,


    },
    text: {
        color: 'white',
        fontSize: 16,


    }
})