// https://console.firebase.google.com/
// Serving the back end

import { initializeApp } from "firebase/app";

// For authentication

// For the firestore
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";
import { HPCCategoryType, HPCIntroductionType, HPCType } from "../types/hpc/hpc";
import { INTRODUCTION_DATA, Step } from "../types/introduction";
import {  UseCasesType } from "../types/usecases";

import { DefinitionType } from "../types/definition";
import { ALL_HPCS_DATA, DUMMY_HPC_CATEGORY, SYSTEM_DATA } from "../types/hpc/constant";
import { DUMMY_CASES, DUMMY_DEFINITIONS } from "./constants";
import SURVEY_DATA, { SurveyType } from "src/pages/platform-pages/quiz/components/quiz/constants";

const firebaseApp = initializeApp(firebaseConfig);

// Init the DB
export const db = getFirestore();



// Will call all the Survey data
export const getAllSurvey = async (): Promise<SurveyType | null> => {
  try {
    const surveyRef = doc(db, "Survey", "i7d54LLqVZnapNNskOfn");
    const surveySnapshot = await getDoc(surveyRef);

    if (surveySnapshot.exists()) {
      const surveyData = surveySnapshot.data();
      const survey: SurveyType = surveyData.survey || null;
      return survey;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching Survey from Firestore:", error);
    return null;
  }
};
// Will call all the HPCs data
export const getAllHPCs = async (): Promise<HPCType[]> => {
  try {
    const hpcsRef = doc(db, "HPCs", "uhnO1m0Nweyuk1GD8GX9");
    const hpcsSnapshot = await getDoc(hpcsRef);

    if (hpcsSnapshot.exists()) {
      const hpcsData = hpcsSnapshot.data();
      const hpcs: HPCType[] = hpcsData.hpcs || [];
      return hpcs;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching HPCs from Firestore:", error);
    return [];
  }
};
// Will call all the Introduction data
export const getAllIntroduction = async (): Promise<Step[]> => {
  try {
    const defRef = doc(db, "Introduction", "OXdSuMBzljrkq486FUlH");
    const introductionSnapshot = await getDoc(defRef);

    if (introductionSnapshot.exists()) {
      const introData = introductionSnapshot.data();
      const introduction: Step[] = introData.introduction || [];
      return introduction;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching introduction from Firestore:", error);
    return [];
  }
};
// Will call all the Introduction data
export const getAllSystemData = async (): Promise<HPCCategoryType[]> => {
  try {
    const systemRef = doc(db, "SystemData", "FHmyx9w3tkdmDFylEZ2B");
    const systemDataSnapshot = await getDoc(systemRef);

    if (systemDataSnapshot.exists()) {
      const systemDataData = systemDataSnapshot.data();
      const systemData: HPCCategoryType[] = systemDataData.systemData || [];
      return systemData;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching System Data from Firestore:", error);
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



export const addIntorduction = async () => {
  try {
    await setDoc(doc(db, "Introduction", "OXdSuMBzljrkq486FUlH"), {
      introduction: INTRODUCTION_DATA,
    });
    console.log("Introduction added to Firestore successfully!");
  } catch (error) {
    console.error("Error adding Introduction to Firestore:", error);
  }
};

export const addSystemData = async () => {
  try {
    await setDoc(doc(db, "SystemData", "FHmyx9w3tkdmDFylEZ2B"), {
      systemData: SYSTEM_DATA,
    });
    console.log("System data added to Firestore successfully!");
  } catch (error) {
    console.error("Error adding System data to Firestore:", error);
  }
};
export const addHPCs = async () => {
  try {
    await setDoc(doc(db, "HPCs", "uhnO1m0Nweyuk1GD8GX9"), {
      hpcs: ALL_HPCS_DATA,
    });
    console.log("HPCs data added to Firestore successfully!");
  } catch (error) {
    console.error("Error adding HPCs data to Firestore:", error);
  }
};

export const addSurvey = async () => {
  try {
    await setDoc(doc(db, "Survey", "i7d54LLqVZnapNNskOfn"), {
      survey: SURVEY_DATA,
    });
    console.log("Survey data added to Firestore successfully!");
  } catch (error) {
    console.error("Error adding Survey data to Firestore:", error);
  }
};
