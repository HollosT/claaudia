import { initializeApp } from 'firebase/app';

// For authentication
// import { getAuth, signInWithRedirect } from 'firebase/auth';

// For the firestore
import {getFirestore, getDocs, collection,setDoc, doc, getDoc, } from 'firebase/firestore'
import { firebaseConfig } from './firebaseConfig';
import { AllHPC, HPC } from '../types/hpc';
import { Step } from '../types/introduction';
import { DUMMY_DATA } from '../context/questionnaire/question-context';
import { QuestionType } from '../types/questions';
import { UseCasesType } from '../types/usecases';

// deleting later
import { v4 as uuidv4} from 'uuid'

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

// Will call all the usecases
export const getAllUseCasess = async (): Promise<UseCasesType[]> => {
    try {
      const casesRef = doc(db, 'UseCases', "iMuRgApvLPa91JADFOWw");
      const casesSnapshot = await getDoc(casesRef);
  
      if (casesSnapshot.exists()) {
        const casesData = casesSnapshot.data();
        const cases: UseCasesType[] = casesData.useCases || [];
        return cases;
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error fetching usecases from Firestore:', error);
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


export const DUMMY_CASES: UseCasesType[]  = [
    {
        id: uuidv4(),
        type: "AI Cloud",
        title: "Natural language processing: The way how ChatGPT was created",
        hpcs: [AllHPC.AiCloud],
        features: [
            {
                feature: "Powerful GPU processinig"
            },
            {
                feature: "Data levels 0 and 1"
            },
            {
                feature: "Powerful GPU processinig"
            },
        ],
        body: "AI Cloud is a great tool for training large language models – thanks to the powerful GPU processors it provides, it is possible to accelerate various cloud workloads via parallel data processing. Consider AI Cloud when working with sequence language processing or image processing – remember that AI Cloud is suitable for data levels 0 and 1, which means no sensitive or confidential data can be included in your analysis process."
    },
    {
        id: uuidv4(),
        type: "AI Cloud buy-in",
        title: "Deep learning: Involve large data sets in GPU-intensive processes",
        hpcs: [AllHPC.AiCloud, AllHPC.AiCloudBuyIn],
        features: [
            {
                feature: "Powerful GPU processinig"
            },
            {
                feature: "Data levels 0 and 1"
            },
            {
                feature: "Powerful GPU processinig"
            },
        ],
        body: "AI Cloud buy-in offers the opportunity to purchase the hardware that best suits your needs and to include it in the AI Cloud platform. It is convenient for transformer methods in deep learning, particularly when the analysis requires processing of exceptionally large datasets– particularly image or high definition video data. In this scenario, a good practice would be to run sample analysis on a smaller scale, and to benchmark your processing needs. AI Cloud buy-in is suitable for data levels 0 and 1."
    },
    {
        id: uuidv4(),
        type: "AI Cloud projects",
        title: "A solution for analysis of sensitive and confidential data involving GPU",
        hpcs: [AllHPC.AiCloud, AllHPC.AiCloudProjects],
        features: [
            {
                feature: "Powerful GPU processinig"
            },
            {
                feature: "Data levels 0 and 1"
            },
            {
                feature: "Powerful GPU processinig"
            },
        ],
        body: "AI Cloud Projects is the most fitting choice when it comes to intensive parallel processing with sensitive or confidential data, as this option can be tailored to suit for all data levels. Resources can be extracted from AI Cloud and isolated for a limited period of time, and . Remember that as you get to work with this machine, you have a restricted access to it, and there is a limited time within you can use it with a minimum of 1 month."
    },
    {
        id: uuidv4(),
        type: "Strato regular",
        title: "Graph data management: Build large knowledge graphs just like Google",
        hpcs: [AllHPC.StratoRegular],
        features: [
            {
                feature: "Powerful GPU processinig"
            },
            {
                feature: "Data levels 0 and 1"
            },
            {
                feature: "Powerful GPU processinig"
            },
        ],
        body: "Strato is a good choice for CPU-intensive processes. It allows for explorative research thanks to its interactive environment - for example running queries or specialized algorithms or working on descriptive data exploration. The platform is suitable for individual and internal collaborative projects, and for developing code that can later be scaled up for more powerful compute options. Strato is relevant for data levels 0 and 1."
    },
    {
        id: uuidv4(),
        type: "Strato projects (With and without GPU access)",
        title: "Synthetic data generation and probabilistic graphical model: Integrates the power of CPU and GPU",
        hpcs: [AllHPC.StratoRegular ,AllHPC.StratoProjects],
        features: [
            {
                feature: "Powerful GPU processinig"
            },
            {
                feature: "Data levels 0 and 1"
            },
            {
                feature: "Powerful GPU processinig"
            },
        ],
        body: "Strato Projects is a great solution for those who work with machine learning and need to run their experiments on servers with many CPU cores, for example for creating synthetic data. For some methods, just like probabilistic graphical models, you can take the advantage of the GPU available on this system and run the algorithms effectively. Strato Projects is relevant for data levels 0 and 1."
    },
    {
        id: uuidv4(),
        type: "Strato buy-in",
        title: "Carry out your research in interactive environment with the hardware of your choice",
        hpcs: [AllHPC.StratoRegular, AllHPC.StratoBuyIn],
        features: [
            {
                feature: "Powerful GPU processinig"
            },
            {
                feature: "Data levels 0 and 1"
            },
            {
                feature: "Powerful GPU processinig"
            },
        ],
        body: "Strato buy-in is a great for those whose projects require the interactivity of the Strato virtual machines’ environment but at the same time working with large amount of data. Starto buy-in enables you to add the hardware you need, so you can specify your own needs, which will be connected to the system. There is no time limited for one to use this option, neither there is a minimum time requirement. The procurement and integration of hardware can take two to three months. Strato buy-in is limited to data levels 0 and 1."
    },
    
]
export const addCases = async () => {
    try {
      await setDoc(doc(db, 'UseCases', "iMuRgApvLPa91JADFOWw"),{useCases: DUMMY_CASES});
      console.log('UseCases added to Firestore successfully!');
    } catch (error) {
      console.error('UseCases adding questions to Firestore:', error);
    }
  };
  
  