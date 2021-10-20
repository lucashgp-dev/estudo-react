import { StatusBar as BarStatus } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Lista1 from './screen/Lista1';
import Lista2 from './screen/Lista2';

export const App = () => {

  return (
    <View style={styles.container}>

      <Lista2 />
      <BarStatus
        style={'auto'}
        hidden
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: 'white',
  },

});
