import {initializeApp} from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAlekKoBd-g8Bgst_zqZGMordQ4q-kQu6A",
  authDomain: "uber-clone-next-9b942.firebaseapp.com",
  projectId: "uber-clone-next-9b942",
  storageBucket: "uber-clone-next-9b942.appspot.com",
  messagingSenderId: "178039886890",
  appId: "1:178039886890:web:fe1984151c9d6694ffdf53",
  measurementId: "G-Y1B2GTGD29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider()

export { app, auth, provider }