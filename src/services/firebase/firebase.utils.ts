import { initializeApp } from "firebase/app";

// For authentication
// import { getAuth, signInWithRedirect } from 'firebase/auth';

// For the firestore
import {
  getFirestore,
  getDocs,
  collection,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";
import { AllHPC, HPCIntroductionType } from "../types/hpc/hpc";
import { Step } from "../types/introduction";
import { DUMMY_DATA } from "../context/questionnaire/question-context";
import { QuestionType } from "../types/questions";
import {  UseCasesType } from "../types/usecases";

// deleting later
import { v4 as uuidv4 } from "uuid";
import { DefinitionTopic, DefinitionType } from "../types/definition";
import { DUMMY_HPC_CATEGORY } from "../types/hpc/constant";
import { DUMMY_CASES, DUMMY_DEFINITIONS } from "./constants";

const firebaseApp = initializeApp(firebaseConfig);

// Init the DB
export const db = getFirestore();

// Will call all the HPCs data
// export const getAllHPCs = async (): Promise<HPC[]> => {
//   const querySnapshot = await getDocs(collection(db, "HPCs"));
//   return querySnapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   })) as HPC[];
// };

// Will call all the HPCs data
export const getAllIntroduction = async (): Promise<Step[]> => {
  const querySnapshot = await getDocs(collection(db, "Introduction"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Step[];
};

// Will call all the questions
export const getAllQuestions = async (): Promise<QuestionType[]> => {
  try {
    const questionRef = doc(db, "Questions", "GQP9Ra2sJNJnEUD34rtl");
    const questionSnapshot = await getDoc(questionRef);

    if (questionSnapshot.exists()) {
      const questionData = questionSnapshot.data();
      const questions: QuestionType[] = questionData.questions || [];
      return questions;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching question from Firestore:", error);
    return [];
  }
};

// Will call all the usecases
export const getAllUseCasess = async (): Promise<UseCasesType[]> => {
  try {
    const casesRef = doc(db, "UseCases", "iMuRgApvLPa91JADFOWw");
    const casesSnapshot = await getDoc(casesRef);

    if (casesSnapshot.exists()) {
      const casesData = casesSnapshot.data();
      const cases: UseCasesType[] = casesData.useCases || [];
      return cases;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching usecases from Firestore:", error);
    return [];
  }
};
// Will call all the defintions
export const getAllDefintions = async (): Promise<DefinitionType[]> => {
  try {
    const defRef = doc(db, "Definitions", "A76ShyQVsiaTIFf8NBgC");
    const definitionsSnapshot = await getDoc(defRef);

    if (definitionsSnapshot.exists()) {
      const defsData = definitionsSnapshot.data();
      const definitions: DefinitionType[] = defsData.definitions || [];
      return definitions;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching usecases from Firestore:", error);
    return [];
  }
};

// Will call all the System categories
export const getAllSystemCategories = async (): Promise<HPCIntroductionType[]> => {
  try {
    const catRef = doc(db, "SystemCategories", "tfCr1dFh5vqKTcfaacwQ");
    const categoriesSnapshot = await getDoc(catRef);

    if (categoriesSnapshot.exists()) {
      const catsData = categoriesSnapshot.data();
      const categories: HPCIntroductionType[] = catsData.categoires || [];
      return categories;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching categories from Firestore:", error);
    return [];
  }
};

// Add colelctions
export const addQuestions = async () => {
  try {
    await setDoc(doc(db, "Questions", "GQP9Ra2sJNJnEUD34rtl"), {
      questions: DUMMY_DATA,
    });
    console.log("Questions added to Firestore successfully!");
  } catch (error) {
    console.error("Error adding questions to Firestore:", error);
  }
};


export const addCases = async () => {
  try {
    await setDoc(doc(db, "UseCases", "iMuRgApvLPa91JADFOWw"), {
      useCases: DUMMY_CASES,
    });
    console.log("UseCases added to Firestore successfully!");
  } catch (error) {
    console.error("Error adding UseCases to Firestore:", error);
  }
};


export const addDefinitions = async () => {
  try {
    await setDoc(doc(db, "Definitions", "A76ShyQVsiaTIFf8NBgC"), {
      definitions: DUMMY_DEFINITIONS,
    });
    console.log("Definitions added to Firestore successfully!");
  } catch (error) {
    console.error("Error adding Definitions to Firestore:", error);
  }
};


export const addSystemCategories = async () => {
  try {
    await setDoc(doc(db, "SystemCategories", "tfCr1dFh5vqKTcfaacwQ"), {
      categoires: DUMMY_HPC_CATEGORY,
    });
    console.log("Categories added to Firestore successfully!");
  } catch (error) {
    console.error("Error adding Categories to Firestore:", error);
  }
};
