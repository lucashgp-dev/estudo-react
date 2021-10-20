import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export const App = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState('');
  const [input2, setInput2] = useState('0');
  const [input3, setInput3] = useState('100');

  const checkSoma = () => {
    if (Number.parseInt(+input)) {

      setContador(contador + (+input))

    }
  }
  const checkSub = () => {
    if (Number.parseInt(+input)) {

      setContador(contador - (+input))

    }
  }

  const randomNumber = () => {

    let min = parseInt(input2);
    let max = parseInt(input3);

    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    setInput(`${num}`);

  }

  return (
    <View style={styles.container}>

      <View style={styles.v1}>

        <Text style={{ marginBottom: 10, fontSize: 36 }}>  {contador} </Text>

        <TextInput value={input} onChangeText={(texto) => setInput(texto)}
          style={{ backgroundColor: 'white',  borderRadius: 4, marginVertical: 20, width: 200, height: 40 }} />

        <TouchableOpacity activeOpacity={0.8} onPress={checkSoma}
          style={[styles.btn, { backgroundColor: 'white' }]} >

          <Text style={{ fontSize: 20 }}>Somar</Text>

        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} onPress={checkSub}
          style={[styles.btn, { backgroundColor: 'white', marginVertical: 20 }]}>

          <Text style={{ fontSize: 20 }}>Subtrair</Text>

        </TouchableOpacity>

        <TextInput value={input2} placeholder='valor mínimo'
          onChangeText={(texto) => {
            console.warn(texto)
            return setInput2(texto)
          }}
          style={{ backgroundColor: 'white',  borderRadius: 4, marginVertical: 20, width: 200, height: 40 }} />


        <TextInput value={input3} placeholder='valor máximo' style={{ fontSize: 20 }}
          onChangeText={(texto) => {
            console.warn(texto)
            return setInput3(texto)
          }}
          style={{ backgroundColor: 'white',  borderRadius: 4, marginVertical: 20, width: 200, height: 40 }} />


        <TouchableOpacity activeOpacity={0.8} onPress={randomNumber}
          style={[styles.btn, { backgroundColor: 'white' }]}>

          <Text style={{ fontSize: 20 }}>Random</Text>

        </TouchableOpacity>

      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',

  },

  v1: {
    flex: 1,
    backgroundColor: '#60E595',
    justifyContent: 'center',
    alignItems: 'center',

  },

  btn: {
    backgroundColor: 'white',
    width: 100,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,


  }

});
