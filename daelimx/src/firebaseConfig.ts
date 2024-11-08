// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw8b09NZybzIEPHqbFOBVaNj93NQbMbAY",
  authDomain: "daelimx-c2eff.firebaseapp.com",
  projectId: "daelimx-c2eff",
  storageBucket: "daelimx-c2eff.appspot.com",
  messagingSenderId: "373035646722",
  appId: "1:373035646722:web:c1102d173fc21cb4b44c1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 파이어베이스 인증 정보
export const auth = getAuth(app);
// 파이어베이스 DB(firestore) 정보
export const firestore = getFirestore(app);
