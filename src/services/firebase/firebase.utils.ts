import { initializeApp } from 'firebase/app';

// For authentication
// import { getAuth, signInWithRedirect } from 'firebase/auth';

// For the firestore
import {getFirestore, getDocs, collection,setDoc, doc, getDoc, } from 'firebase/firestore'
import { firebaseConfig } from './firebaseConfig';
import { HPC } from '../types/hpc';
import { Step } from '../types/introduction';
import { DUMMY_DATA } from '../context/questionnaire/question-context';
import { QuestionType } from '../types/questions';

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


// Will call all the questions
export const getAllQuestions = async (): Promise<QuestionType[]> => {
    try {
      const questionRef = doc(db, 'Questions', 'GQP9Ra2sJNJnEUD34rtl');
      const questionSnapshot = await getDoc(questionRef);
  
      if (questionSnapshot.exists()) {
        const questionData = questionSnapshot.data();
        const questions: QuestionType[] = questionData.questions || [];
        return questions;
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error fetching question from Firestore:', error);
      return [];
    }
  };
    


// Add colelctions
export const addQuestions = async () => {
    try {
      await setDoc(doc(db, 'Questions', "GQP9Ra2sJNJnEUD34rtl"),{questions: DUMMY_DATA});
      console.log('Questions added to Firestore successfully!');
    } catch (error) {
      console.error('Error adding questions to Firestore:', error);
    }
  };
  
  