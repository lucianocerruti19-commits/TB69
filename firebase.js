// ===== FIREBASE CONFIG - TUTTO SISTEMA =====

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore, enableIndexedDbPersistence } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCa-R6z76qoMt6Wf9EZFSqqGNY8U4JUMtM",
  authDomain: "menu-pro-app.firebaseapp.com",
  projectId: "menu-pro-app",
  storageBucket: "menu-pro-app.firebasestorage.app",
  messagingSenderId: "42917274964",
  appId: "1:42917274964:web:13e161810ad195718994c1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔥 Activa modo offline automático
enableIndexedDbPersistence(db).catch(() => {
  console.log("Persistencia offline no disponible");
});

export { db };