import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SkillsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habilidades</Text>
      <Text style={styles.skill}>Habilidade 1</Text>
      <Text style={styles.skill}>Habilidade 2</Text>
      <Text style={styles.skill}>Habilidade 3</Text>
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
  },
});
