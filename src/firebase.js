import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDVcDHGcMEQjyfg0surn4UtAIAeh1Ioy4A",
  authDomain: "sewage-gas.firebaseapp.com",
  projectId: "sewage-gas",
  storageBucket: "sewage-gas.appspot.com",
  messagingSenderId: "45788421713",
  appId: "1:45788421713:web:8cc839c3d22295263ea270"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const database = getDatabase(app);
export default app;