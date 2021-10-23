import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View, } from 'react-native';
import { Rootstack } from './navigation/stack'

export default function App() {
  return (
    <View style={styles.container}>

      <NavigationContainer>
        <Rootstack />
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
