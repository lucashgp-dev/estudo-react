import { StyleSheet, Text, View, Modal, TouchableOpacity, TextInput, Animated, Keyboard } from 'react-native';
import React from 'react';
import { height, SPACING } from '../../common/globalStyle'
import { Colors } from '../../constants/colors'

export const ModalCreate = ({ isVisible, onCancel, updateData, data, editItemIndex, setEditItemIndex }) => {

    const initialValue = ((height * 0.5) - 120 / 2)
    const [input, setInput] = React.useState('')
    const [positionY2, setPositionY2] = React.useState(new Animated.Value(initialValue))
    const positionY = React.useRef(new Animated.Value(initialValue)).current


    React.useEffect(() => {

        if (!!editItemIndex) setInput(!!data[editItemIndex].day ? data[editItemIndex].day : '')


    }, [isVisible])

    React.useEffect(() => {
        const KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        const KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

        return () => {
            KeyboardDidHideListener.remove()
            KeyboardDidShowListener.remove()
        }

    }, [])

    const keyboardDidShow = () => {
        Animated.timing(positionY2, {
            toValue: initialValue / 2.5,
            duration: 100,
            useNativeDriver: false,
        }).start()
        //positionY.setValue(initialValue/2.5)

    }

    const keyboardDidHide = () => {
        Animated.timing(positionY2, {
            toValue: initialValue,
            duration: 300,
            useNativeDriver: false,
        }).start()
        //positionY.setValue(initialValue)
    }


    const save = () => {
        if (input.trim().length > 0) {
            const aux = [
                ...data,
                {
                    day: input
                }
            ]
            updateData(aux)

        }
    }

    return (
        <Modal
            visible={isVisible}
            onRequestClose={onCancel}
            animationType='slide'
            transparent={true}


        >
            <TouchableOpacity
                activeOpacity={0.9}
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }}
                onPress={()=>{
                    setInput('')
                    setEditItemIndex(null)
                    onCancel(false)
                } }

            >

            </TouchableOpacity>

            <Animated.View style={{
                flex: 1,
                position: 'absolute',
                left: '5%',
                width: '90%',
                height: 120,
                top: positionY2,
                backgroundColor: 'white',
                borderRadius: 10,
                padding: SPACING,



            }}>

                <Text> Dia da Semana:</Text>

                <TextInput
                    value={input}
                    onChangeText={(text) => setInput(text)}
                    style={{
                        borderColor: '#CCC',
                        borderWidth: 1,
                        fontSize: 14,
                        paddingLeft: 5,
                        borderRadius: 5,
                    }}

                />

                <View
                    style={{
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        marginTop: 20,

                    }}
                >

                    <TouchableOpacity
                        onPress={() => {

                            save()
                            onCancel(false)


                        }}
                        style={{
                            width: 100,
                            height: 30,
                            backgroundColor: Colors.primary,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,

                        }}
                    >

                        <Text
                            style={{
                                color: 'white',
                            }}
                        >Salvar</Text>

                    </TouchableOpacity>
                </View>
            </Animated.View>


        </Modal>
    );
};
