import { initializeApp } from 'firebase/app';

// For authentication
// import { getAuth, signInWithRedirect } from 'firebase/auth';

// For the firestore
import {getFirestore, getDocs, collection} from 'firebase/firestore'
import { firebaseConfig } from './firebaseConfig';
import { HPC } from '../types/hpc';
import { Step } from '../types/introduction';



  

const firebaseApp = initializeApp(firebaseConfig);

// Init the DB
export const db = getFirestore();

// Will call all the HPCs data
export const getAllHPCs = async (): Promise<HPC[]> => {
    const querySnapshot = await getDocs(collection(db, 'HPCs'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as HPC[];
};

// Will call all the HPCs data
export const getAllIntroduction = async (): Promise<Step[]> => {
    const querySnapshot = await getDocs(collection(db, 'Introduction'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Step[];
};