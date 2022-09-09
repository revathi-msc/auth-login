import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAquCwtDknbO6tW0k4fevcSJnrmnjufgi4",
  authDomain: "phone-auth-70be1.firebaseapp.com",
  projectId: "phone-auth-70be1",
  storageBucket: "phone-auth-70be1.appspot.com",
  messagingSenderId: "240423390506",
  appId: "1:240423390506:web:8c597add06e2c3510a6253"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
