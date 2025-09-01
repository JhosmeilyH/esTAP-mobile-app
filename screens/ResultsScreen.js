import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultsScreen({ route, navigation }) {
  const { answers, letter, categories } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results for Letter: {letter}</Text>
      {categories.map((cat) => (
        <Text key={cat} style={styles.answer}>
          {cat}: {answers[cat] || '—'}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#fff6eb',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#002776',
  },
  answer: {
    fontSize: 18,
    marginBottom: 10,
  },
});
