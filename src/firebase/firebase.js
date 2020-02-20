import firebase from 'firebase/app';
import "firebase/database";


export const DB_CONFIG = {
  apiKey: "AIzaSyDgF8qdwPssJD27XNeOVduZ3OQ3whVEhU8",
  authDomain: "my-web-d6102.firebaseapp.com",
  databaseURL: "https://my-web-d6102.firebaseio.com",
  projectId: "my-web-d6102",
  storageBucket: "my-web-d6102.appspot.com",
  messagingSenderId: "657463554959",
  appId: "1:657463554959:web:309e02485642b7467791fa",
  measurementId: "G-V4X0HHLT33"
}

const app = firebase.initializeApp(DB_CONFIG);

export default app;
