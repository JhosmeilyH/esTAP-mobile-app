import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import esTAPLogo from '../assets/icons/esTAPlogo.png';

const DEFAULT_CATEGORIES = ['Name', 'Last Name', 'Country', 'Animal','Fruit', 'Color', 'Thing'];
const TIMER_OPTIONS = ['No Timer','30s', '60s', '120s', '180s', '240s', '300s'];
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function GameLobbyScreen({ navigation }) {
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);
  const [customCategory, setCustomCategory] = useState('');
  const [selectedTimer, setSelectedTimer] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleAddCategory = () => {
    if (customCategory.trim() && !categories.includes(customCategory.trim())) {
      setCategories([...categories, customCategory.trim()]);
      setCustomCategory('');
    }
  };

  const handleRemoveCategory = (indexToRemove) => {
    const updated = categories.filter((_, i) => i !== indexToRemove);
    setCategories(updated);
  };
const handleStartGame = () => {
  navigation.navigate('GameScreen', {
    categories,
    timer: selectedTimer === 'No Timer' ? null : selectedTimer,
    letter: selectedLetter,
  });
};


  const rerollLetter = () => {
    setSelectedLetter(LETTERS[Math.floor(Math.random() * LETTERS.length)]);
  };

  return (
    <View style={styles.fullScreen}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <Image source={esTAPLogo} style={styles.logoImage} />
        <View style={{ height: 10 }} />

        {/* Category Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Select Categories</Text>
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                'NOTE!',
                'Pick what type of words you want to include in the round. You can even add your own!'
              )
            }
          >
            <Text style={styles.infoIcon}>ℹ️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryList}>
          {categories.map((cat, index) => (
            <View key={index} style={styles.categoryItem}>
              <Text style={styles.categoryText}>{cat}</Text>
              <TouchableOpacity onPress={() => handleRemoveCategory(index)}>
                <Text style={styles.removeText}>✕</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Custom Category Input */}
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Create your own category"
            style={styles.input}
            value={customCategory}
            onChangeText={setCustomCategory}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddCategory}>
            <Text style={styles.addButtonText}>+ Add</Text>
          </TouchableOpacity>
        </View>

        {/* Timer Section */}
        <Text style={styles.sectionTitle}>Select Timer</Text>
        <View style={styles.optionsRow}>
          {TIMER_OPTIONS.map((option) => (
  <TouchableOpacity
    key={option}
    style={[
      styles.timerOption,
      selectedTimer === option && styles.selectedOption,
    ]}
    onPress={() => setSelectedTimer(option)}
  >
    <Text style={styles.timerText}>{option}</Text>
  </TouchableOpacity>
))}

        </View>

        {/* Random Letter Section */}
        <Text style={styles.sectionTitle}>Random Letter</Text>
        <TouchableOpacity style={styles.letterButton} onPress={rerollLetter}>
          <Text style={styles.letterText}>
            {selectedLetter ? selectedLetter : 'Pick Letter'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={rerollLetter}>
          <Text style={styles.reroll}>↻ Change</Text>
        </TouchableOpacity>

        {/* Start Game */}
        {selectedTimer && selectedLetter && (
          <TouchableOpacity style={styles.startButton} onPress={handleStartGame}>
            <Text style={styles.startButtonText}>▶ START GAME</Text>
          </TouchableOpacity>
        )}
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
  logoImage: {
    width: 500,
    height: 180,
    resizeMode: 'contain',
    marginBottom: -40,
    marginTop: 10,
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
    marginTop: 30
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#002776',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: -10

  },
  infoIcon: {
    fontSize: 10,
    marginLeft: 8,
    marginTop: 4,
  },
  categoryList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
  },
  categoryItem: {
  backgroundColor: '#ffeccc',
  paddingVertical: 8,
  paddingHorizontal: 14,
  borderRadius: 20,
  margin: 5,
  flexDirection: 'row',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
},
 categoryText: {
  fontSize: 15,
  fontWeight: '600',
  color: '#4a4a4a',
},
  removeText: {
  color: '#e63946',
  marginLeft: 10,
  fontSize: 18,
  fontWeight: 'bold',
},
  inputRow: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    marginBottom: 30,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 14,
    padding: 10,
    fontSize: 14,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: '#00b894',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 14,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  timerOption: {
    backgroundColor: '#ddd',
    borderRadius: 14,
    paddingVertical: 8,
    paddingHorizontal: 14,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60,
  },
  selectedOption: {
    backgroundColor: '#00b894',
  },
  timerText: {
    fontSize: 14,
    color: '#000',
  },
  letterButton: {
    backgroundColor: '#e63946',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 14,
    marginTop: 10,
    marginBottom: 10,
  },
  letterText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  reroll: {
    color: '#002776',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  startButton: {
    backgroundColor: '#002776',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});