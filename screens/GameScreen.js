import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import esTAPLogo from '../assets/icons/esTAPlogo.png';

export default function GameScreen({ route, navigation }) {
  const { categories, letter, timer } = route.params;
  const [answers, setAnswers] = useState(
    categories.reduce((acc, category) => {
      acc[category] = '';
      return acc;
    }, {})
  );

  const [timeLeft, setTimeLeft] = useState(timer ? parseInt(timer) : null);

  useEffect(() => {
    if (!timeLeft) return;
    if (timeLeft === 0) return handleStop();

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const handleInputChange = (category, value) => {
    setAnswers((prev) => ({ ...prev, [category]: value }));
  };

  const handleStop = () => {
    // Don’t go to results until multiplayer is ready
    // navigation.navigate('ResultsScreen', { answers, letter, categories });
    alert('STOP pressed! Results will be shown when multiplayer is implemented.');
  };

  return (
    <View style={styles.fullScreen}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        {/* Logo */}
        <Image source={esTAPLogo} style={styles.logoImage} />

        {/* Instructions */}
        <Text style={styles.instructions}>📋 Fill in the categories:</Text>

        {/* Letter + Timer */}
        <View style={styles.letterTimerRow}>
          <Text style={styles.letterBox}>{letter}</Text>
          {timer && <Text style={styles.timer}>{timeLeft}s</Text>}
        </View>

        {/* Inputs */}
        {categories.map((category) => (
          <View key={category} style={styles.inputGroupRow}>
            <Text style={styles.categoryLabel}>{category}</Text>
            <TextInput
              style={styles.inlineInput}
              value={answers[category]}
              onChangeText={(text) => handleInputChange(category, text)}
              placeholder=""
            />
          </View>
        ))}

        {/* Stop Button */}
        <TouchableOpacity style={styles.stopButton} onPress={handleStop}>
          <Text style={styles.stopButtonText}>🔴 esTAP! 🔴</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    backgroundColor: '#fff6eb',
  },
  container: {
    padding: 30,
    alignItems: 'center',
    paddingBottom: 60,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  backText: {
    fontSize: 16,
    color: '#002776',
    fontWeight: 'bold',
    marginTop: 30,
  },
  logoImage: {
    width: 500,
    height: 180,
    resizeMode: 'contain',
    marginBottom: -40,
    marginTop: 10,
  },
  instructions: {
    fontSize: 18,
    marginBottom: 20,
    color: '#002776',
    fontWeight: '600',
  },
  letterTimerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 25,
  },
  letterBox: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#ffeccc',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
    color: '#002776',
  },
  timer: {
    fontSize: 14,
    color: '#e63946',
    fontWeight: 'bold',
  },
  inputGroupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
    gap: 10,
  },
  categoryLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
    width: 100,
  },
  inlineInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    fontSize: 16,
  },
  stopButton: {
    backgroundColor: '#e63946',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 30,
  },
  stopButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
