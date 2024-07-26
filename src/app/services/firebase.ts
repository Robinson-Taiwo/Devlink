import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQRHSCWmth3Hdlo2X9IqlubSQxxwRFNNs",
  authDomain: "devlinks-f19c1.firebaseapp.com",
  projectId: "devlinks-f19c1",
  storageBucket: "devlinks-f19c1.appspot.com",
  messagingSenderId: "193672576533",
  appId: "1:193672576533:web:dc39b2fec27c42aea1d81c",
  measurementId: "G-5YKZ2YS7ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Check if analytics is supported
isSupported().then((supported) => {
  if (supported) {
    const analytics = getAnalytics(app);
  } else {
    console.log("Firebase Analytics is not supported in this environment.");
  }
});

export const auth = getAuth(app);
