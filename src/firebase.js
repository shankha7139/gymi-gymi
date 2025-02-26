import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApGeJeh3JygRVPEAk6WfxeKYMykx9fMCc",
  authDomain: "gymi-7779a.firebaseapp.com",
  projectId: "gymi-7779a",
  storageBucket: "gymi-7779a.firebasestorage.app",
  messagingSenderId: "715464565887",
  appId: "1:715464565887:web:c70c577cecf4ca19a44b4a",
  measurementId: "G-QVWKPNF605",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { auth, db, analytics };
