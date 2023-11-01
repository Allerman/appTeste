import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function HomeScreen() {
  return (

    <View style={styles.container}>
      <Avatar.Image size={150} source={require('curriculo/componentes/foto.jpg')} />
      <Text style={styles.title}>Thayssa Alexandre</Text>
      <Text style={styles.subtitle}>Desenvolvedora e QA</Text>
      <Text style={styles.description}>Em busca de explorar e descobrir</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange' ,
  },
  subtitle: {
    fontSize: 18,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});
