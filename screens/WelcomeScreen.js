import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from 'react-native';

import letterIcon from '../assets/icons/letterDice.png';
import brain from '../assets/icons/brain.png';
import clockIcon from '../assets/icons/clock.png';
import score from '../assets/icons/score.png';
import esTAP from '../assets/icons/esTAP.png';
import lightbulbIcon from '../assets/icons/lightbulb.png';
import esTAPLogo from '../assets/icons/esTAPlogo.png';
import person from '../assets/icons/person.png';
import addUser from '../assets/icons/addUser.png';

export default function WelcomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image source={esTAPLogo} style={styles.logoImage} />

        <Text style={styles.tagline}>
          <Text style={styles.bold}>Think fast. Type faster.</Text>
        </Text>

        {/* Flashcard button to show rules */}
        <TouchableOpacity
          style={styles.howToPlayCard}
          onPress={() => setModalVisible(true)}
        >
          <View style={styles.cardContent}>
            <Image source={lightbulbIcon} style={styles.titleIcon} />
            <Text style={styles.howToPlayTitle}>How to Play</Text>
          </View>
        </TouchableOpacity>

        {/* Login placeholder */}
        <TouchableOpacity style={styles.howToPlayCard} onPress={() => {}}>
          <View style={styles.cardContent}>
            <Image source={person} style={styles.titleIcon} />
            <Text style={styles.howToPlayTitle}>Login</Text>
          </View>
        </TouchableOpacity>

        {/* Create Account placeholder */}
        <TouchableOpacity style={styles.howToPlayCard} onPress={() => {}}>
          <View style={styles.cardContent}>
            <Image source={addUser} style={styles.titleIcon} />
            <Text style={styles.howToPlayTitle}>Create Account</Text>
          </View>
        </TouchableOpacity>

        {/* Play button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('GameLobby')}
        >
          <Text style={styles.buttonText}> Play as a guest</Text>
          
        </TouchableOpacity>
      </ScrollView>

      {/* Modal for rules */}
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalBox}>
            {/* Close button */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>

            {/* Rules */}
            <Text style={styles.modalTitle}>How to Play</Text>

            <View style={styles.ruleRow}>
              <Image source={letterIcon} style={styles.icon} />
              <Text style={styles.ruleText}>A random letter is given</Text>
            </View>

            <View style={styles.ruleRow}>
              <Image source={brain} style={styles.icon} />
              <Text style={styles.ruleText}>Words must match each category and start with the letter</Text>
            </View>

            <View style={styles.ruleRow}>
              <Image source={clockIcon} style={styles.icon} />
              <Text style={styles.ruleText}>Fill the list before time runs out or someone yells the <Text style={styles.italic}>magic</Text> word</Text>
            </View>

            <View style={styles.ruleRow}>
              <Image source={score} style={styles.icon} />
              <Text style={styles.ruleText}>Press the button to warn your teammates</Text>
            </View>

            <View style={styles.ruleRow}>
              <Image source={esTAP} style={styles.icon} />
              <Text style={styles.ruleText}>The player with the most points wins</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff6eb',
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  scroll: {
    alignItems: 'center',
    paddingBottom: 60,
  },
  logoImage: {
    width: 1500,
    height: 170,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: -20,
  },
  tagline: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 30,
    marginTop: -50
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  howToPlayCard: {
    backgroundColor: '#ffeccc',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  howToPlayTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#002776',
  },
  button: {
    backgroundColor: '#00b894',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center'
  },

  // Modal styles
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fffef5',
    borderRadius: 20,
    padding: 20,
    width: '85%',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 15,
    zIndex: 1,
  },
  closeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e63946',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#002776',
    marginBottom: 20,
  },
  ruleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: 12,
    resizeMode: 'contain',
  },
  ruleText: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },
});
