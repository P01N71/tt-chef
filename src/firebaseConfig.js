// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCbbXKf-iQiL3mT7ozMYRWsDLxXgMvpIs",
  authDomain: "tt-chef.firebaseapp.com",
  projectId: "tt-chef",
  storageBucket: "tt-chef.firebasestorage.app",
  messagingSenderId: "127044893835",
  appId: "1:127044893835:web:dbec1328fd97be28a9688e",
  measurementId: "G-JNLPD858XC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 👇 [이 부분이 빠져서 에러가 난 겁니다!]
// db 변수 앞에 'export'를 꼭 붙여줘야 다른 파일에서 가져다 쓸 수 있습니다.
export const db = getFirestore(app);