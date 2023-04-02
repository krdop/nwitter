import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 인증모듈을 사용하기 위해 import
import { getFirestore } from "firebase/firestore"; // import "firebase/firestore"; 대신 사용
import { getStorage } from "firebase/storage";




const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

  const app = initializeApp(firebaseConfig);
  

  export const firebaseInstance = firebase;
  export const authService = getAuth(); // 파이어베이스 V9부터 firebase.auth();에서 getAuth()로 바뀜
  export const dbService = getFirestore(); // 파이어베이스 V9부터 firebase.firestore();에서 getFirestore()로 바뀜
  export const storageService = getStorage(); // 파이어베이스 V9부터 firebase.getstorage();에서 getStorage()로 바뀜
