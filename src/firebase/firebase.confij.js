// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC659hgmctzdo14ToeHc3jaEs_1I4ywBM8",
  authDomain: "my-first-projeccars-doctort.firebaseapp.com",
  projectId: "my-first-projeccars-doctort",
  storageBucket: "my-first-projeccars-doctort.appspot.com",
  messagingSenderId: "962733715831",
  appId: "1:962733715831:web:b780b9c77a28b56800b172",
};
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;