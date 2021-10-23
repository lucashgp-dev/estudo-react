import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { SPACING, sizeTheme } from '../../common/globalStyle'
import { Swipeable } from 'react-native-gesture-handler'
import { MockData } from '../../service/data';
import { Icon, Icons } from '../../components/Icons'
import { ModalCreate } from '../../components/ModalCreate';
import React, { useState } from 'react';

const { HEIGHT_BAR, } = sizeTheme

export const One = () => {

    const [showModal, setShowModal] = useState(false)
    const [editItemIndex, setEditItemIndex] = useState(null)

    const [data, setData] = useState([

    ])
    const onShowModal = () => setShowModal(true)

    const LeftButton = ({ index }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setEditItemIndex(() => index)

                   onShowModal()

                }}

                style={{

                    height: 60,
                    width: '20%',
                    backgroundColor: 'blue',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Icon
                    name='edit'
                    type={Icons.FontAwesome}
                    color='white'
                    size={25}

                />

            </TouchableOpacity>
        )
    }

    const RightButton = ({ index }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    const newData = data.filter((_, i) => i !== index)
                    setData(newData)
                }}
                style={{

                    height: 60,
                    width: '20%',
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Icon
                    name='trash'
                    type={Icons.FontAwesome}
                    color='white'
                    size={25}

                />

            </TouchableOpacity>
        )
    }


    return (

        <View style={{
            flex: 1,
            paddingHorizontal: SPACING,
            marginTop: HEIGHT_BAR + SPACING * 2,

        }}>
            <ModalCreate
                isVisible={showModal}
                onCancel={setShowModal}
                updateData={setData}
                data={data}
                editItemIndex={editItemIndex}
                setEditItemIndex={setEditItemIndex}
            />

            <View
                style={{
                    flex: 0.2,
                    paddingHorizontal: SPACING,
                    flexDirection: 'row',
                    justifyContent: 'flex-end'

                }}
            >

                <TouchableOpacity

                    onPress={() => {
                        setEditItemIndex(null)
                        setShowModal(true)
                    }}
                >

                    <Icon
                        name='add'
                        type={Icons.Ionicons}
                        color='black'
                        size={50}

                    />

                </TouchableOpacity>
            </View>

            <View
                style={{
                    flex: 1,
                    marginBottom: 60 + SPACING * 2,
                }} >

                <FlatList
                    data={data}
                    contentContainerStyle={{ padding: SPACING }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {

                        return (
                            <Swipeable

                                renderLeftActions={() => (<LeftButton
                                    index={index}
                                />)}
                                renderRightActions={() => (<RightButton
                                    index={index}
                                />)}
                                overshootLeft={false}
                                overshootRight={false}
                                overshootFriction={1}

                            >
                                <View
                                    style={{
                                        width: '100%',
                                        height: 60,
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        marginBottom: SPACING * 0.5,
                                        padding: SPACING,
                                    }}
                                >
                                    <Text style={{ color: 'white', fontSize: 20, }}> {item.day} </Text>
                                </View>

                            </Swipeable>

                        )

                    }}

                />

            </View>


        </View>
    );
};
