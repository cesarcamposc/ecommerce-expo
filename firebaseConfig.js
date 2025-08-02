// Import the functions you need from the SDKs you need

import { browserLocalPersistence, initializeAuth, setPersistence } from "firebase/auth";

import { Platform } from "react-native";
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrt7RV7Fr900trfEgxBniKoQKBL4nT68c",
  authDomain: "ecommerce-expo-23d15.firebaseapp.com",
  projectId: "ecommerce-expo-23d15",
  storageBucket: "ecommerce-expo-23d15.firebasestorage.app",
  messagingSenderId: "880920164147",
  appId: "1:880920164147:web:9103b959aae5cbf0edb046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let auth;
if(Platform.OS === 'android'){
    auth = initializeAuth(app);
    setPersistence(auth, {
        type: 'LOCAL',
        storage: AsyncStorage,
    });    
}else{
    auth = initializeAuth(app);
    setPersistence(auth, browserLocalPersistence);
}

const db = initializeFirestore(app,{
    experimentalForceLongPolling: true,
})

export { auth, db};