// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSfnWatqjUz2qvHgiWsGSWeMpqfmRalVQ",
  authDomain: "crudapp-a0521.firebaseapp.com",
  databaseURL: "https://crudapp-a0521-default-rtdb.firebaseio.com",
  projectId: "crudapp-a0521",
  storageBucket: "crudapp-a0521.appspot.com",
  messagingSenderId: "660850920793",
  appId: "1:660850920793:web:ecc3f4f5a82c874f421048",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
