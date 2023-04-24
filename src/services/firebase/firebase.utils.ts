import { initializeApp } from 'firebase/app';

// For authentication
// import { getAuth, signInWithRedirect } from 'firebase/auth';

// For the firestore
import {getFirestore, getDocs, collection} from 'firebase/firestore'
import { HPC } from '../types/hpc';

const firebaseConfig = {
    apiKey: "AIzaSyCQy4zX3s1Emy5Me2I8ZEnuEh_SfFv1wVI",
    authDomain: "claaudia-204.firebaseapp.com",
    projectId: "claaudia-204",
    storageBucket: "claaudia-204.appspot.com",
    messagingSenderId: "211591072186",
    appId: "1:211591072186:web:930a47dcc0fda403b73583"
  };
  

const firebaseApp = initializeApp(firebaseConfig);

// Init the DB
export const db = getFirestore();

export const getAllHPCs = async (): Promise<HPC[]> => {
    const querySnapshot = await getDocs(collection(db, 'HPCs'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as HPC[];
};