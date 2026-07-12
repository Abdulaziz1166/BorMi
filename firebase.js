import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPNsdIPs93TNl92Xpawcg6VV3T6KXypdk",
  authDomain: "bormi-e7de0.firebaseapp.com",
  projectId: "bormi-e7de0",
  storageBucket: "bormi-e7de0.firebasestorage.app",
  messagingSenderId: "196690421726",
  appId: "1:196690421726:web:8e4d498a323ad3b551df4f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

console.log("✅ Firebase muvaffaqiyatli ulandi!");
