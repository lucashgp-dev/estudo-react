import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { width, height, SPACING } from '../../common/globalStyle'

export const RestButton = ({ timeRest }) => {

    const [count, setCount] = useState(+timeRest)
    const [startCount, setStartCount] = useState(false)
    const [restart, setRestart] = useState(false)
    const [inter, setInter] = useState(null)

    useEffect(() => {
        let aux = count

        if (startCount) {

            const auxInter = setInterval(() => {

                if (aux < 1) {
                    setRestart(true)
                }
                aux--

                setCount(aux)


            }, 1000)

            setInter(auxInter)
        }

        return () => clearInterval(setInter)

    }, [startCount])


    useEffect(() => {

        if (restart) {
            clearInterval(inter)
            setInter(null)
            setCount(+timeRest)
            setStartCount(false)
            setRestart(false)

        }


    }, [restart])

    return (
        <View
            style={{
                flex: 1,
            }}>
            <TouchableOpacity
                style={{
                    width: width - (SPACING * 2),
                    height: height * 0.05,
                    borderColor: 'white',
                    borderWidth: 2,
                    borderRadius: 7,
                    justifyContent: 'center',
                    alignItems: 'center',
                }
                }
                onPress={
                    () => setStartCount(true)

                }

            >

                <Text style={{
                    color: 'white',
                    fontSize: 16,
                }} >
                    {startCount ? count : 'Descanso'}


                </Text>
            </TouchableOpacity>

        </View>
    );
};
