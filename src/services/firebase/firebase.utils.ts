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
import { DefinitionTopic, DefinitionType } from '../types/definition';

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
// Will call all the defintions
export const getAllDefintions = async (): Promise<DefinitionType[]> => {
    try {
      const defRef = doc(db, 'Definitions', "A76ShyQVsiaTIFf8NBgC");
      const definitionsSnapshot = await getDoc(defRef);
  
      if (definitionsSnapshot.exists()) {
        const defsData = definitionsSnapshot.data();
        const definitions: DefinitionType[] = defsData.definitions || [];
        return definitions;
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
      console.error('Error adding UseCases to Firestore:', error);
    }
};

export const DUMMY_DEFINITIONS: DefinitionType[] = [
    {
        id: uuidv4(),
        title: "HPC (High Performance Computing)",
        body: "High-performance computing (HPC) involves the use of powerful computing resources to perform computationally demanding tasks that are beyond the capability of traditional computing systems. HPC is used to process large datasets, perform simulations, and run resource-intensive applications, such as modelling climate patterns, simulating molecular behaviour, analysing genetic data, designing and testing products and structures, simulating fluid dynamics, optimizing manufacturing processes, identifying trends, and making predictions. HPC allows processing and analysis of complex data, leading to faster discoveries, more efficient processes, and better decision-making.",
        link: "https://google.com",
        linkTitle: "HPC",
        topic: [DefinitionTopic.Components]
    },
    {
        id: uuidv4(),
        title: "Virtual Machine",
        body: "A virtual machine (VM) is a software environment that emulates a physical computer, including hardware components such as a CPU, memory, and storage. VMs are commonly used in HPC to create isolated environments for running scientific applications, providing users with the flexibility to customize and configure the environment to their specific needs without interfering with other users or applications running on the same hardware.",
        link: "https://google.com",
        linkTitle: "Virtual Machine",
        topic: [DefinitionTopic.Components]
    },
    {
        id: uuidv4(),
        title: "CPU (Central Processing Unit)",
        body: "The CPU (Central Processing Unit) is the primary component of a computer that performs arithmetic, logic, and input/output operations. It is often referred to as the 'brain' of the computer. HPC systems typically use multiple CPUs or multicore processors to perform large-scale calculations in parallel, allowing for much faster processing of data and computation than can be achieved with a single CPU.",
        link: "https://google.com",
        linkTitle: "CPU",
        topic: [DefinitionTopic.Components, DefinitionTopic.Software]
    },
    {
        id: uuidv4(),
        title: "GPU (Graphics Processing Unit)",
        body: "The GPU (Graphics Processing Unit) is a specialized processor optimized for parallelizable tasks, such as image processing, scientific simulations, and machine learning. Unlike a CPU, which is optimized for single-threaded performance, a GPU can perform many computations simultaneously, making it ideal for the large-scale data processing needed in HPC. GPUs can be used alone or with CPUs to accelerate specific calculations, and many HPC systems have numerous GPUs to achieve maximum computational power.",
        link: "https://google.com",
        linkTitle: "GPU",
        topic: [DefinitionTopic.Components, DefinitionTopic.Software]
    },
    {
        id: uuidv4(),
        title: "Command Line",
        body: "The command-line is a text-based interface used to interact with a computer system or program. Users enter commands and parameters to execute operations, typically without the use of a graphical user interface.",
        link: "https://google.com",
        linkTitle: "Command Line",
        topic: [DefinitionTopic.Components, DefinitionTopic.SomethingElse]
    },
    {
        id: uuidv4(),
        title: "GUI (Graphical User Interface)",
        body: "GUI (Graphical User Interface) is a type of user interface that uses visual representations of controls and elements to interact with a computer program or system. It allows users to interact with software in a more intuitive and user-friendly way compared to command-line interfaces.",
        link: "https://google.com",
        linkTitle: "GUI",
        topic: [DefinitionTopic.Components, DefinitionTopic.Software]
    },
    {
        id: uuidv4(),
        title: "Linux",
        body: "Linux is a popular open-source operating system based on the Unix operating system. It is widely used in HPC environments due to its flexibility, performance, and ability to be customized for specific use cases.",
        link: "https://google.com",
        linkTitle: "Linux",
        topic: [DefinitionTopic.Software]
    },
    {
        id: uuidv4(),
        title: "Cluster",
        body: "A cluster is a group of computers that are connected to work as a single system. It is often used in HPC to distribute workloads across multiple systems to increase performance and processing power.",
        link: "https://google.com",
        linkTitle: "Cluster",
        topic: [DefinitionTopic.Software, DefinitionTopic.SomethingElse]
    },
    {
        id: uuidv4(),
        title: "Node",
        body: "In the context of a cluster, a node is a single computer within the cluster that performs computations and communicates with other nodes in the cluster.",
        link: "https://google.com",
        linkTitle: "Node",
        topic: [DefinitionTopic.Components, DefinitionTopic.SomethingElse]
    },
    {
        id: uuidv4(),
        title: "Containerisation",
        body: "Containerisation refers to the process of creating isolated software environments that contain all the necessary dependencies and configurations needed to run an application. Containers provide a lightweight and portable solution for deploying applications across different HPC systems without the need to modify the underlying operating system. This makes it easier to share and reproduce software environments and enables more efficient use of HPC resources by allowing multiple applications to run on the same node without interfering with each other.",
        link: "https://google.com",
        linkTitle: "Containerisation",
        topic: [DefinitionTopic.SomethingElse]
    },
    {
        id: uuidv4(),
        title: "Parallel Processing",
        body: "Parallel processing is the technique of dividing a single task into smaller parts that can be executed simultaneously on multiple processors or computing systems. It is often used in HPC to speed up computations and increase efficiency.",
        link: "https://google.com",
        linkTitle: "Parallel Processing",
        topic: [DefinitionTopic.Software, DefinitionTopic.SomethingElse]
    },
    {
        id: uuidv4(),
        title: "FLOPS (Floating-Point Operations Per Second)",
        body: "FLOPS (Floating-Point Operations Per Second) is a measure of a computer's processing power, specifically its ability to perform floating-point arithmetic operations. FLOPS is a common metric used to compare the performance of different supercomputers or processors. The higher the FLOPS rating, the faster the computer can perform calculations. HPC systems are designed to achieve very high FLOPS ratings, often in the millions or billions, to provide the processing power necessary for cutting-edge research and analysis.",
        link: "https://google.com",
        linkTitle: "FLOPS",
        topic: [DefinitionTopic.SomethingElse, DefinitionTopic.Components]
    },
    {
        id: uuidv4(),
        title: "Petascale and Exascale Computing",
        body: "Petascale and exascale computing refer to the ability to perform one quadrillion (10^15) and one quintillion (10^18) calculations per second, respectively. These levels of performance are achieved using HPC systems with thousands or millions of processors working in parallel.",
        link: "https://google.com",
        linkTitle: "Petascale and Exascale Computing",
        topic: [DefinitionTopic.Components]
    },
]
export const addDefinitions = async () => {
    try {
      await setDoc(doc(db, 'Definitions', "A76ShyQVsiaTIFf8NBgC"),{definitions: DUMMY_DEFINITIONS});
      console.log('Definitions added to Firestore successfully!');
    } catch (error) {
      console.error('Error adding Definitions to Firestore:', error);
    }
};
  