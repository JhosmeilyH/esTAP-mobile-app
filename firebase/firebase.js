import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAORA95x1oAFVnAn1pn4B19lpri0SmcXm4",
  authDomain: "estap-7bee5.firebaseapp.com",
  databaseURL: "https://estap-7bee5-default-rtdb.firebaseio.com",
  projectId: "estap-7bee5",
  storageBucket: "estap-7bee5.firebasestorage.app",
  messagingSenderId: "391129533527",
  appId: "1:391129533527:web:7a2678f8d4834199a6671"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
