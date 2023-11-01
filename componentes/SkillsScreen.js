import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SkillsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projetos</Text>
      <Text style={styles.skill}>Ap212</Text>
      <Text style={styles.skill}>Urubu do pix</Text>
      <Text style={styles.skill}>Sistema de agendamento</Text>
      {/* Adicione mais habilidades conforme necessário */}
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
  },
  skill: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
  },
});
