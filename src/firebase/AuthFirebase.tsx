import firebase, { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmQx7cTMTGh9zaluvy0vhk5ypYubYYyzM",
  authDomain: "perfilme-b4c93.firebaseapp.com",
  projectId: "perfilme-b4c93",
  storageBucket: "perfilme-b4c93.appspot.com",
  messagingSenderId: "864599878100",
  appId: "1:864599878100:web:8e65a4fbe731efc7aa0e41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
