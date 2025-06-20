 // Import the functions you need from the SDKs you need
//  import '../../envConfig.ts'
 import { initializeApp} from "firebase/app";
 import { getDatabase } from "firebase/database";

 const firebaseConfig = {
     apiKey: process.env.FIREBASE_APIKEY,
     authDomain: process.env.FIREBASE_AUTHDOMAIN,
     databaseURL: process.env.FIREBASE_DATABASEURL,
     projectId: process.env.FIREBASE_PROJECTID,
     storageBucket: process.env.FIREBASE_STORAGEBUCKET,
     messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
     appId: process.env.FIREBASE_APPID,
 };
 console.log("firebaseConfig = ")
 console.log(firebaseConfig)
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app);

 export {
    app,
    database
}
