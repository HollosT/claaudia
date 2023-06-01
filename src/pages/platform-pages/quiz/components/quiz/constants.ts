import { AllHPC } from "src/services/types/hpc/hpc";

 const data2 = {
  "pages": [
   {
    "name": "Q1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q1",
      "title": "Which data science area matches your project?",
      "choices": [
       {
        "value": "Q1.KPR",
        "progress": "8",
        "text": "Knowledge representation and reasoning"
       },
       {
        "value": "Q1.MLDLCV",
        "progress": "50",
        "text": "Machine learning and deep learning or Computer vision"
       },
       {
        "value": "Q1.All",
        "progress": "33",
        "text": "Natural language processing or Text and data mining or Simulation or Other"
       }
      ]
     }
    ]
   },
   {
    "name": "Q1.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q1.1",
      "title": "Is your project CPU-focused (are you going to run many independent tasks) or GPU-focused (are you going to have few tasks running together at once)?",
      "choices": [
       {
        "value": "Q1.1.CPU",
        "progress": "66",
        "text": "CPU-focused"
       },
       {
        "value": "Q1.1.GPU",
        "progress": "66",
        "text": "GPU-focused"
       },
       {
        "value": "Q1.1.Both",
        "progress": "66",
        "text": "It requires efficiency of both processors (CPU and GPU) equally"
       },
       {
        "value": "Q1.1.IDK",
        "progress": "66",
        "text": "I don't know"
       }
      ]
     }
    ],
    "visibleIf": "{Q1} = 'Q1.All'",
   },
   {
    "name": "Q2.a- page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.a",
      "title": "What kind of data levels are you working on?",
      "choices": [
       {
        "value": "Q2.a.0-1",
        "progress": "7",

        "text": "I’m only working on data levels 0, 1"
       },
       {
        "value": "Q2.a.2-3",
        "progress": "2",
        "text": "I will include data levels 2 , 3"
       }
      ]
     }
    ],
    "visibleIf": "{Q1} = 'Q1.KPR'",
   },
   {
    "name": "Q2.b - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.b",
      "progress": "100",
      "title": "What kind of data levels are you working on?",
      "choices": [
       {
        "value": "Q2.b.0-1",
        "progress": "100",
        "text": "I’m only working on data levels 0, 1"
       },
       {
        "value": "Q2.b.2-3",
        "progress": "100",
        "text": "I will include data levels 2 , 3"
       }
      ]
     }
    ],
    "visibleIf": "{Q1} = 'Q1.MLDLCV'",
   },
   {
    "name": "Q2.c - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.c",
      "progress": "100",
      "title": "What kind of data levels are you working on?",
      "choices": [
       {
        "value": "Q2.c.0-1",
        "progress": "100",
        "text": "I’m only working on data levels 0, 1"
       },
       {
        "value": "Q2.c.2-3",
        "progress": "100",
        "text": "I will include data levels 2 , 3"
       }
      ]
     }
    ],
    "visibleIf": "{Q1.1} = 'Q1.1.CPU'",
   },
   {
    "name": "Q2.d - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.d",
      "title": "What kind of data levels are you working on?",
      "choices": [
       {
        "value": "Q2.d.0-1",
      "progress": "100",

        "text": "I’m only working on data levels 0, 1"
       },
       {
        "value": "Q2.d.2-3",
      "progress": "100",

        "text": "I will include data levels 2 , 3"
       }
      ]
     }
    ],
    "visibleIf": "{Q1.1} = 'Q1.1.GPU'",
    "title": "Q2.d - page"
   },
   {
    "name": "Q2.e - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.e",
      "title": "What kind of data levels are you working on?",
      "choices": [
       {
        "value": "Q2.e.0-1",
      "progress": "100",

        "text": "I’m only working on data levels 0, 1"
       },
       {
        "value": "Q2.e.2-3",
      "progress": "100",

        "text": "I will include data levels 2 , 3"
       }
      ]
     }
    ],
    "visibleIf": "{Q1.1} = 'Q1.1.Both'",
    "title": "Q2.e - page"
   },
   {
    "name": "Q2.f - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.f",
      "title": "What kind of data levels are you working on?",
      "choices": [
       {
        "value": "Q2.f.0-1",
      "progress": "100",

        "text": "I’m only working on data levels 0, 1"
       },
       {
        "value": "Q2.f.2-3",
      "progress": "100",

        "text": "I will include data levels 2 , 3"
       }
      ]
     }
    ],
    "visibleIf": "{Q1.1} = 'Q1.1.IDK'",
    "title": "Q2.f - page"
   }
  ]
 }
//  "progress": "8",
//  "result": [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.AiCloud,AllHPC.AiCloudProjects, AllHPC.AiCloudBuyIn, AllHPC.UCloud, AllHPC.LocalMachine],


const data = {
  "title": "CLAAUDIA 2nd",
  "logoPosition": "right",
  "pages": [
   {
    "name": "Q1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q1",
      "title": "Which data science area matches your project?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q1.KPR",
        "progress": "8",
        "result": [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.UCloud, AllHPC.LocalMachine],
        "text": "Knowledge representation and reasoning"
       },
       {
        "value": "Q1.MLDLCV",
        "progress": "5",
        "result": [AllHPC.StratoBuyIn, AllHPC.AiCloud, AllHPC.AiCloudProjects, AllHPC.AiCloudBuyIn, AllHPC.LocalMachine],
        "text": "Machine learning and deep learning or Computer vision"
       },
       {
        "value": "Q1.All",
        "text": "Natural language processing or Text and data mining or Simulation or Other"
       }
      ]
     }
    ],
    "title": "Q1 - page"
   },
   {
    "name": "Q1.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q1.1",
      "title": "Is your project CPU-focused (are you going to run many independent tasks) or GPU-focused (are you going to have few tasks running together at once)?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q1.1.CPU",
        "text": "CPU-focused"
       },
       {
        "value": "Q1.1.GPU",
        "text": "GPU-focused"
       },
       {
        "value": "Q1.1.Both",
        "text": "It requires efficiency of both processors (CPU and GPU) equally"
       },
       {
        "value": "Q1.1.IDK",
        "text": "I don't know"
       }
      ]
     }
    ],
    "visibleIf": "{Q1} = 'Q1.All'",
    "title": "Q1.1 - page"
   },
   {
    "name": "Q2.a- page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.a",
      "title": "What kind of data levels are you working on?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q2.a.0-1",
        "progress": "7",
        "result": [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.UCloud, AllHPC.LocalMachine],
        "text": "I’m only working on data levels 0, 1"
       },
       {
        "value": "Q2.a.2-3",
        "progress": "2",
        "result": [AllHPC.UCloud, AllHPC.LocalMachine],
        "text": "I will include data levels 2 , 3"
       }
      ]
     }
    ],
    "visibleIf": "{Q1} = 'Q1.KPR'",
    "title": "Q2.a - page"
   },
   {
    "name": "Q2.a.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.a.1",
      "visibleIf": "{Q2.a} = 'Q2.a.2-3'",
      "title": "How much data will you need to upload onto the HPC system?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q2.a.1.256",
        "progress": "1",
        "result": [ AllHPC.UCloud, AllHPC.LocalMachine],        
        "text": "Up to 256 GB"
       },
       {
        "value": "Q2.a.1.+256",
        "progress": "0",
        "result": [ AllHPC.UCloud],     
        "text": "More than 256 GB"
       }
      ]
     }
    ],
    "title": "Q2.a.1 - page"
   },
   {
    "name": "Q2.a.1.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.a.1.1",
      "visibleIf": "{Q2.a.1} = 'Q2.a.1.256'",
      "title": "How much data will you load at once in your RAM?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q2.a.1.1.8",
        "progress": "0",
        "result": [AllHPC.LocalMachine],     
        "text": "Up to 8 GB"
       },
       {
        "value": "Q2.a.1.1.+8",
        "progress": "0",
        "result": [ AllHPC.UCloud],     
        "text": "More than 8 GB"
       }
      ]
     }
    ],
    "title": "Q2.a.1.1 - page"
   },
   {
    "name": "Q2.b - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.b",
      "title": "What kind of data levels are you working on?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q2.b.0-1",
        "progress": "4",
        "result": [AllHPC.StratoBuyIn, AllHPC.AiCloud, AllHPC.AiCloudBuyIn],
        "text": "I’m only working on data levels 0, 1"
       },
       {
        "value": "Q2.b.2-3",
        "progress": "1",
        "result": [ AllHPC.AiCloudProjects, AllHPC.AiCloudBuyIn],
        "text": "I will include data levels 2 , 3"
       }
      ]
     }
    ],
    "visibleIf": "{Q1} = 'Q1.MLDLCV'",
    "title": "Q2.b - page"
   },
   {
    "name": "Q2.b.1.a - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.b.1.a",
      "title": "Are you willing to pay for the HPC solution? (e.g. for the additional hardware components)",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q2.b.1.a.Yes",
        "progress": "3",
        "result": [AllHPC.StratoBuyIn, AllHPC.AiCloud, AllHPC.AiCloudBuyIn],
        "text": "Yes"
       },
       {
        "value": "Q2.b.1.a.No",
        "progress": "0",
        "result": [ AllHPC.AiCloud],
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q2.b} = 'Q2.b.0-1'",
    "title": "Q2.b.1.a - page"
   },
   {
    "name": "Q2.b.1.a.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.b.1.a.1",
      "title": "Would you like the HPC system to have GUI (graphical user interface)?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q2.b.1.a.1.Yes",
        "progress": "0",
        "result": [AllHPC.StratoBuyIn],
        "text": "Yes"
       },
       {
        "value": "Q2.b.1.a.1.No",
        "progress": "2",
        "result": [ AllHPC.AiCloud, AllHPC.AiCloudBuyIn],
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q2.b.1.a} = 'Q2.b.1.a.Yes'",
    "title": "Q2.b.1.a.1 - page"
   },
   {
    "name": "Q2.b.1.b - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.b.1.b",
      "title": "How many GPUs does your project require?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q2.b.1.b.4",
        "progress": "0",
        "result": [AllHPC.AiCloudProjects],
        "text": "Up to 4 GPUs"
       },
       {
        "value": "Q2.b.1.b.+4",
        "progress": "0",
        "result": [AllHPC.AiCloudBuyIn],
        "text": "More than 4 GPUs"
       }
      ]
     }
    ],
    "visibleIf": "{Q2.b} = 'Q2.b.2-3' or {Q2.d} = 'Q2.d.2-3'",
    "title": "Q2.b.1.b - page"
   },
   {
    "name": "Q2.b.1.a.1.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.b.1.a.1.1",
      "title": "How many GPUs does your project require?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q2.b.1.a.1.1.16",
        "progress": "1",
        "result": [AllHPC.AiCloudProjects, AllHPC.AiCloudBuyIn],
        "text": "Up to 16 GPUs"
       },
       {
        "value": "Q2.b.1.a.1.1.+16",
        "progress": "0",
        "result": [AllHPC.AiCloudBuyIn],
        "text": "More than 16 GPUs"
       },
       {
        "value": "Q2.b.1.a.1.1.IDK",
        "progress": "1",
        "result": [AllHPC.AiCloudProjects, AllHPC.AiCloudBuyIn],
        "text": "I don't know"
       }
      ]
     }
    ],
    "visibleIf": "{Q2.b.1.a.1} = 'Q2.b.1.a.1.No' or {Q2.d} = 'Q2.d.0-1'",
    "title": "Q2.b.1.a.1.1 - page"
   },
   {
    "name": "Q2.b.1.a.1.1.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.b.1.a.1.1.1",
      "title": "Would you like to have a prioritised access to the resources?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q2.b.1.a.1.1.1.Yes",
        "progress": "0",
        "result": [AllHPC.AiCloudBuyIn],
        "text": "Yes"
       },
       {
        "value": "Q2.b.1.a.1.1.1.No",
        "progress": "0",
        "result": [AllHPC.AiCloudProjects],
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q2.b.1.a.1.1} = 'Q2.b.1.a.1.1.16' or {Q2.b.1.a.1.1} = 'Q2.b.1.a.1.1.IDK'",
    "title": "Q2.b.1.a.1.1.1 - page"
   },
   {
    "name": "Q2.c - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.c",
      "title": "What kind of data levels are you working on?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q2.c.0-1",
        "text": "I’m only working on data levels 0, 1"
       },
       {
        "value": "Q2.c.2-3",
        "text": "I will include data levels 2 , 3"
       }
      ]
     }
    ],
    "visibleIf": "{Q1.1} = 'Q1.1.CPU'",
    "title": "Q2.c - page"
   },
   {
    "name": "Q2.d - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.d",
      "title": "What kind of data levels are you working on?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q2.d.0-1",
        "text": "I’m only working on data levels 0, 1"
       },
       {
        "value": "Q2.d.2-3",
        "text": "I will include data levels 2 , 3"
       }
      ]
     }
    ],
    "visibleIf": "{Q1.1} = 'Q1.1.GPU'",
    "title": "Q2.d - page"
   },
   {
    "name": "Q2.e - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.e",
      "title": "What kind of data levels are you working on?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q2.e.0-1",
        "text": "I’m only working on data levels 0, 1"
       },
       {
        "value": "Q2.e.2-3",
        "text": "I will include data levels 2 , 3"
       }
      ]
     }
    ],
    "visibleIf": "{Q1.1} = 'Q1.1.Both'",
    "title": "Q2.e - page"
   },
   {
    "name": "Q2.e.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.e.1",
      "title": "Are you willing to pay for the HPC solution? (e.g. for the additional hardware components)",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q2.e.1.0-1",
        "text": "Yes"
       },
       {
        "value": "Q2.e.1.2-3",
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q2.e} = 'Q2.e.0-1'",
    "title": "Q2.e.1 - page"
   },
   {
    "name": "Q2.e.1.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.e.1.1",
      "title": "Would you like the HPC system to have GUI (graphical user interface)?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q2.e.1.1.Yes",
        "text": "Yes"
       },
       {
        "value": "Q2.e.1.1.No",
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q2.e.1} = 'Q2.e.1.0-1'",
    "title": "Q2.e.1.1 - page"
   },
   {
    "name": "Q2.f - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.f",
      "visibleIf": "{Q1.1} = 'Q1.1.IDK'",
      "title": "What kind of data levels are you working on?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q2.f.0-1",
        "text": "I’m only working on data levels 0, 1"
       },
       {
        "value": "Q2.f.2-3",
        "text": "I will include data levels 2 , 3"
       }
      ]
     }
    ],
    "title": "Q2.f - page"
   },
   {
    "name": "Q3.a - pag",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.a",
      "title": "Do you have previous experience with HPC?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.a.No",
        "progress": "2",
        "result": [AllHPC.UCloud, AllHPC.LocalMachine],     
        "text": "I have no experience with HPC"
       },
       {
        "value": "Q3.a.Medium",
        "progress": "6",
        "result": [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.UCloud],     
        "text": "I have scarce/mediocre experience (I have understanding of Linux/command-line or/andI have worked with some HPCs from CLAAUDIA)"
       },
       {
        "value": "Q3.a.Advance",
        "progress": "6",
        "result": [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.UCloud],     
        "text": "I have vast experience (I have worked with system(s) from HPCs; programming skills, operating Linux terminal, understand containerisation concept, experience with command-line)"
       }
      ]
     }
    ],
    "visibleIf": "{Q2.a} = 'Q2.a.0-1'",
    "title": "Q3.a - page"
   },
   {
    "name": "Q3.a.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.a.1",
      "title": "How much data will you need to upload onto the HPC system?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.a.1.256",
        "progress": "1",
        "result": [AllHPC.UCloud, AllHPC.LocalMachine],     
        "text": "Up to 256 GB"
       },
       {
        "value": "Q3.a.1.+256",
        "progress": "0",
        "result": [ AllHPC.UCloud],     
        "text": "More than 256 GB"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.a} = 'Q3.a.No'",
    "title": "Q3.a.1 - page"
   },
   {
    "name": "Q3.a.1.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.a.1.1",
      "title": "How much data will you load at once in your RAM?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.a.1.1.8",
        "progress": "0",
        "result": [ AllHPC.LocalMachine],     
        "text": "Up to 8 GB"
       },
       {
        "value": "Q3.a.1.1.+8",
        "progress": "0",
        "result": [ AllHPC.UCloud],     
        "text": "More than 8 GB"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.a.1} = 'Q3.a.1.256'",
    "title": "Q3.a.1.1 - page"
   },
   {
    "name": "Q3.a.2 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.a.2",
      "title": "Are you going to utilise the HPC for teaching purposes?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.a.2.Yes",
        "progress": "0",
        "result": [AllHPC.StratoRegular],     
        "text": "Yes"
       },
       {
        "value": "Q3.a.2.No",
        "progress": "5",
        "result": [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.UCloud],     
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.a} = 'Q3.a.Medium' or {Q3.a} = 'Q3.a.Advance' or {Q3.b} = 'Q3.b.Medium' or {Q3.b} = 'Q3.b.Advance'",
    "title": "Q3.a.2 - page"
   },
   {
    "name": "Q3.a.2.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.a.2.1",
      "title": "Are you planning to collaborate on the project with other AAU students/researchers?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.a.2.1.Yes",
        "progress": "0",
        "result": [AllHPC.UCloud],     
        "text": "Yes"
       },
       {
        "value": "Q3.a.2.1.No",
        "progress": "4",
        "result": [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.UCloud],     
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.a.2} = 'Q3.a.2.No'",
    "title": "Q3.a.2.1 - page"
   },
   {
    "name": "Q3.a.2.1.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.a.2.1.1",
      "title": "Are you willing to pay for the HPC solution? (e.g. for the additional hardware components)?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.a.2.1.1.Yes",
        "progress": "3",
        "result": [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.UCloud],     
        "text": "Yes"
       },
       {
        "value": "Q3.a.2.1.1.No",
        "progress": "2",
        "result": [AllHPC.StratoRegular, AllHPC.StratoProjects,  AllHPC.UCloud],     
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.a.2.1} = 'Q3.a.2.1.No'",
    "title": "Q3.a.2.1.1 - page"
   },
   {
    "name": "Q3.a.2.1.1.a.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.a.2.1.1.a.1",
      "title": "Does your project require additional GPU?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.a.2.1.1.a.1.Yes",
        "progress": "2",
        "result": [AllHPC.StratoRegular, AllHPC.StratoBuyIn],     
        "text": "Yes"
       },
       {
        "value": "Q3.a.2.1.1.a.1.No",
        "progress": "1",
        "result": [AllHPC.StratoRegular, AllHPC.UCloud],  
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.a.2.1.1} = 'Q3.a.2.1.1.Yes'",
    "title": "Q3.a.2.1.1.a.1 - page"
   },
   {
    "name": "Q3.a.2.1.1.1.a - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.a.2.1.1.1.a",
      "title": "How many GPUs does your project require?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.a.2.1.1.1.a.6",
        "progress": "0",
        "result": [AllHPC.StratoProjects],  
        "text": "Up to 6 GPUs"
       },
       {
        "value": "Q3.a.2.1.1.1.a.+6",
        "progress": "0",
        "result": [AllHPC.StratoBuyIn],  
        "text": "More than 6 GPUs"
       },
       {
        "value": "Q3.a.2.1.1.1.a.IDK",
        "progress": "1",
        "result": [AllHPC.StratoProjects, AllHPC.StratoBuyIn],  
        "text": "I don't know"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.a.2.1.1.a.1} = 'Q3.a.2.1.1.a.1.Yes'",
    "title": "Q3.a.2.1.1.1.a - page"
   },
   {
    "name": "Q3.a.2.1.1.1.a.1- page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.a.2.1.1.1.a.1",
      "title": "Would you like to have a prioritised access to the resources?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.a.2.1.1.1.a.1.Yes",
        "progress": "0",
        "result": [ AllHPC.StratoBuyIn],  
        "text": "Yes"
       },
       {
        "value": "Q3.a.2.1.1.1.a.1.No",
        "progress": "0",
        "result": [ AllHPC.StratoProjects], 
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.a.2.1.1.1.a} = 'Q3.a.2.1.1.1.a.IDK'",
    "title": "Q3.a.2.1.1.1.a.1- page"
   },
   {
    "name": "Q3.a.2.1.1.b.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.a.2.1.1.b.1",
      "title": "Does your project require additional GPU?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.a.2.1.1.b.1.Yes",
        "progress": "0",
        "result": [ AllHPC.StratoRegular, AllHPC.UCloud], 
        "text": "Yes"
       },
       {
        "value": "Q3.a.2.1.1.b.1.No",
        "progress": "0",
        "result": [ AllHPC.StratoProjects], 
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.a.2.1.1} = 'Q3.a.2.1.1.No'",
    "title": "Q3.a.2.1.1.b.1 - page"
   },
   {
    "name": "Q3.a.2.1.1.1.b- page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.a.2.1.1.1.b",
      "title": "How much data will you need to upload onto the HPC system?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.a.2.1.1.1.b.5000",
        "progress": "0",
        "result": [ AllHPC.StratoRegular], 
        "text": "Up to 5000 GB"
       },
       {
        "value": "Q3.a.2.1.1.1.b.+5000",
        "progress": "0",
        "result": [ AllHPC.UCloud], 
        "text": "More than 5000 GB"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.a.2.1.1.a.1} = 'Q3.a.2.1.1.a.1.No' or {Q3.a.2.1.1.b.1} = 'Q3.a.2.1.1.b.1.Yes'",
    "title": "Q3.a.2.1.1.1.b- page"
   },
   {
    "name": "Q3.b - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.b",
      "title": "Do you have previous experience with HPC?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.b.No",
        "text": "I have no experience with HPC"
       },
       {
        "value": "Q3.b.Medium",
        "text": "I have scarce/mediocre experience (I have understanding of Linux/command-line or/andI have worked with some HPCs from CLAAUDIA)"
       },
       {
        "value": "Q3.b.Advance",
        "text": "I have vast experience (I have worked with system(s) from HPCs; programming skills, operating Linux terminal, understand containerisation concept, experience with command-line)"
       }
      ]
     }
    ],
    "visibleIf": "{Q2.c} = 'Q2.c.0-1'",
    "title": "Q3.b - page"
   },
   {
    "name": "Q3.b.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.b.1",
      "title": "How much data will you need to upload onto the HPC system?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.b.256",
        "text": "Up to 256 GB"
       },
       {
        "value": "Q3.b.+256",
        "text": "More than 256 GB"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.b} = 'Q3.b.No'",
    "title": "Q3.b.1 - page"
   },
   {
    "name": "Q3.b.1.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.b.1.1",
      "title": "How much data will you load at once in your RAM?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.b.1.1.8",
        "text": "Up to 8 GB"
       },
       {
        "value": "Q3.b.1.1.+8",
        "text": "More than 8 GB"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.b.1} = 'Q3.b.256'",
    "title": "Q3.b.1.1 - page"
   },
   {
    "name": "Q3.d - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.d",
      "title": "Do you have previous experience with HPC?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.d.No",
        "text": "I have no experience with HPC"
       },
       {
        "value": "Q3.d.Medium",
        "text": "I have scarce/mediocre experience (I have understanding of Linux/command-line or/andI have worked with some HPCs from CLAAUDIA)"
       },
       {
        "value": "Q3.d.Advance",
        "text": "I have vast experience (I have worked with system(s) from HPCs; programming skills, operating Linux terminal, understand containerisation concept, experience with command-line)"
       }
      ]
     }
    ],
    "visibleIf": "{Q2.f} = 'Q2.f.0-1'",
    "title": "Q3.d - page"
   },
   {
    "name": "Q3.d.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.d.1",
      "title": "How much data will you need to upload onto the HPC system?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.d.1.256",
        "text": "Up to 256 GB"
       },
       {
        "value": "Q3.d.1.+256",
        "text": "More than 256 GB"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.d} = 'Q3.d.No'",
    "title": "Q3.d.1 - page"
   },
   {
    "name": "Q3.d.1.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.d.1.1",
      "title": "How much data will you load at once in your RAM?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.d.1.1.8",
        "text": "Up to 8 GB"
       },
       {
        "value": "Q3.d.1.1.+8",
        "text": "More than 8 GB"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.d.1} = 'Q3.d.1.256'",
    "title": "Q3.d.1.1 - page"
   },
   {
    "name": "Q3.d.2 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.d.2",
      "title": "Are you proficient with Singularity containers?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.d.2.Yes",
        "text": "Yes"
       },
       {
        "value": "Q3.d.2.No",
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.d} = 'Q3.d.Medium' or {Q3.d} = 'Q3.d.Advance'",
    "title": "Q3.d.2 - page"
   },
   {
    "name": "Q3.d.2.a - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.d.2.a",
      "title": "Are you willing to pay for the HPC solution? (e.g. for the additional hardware components)",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.d.2.a.Yes",
        "text": "Yes"
       },
       {
        "value": "Q3.d.2.a.No",
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.d.2} = 'Q3.d.2.Yes'",
    "title": "Q3.d.2.a - page"
   },
   {
    "name": "Q3.d.2.a.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.d.2.a.1",
      "title": "Would you like the HPC system to have GUI (graphical user interface)",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.d.2.a.1.Yes",
        "text": "Yes"
       },
       {
        "value": "Q3.d.2.a.1.No",
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.d.2.a} = 'Q3.d.2.a.Yes'",
    "title": "Q3.d.2.a.1 - page"
   },
   {
    "name": "Q3.d.2.a.1.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.d.2.a.1.1",
      "title": "How much data will you need to upload onto the HPC system?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.d.2.a.1.1.1000",
        "text": "Up to 1000 GB"
       },
       {
        "value": "Q3.d.2.a.1.1.+1000",
        "text": "More than 1000 GB"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.d.2.a.1} = 'Q3.d.2.a.1.No'",
    "title": "Q3.d.2.a.1.1 - page"
   },
   {
    "name": "Q3.d.2.a.1.1.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.d.2.a.1.1.1",
      "title": "Would you like to have a web browser access to the HPC system?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.d.2.a.1.1.1.Yes",
        "text": "Yes"
       },
       {
        "value": "Q3.d.2.a.1.1.1.No",
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.d.2.a.1.1} = 'Q3.d.2.a.1.1.+1000'",
    "title": "Q3.d.2.a.1.1.1 - page"
   },
   {
    "name": "Q3.d.2.b - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.d.2.b",
      "title": "Are you willing to pay for the HPC solution? (e.g. for the additional hardware components)",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.d.2.b.Yes",
        "text": "Yes"
       },
       {
        "value": "Q3.d.2.b.No",
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.d.2} = 'Q3.d.2.No'",
    "title": "Q3.d.2.b - page"
   },
   {
    "name": "Q3.d.2.b.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.d.2.b.1",
      "title": "How much data will you need to upload onto the HPC system?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.d.2.b.1.5000",
        "text": "Up to 5000 GB"
       },
       {
        "value": "Q3.d.2.b.1.+5000",
        "text": "More than 5000 GB"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.d.2.b} = 'Q3.d.2.b.Yes'",
    "title": "Q3.d.2.b.1 - page"
   },
   {
    "name": "Q3.d.2.b.1.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.d.2.b.1.1",
      "title": "How much data will you load at once in your RAM?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.d.2.b.1.1.240",
        "text": "Up to 240 GB"
       },
       {
        "value": "Q3.d.2.b.1.1.+240",
        "text": "More than 240 GB"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.d.2.b.1} = 'Q3.d.2.b.1.+5000'",
    "title": "Q3.d.2.b.1.1 - page"
   },
   {
    "name": "Q3.d.2.b.1.1.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.d.2.b.1.1.1",
      "title": "Would you like to have a prioritised access to the resources?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.d.2.b.1.1.1.Yes",
        "text": "Yes"
       },
       {
        "value": "Q3.d.2.b.1.1.1.No",
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.d.2.b.1.1} = 'Q3.d.2.b.1.1.+240'",
    "title": "Q3.d.2.b.1.1.1 - page"
   },
   {
    "name": "Q3.d.2.b.2 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.d.2.b.2",
      "title": "How much data will you need to upload onto the HPC system?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.d.2.b.2.5000",
        "text": "Up to 5000 GB"
       },
       {
        "value": "Q3.d.2.b.2.+5000",
        "text": "More than 5000 GB"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.d.2.b} = 'Q3.d.2.b.No'",
    "title": "Q3.d.2.b.2 - page"
   },
   {
    "name": "Q3.d.2.b.2.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.d.2.b.2.1",
      "title": "How much data will you load at once in your RAM?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.d.2.b.2.1.240",
        "text": "Up to 240 GB"
       },
       {
        "value": "Q3.d.2.b.2.1.+240",
        "text": "More than 240 GB"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.d.2.b.2} = 'Q3.d.2.b.2.+5000'",
    "title": "Q3.d.2.b.2.1 - page"
   },
   {
    "name": "Q3.e - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.e",
      "title": "Do you have previous experience with HPC?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.e.No",
        "text": "I have no experience with HPC"
       },
       {
        "value": "Q3.e.Medium",
        "text": "I have scarce/mediocre experience (I have understanding of Linux/command-line or/andI have worked with some HPCs from CLAAUDIA)"
       },
       {
        "value": "Q3.e.Advance",
        "text": "I have vast experience (I have worked with system(s) from HPCs; programming skills, operating Linux terminal, understand containerisation concept, experience with command-line)"
       }
      ]
     }
    ],
    "visibleIf": "{Q2.f} = 'Q2.f.2-3'",
    "title": "Q3.e - page"
   },
   {
    "name": "Q3.e.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.e.1",
      "title": "How much data will you need to upload onto the HPC system?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.e.1.256",
        "text": "Up to 256 GB"
       },
       {
        "value": "Q3.e.1.+256",
        "text": "More than 256 GB"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.e} = 'Q3.e.No'",
    "title": "Q3.e.1 - page"
   },
   {
    "name": "Q3.e.1.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.e.1.1",
      "title": "How much data will you load at once in your RAM?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.e.1.1.8",
        "text": "Up to 8 GB"
       },
       {
        "value": "Q3.e.1.1.+8",
        "text": "More than 8 GB"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.e.1} = 'Q3.e.1.256'",
    "title": "Q3.e.1.1 - page"
   },
   {
    "name": "Q3.e.2 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.e.2",
      "title": "Are you willing to pay for the HPC solution? (e.g. for the additional hardware components)",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.e.2.Yes",
        "text": "Yes"
       },
       {
        "value": "Q3.e.2.No",
        "text": "No"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.e} = 'Q3.e.Medium' or {Q3.e} = 'Q3.e.Advance'",
    "title": "Q3.e.2 - page"
   },
   {
    "name": "Q3.e.2.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.e.2.1",
      "title": "Are you willing to pay for the HPC solution? (e.g. for the additional hardware components)",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.e.2.1.4",
        "text": "Up to 4 GB"
       },
       {
        "value": "Q3.e.2.1.+4",
        "text": "More than 4 GB"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.e.2} = 'Q3.e.2.Yes'",
    "title": "Q3.e.2.1 - page"
   },
   {
    "name": "Q3.c - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.c",
      "title": "How much data will you need to upload onto the HPC system?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.c.No",
        "text": "Up to 256 GB"
       },
       {
        "value": "Q3.c.Medium",
        "text": "More than 256 GB"
       }
      ]
     }
    ],
    "visibleIf": "{Q2.c} = 'Q2.c.2-3'",
    "title": "Q3.c - page"
   },
   {
    "name": "Q3.c.1 - page",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q3.c.1",
      "title": "How much data will you load at once in your RAM?",
      "hideNumber": true,
      "choices": [
       {
        "value": "Q3.c.1.8",
        "text": "Up to 8 GB"
       },
       {
        "value": "Q3.c.1.+8",
        "text": "More than 8GB"
       }
      ]
     }
    ],
    "visibleIf": "{Q3.c} = 'Q3.c.No'",
    "title": "Q3.c.1 - page"
   }
  ],
  "triggers": [
   {
    "type": "complete",
    "expression": "{Q2.a.1} = 'Q2.a.1.+256'"
   },
   {
    "type": "complete",
    "expression": "{Q2.a.1.1} = 'Q2.a.1.1.8' or {Q2.a.1.1} = 'Q2.a.1.1.+8'"
   },
   {
    "type": "complete",
    "expression": "{Q2.b.1.b} = 'Q2.b.1.b.4' or {Q2.b.1.b} = 'Q2.b.1.b.+4'"
   },
   {
    "type": "complete",
    "expression": "{Q2.b.1.a} = 'Q2.b.1.a.No'"
   },
   {
    "type": "complete",
    "expression": "{Q2.b.1.a.1} = 'Q2.b.1.a.1.Yes'"
   },
   {
    "type": "complete",
    "expression": "{Q2.b.1.a.1.1} = 'Q2.b.1.a.1.1.+16'"
   },
   {
    "type": "complete",
    "expression": "{Q2.b.1.a.1.1.1} = 'Q2.b.1.a.1.1.1.Yes' or {Q2.b.1.a.1.1.1} = 'Q2.b.1.a.1.1.1.No'"
   },
   {
    "type": "complete",
    "expression": "{Q2.e} = 'Q2.e.2-3'"
   },
   {
    "type": "complete",
    "expression": "{Q2.e.1} = 'Q2.e.1.2-3'"
   },
   {
    "type": "complete",
    "expression": "{Q2.e.1.1} = 'Q2.e.1.1.Yes' or {Q2.e.1.1} = 'Q2.e.1.1.No'"
   },
   {
    "type": "complete",
    "expression": "{Q3.a.1} = 'Q3.a.1.+256'"
   },
   {
    "type": "complete",
    "expression": "{Q3.a.1.1} = 'Q3.a.1.1.8' or {Q3.a.1.1} = 'Q3.a.1.1.+8'"
   },
   {
    "type": "complete",
    "expression": "{Q3.a.2} = 'Q3.a.2.Yes'"
   },
   {
    "type": "complete",
    "expression": "{Q3.a.2.1} = 'Q3.a.2.1.Yes'"
   },
   {
    "type": "complete",
    "expression": "{Q3.a.2.1.1.1.a} = 'Q3.a.2.1.1.1.a.6' or {Q3.a.2.1.1.1.a} = 'Q3.a.2.1.1.1.a.+6'"
   },
   {
    "type": "complete",
    "expression": "{Q3.a.2.1.1.1.a.1} = 'Q3.a.2.1.1.1.a.1.Yes' or {Q3.a.2.1.1.1.a.1} = 'Q3.a.2.1.1.1.a.1.No'"
   },
   {
    "type": "complete",
    "expression": "{Q3.a.2.1.1.b.1} = 'Q3.a.2.1.1.b.1.No'"
   },
   {
    "type": "complete",
    "expression": "{Q3.a.2.1.1.1.b} = 'Q3.a.2.1.1.1.b.5000' or {Q3.a.2.1.1.1.b} = 'Q3.a.2.1.1.1.b.+5000'"
   },
   {
    "type": "complete",
    "expression": "{Q3.b.1} = 'Q3.b.+256'"
   },
   {
    "type": "complete",
    "expression": "{Q3.b.1.1} = 'Q3.b.1.1.8' or {Q3.b.1.1} = 'Q3.b.1.1.+8'"
   },
   {
    "type": "complete",
    "expression": "{Q3.c} = 'Q3.c.Medium'"
   },
   {
    "type": "complete",
    "expression": "{Q3.c.1} = 'Q3.c.1.8' or {Q3.c.1} = 'Q3.c.1.+8'"
   },
   {
    "type": "complete",
    "expression": "{Q3.d.1} = 'Q3.d.1.+256'"
   },
   {
    "type": "complete",
    "expression": "{Q3.d.1.1} = 'Q3.d.1.1.8' or {Q3.d.1.1} = 'Q3.d.1.1.+8'"
   },
   {
    "type": "complete",
    "expression": "{Q3.d.2.a} = 'Q3.d.2.a.No'"
   },
   {
    "type": "complete",
    "expression": "{Q3.d.2.a.1} = 'Q3.d.2.a.1.Yes'"
   },
   {
    "type": "complete",
    "expression": "{Q3.d.2.a.1.1} = 'Q3.d.2.a.1.1.1000'"
   },
   {
    "type": "complete",
    "expression": "{Q3.d.2.a.1.1.1} = 'Q3.d.2.a.1.1.1.Yes' or {Q3.d.2.a.1.1.1} = 'Q3.d.2.a.1.1.1.No'"
   },
   {
    "type": "complete",
    "expression": "{Q3.d.2.b.1} = 'Q3.d.2.b.1.5000'"
   },
   {
    "type": "complete",
    "expression": "{Q3.d.2.b.1.1} = 'Q3.d.2.b.1.1.240'"
   },
   {
    "type": "complete",
    "expression": "{Q3.d.2.b.1.1.1} = 'Q3.d.2.b.1.1.1.Yes' or {Q3.d.2.b.1.1.1} = 'Q3.d.2.b.1.1.1.No'"
   },
   {
    "type": "complete",
    "expression": "{Q3.d.2.b.2} = 'Q3.d.2.b.2.5000'"
   },
   {
    "type": "complete",
    "expression": "{Q3.d.2.b.2.1} = 'Q3.d.2.b.2.1.240' or {Q3.d.2.b.2.1} = 'Q3.d.2.b.2.1.+240'"
   },
   {
    "type": "complete",
    "expression": "{Q3.e.1} = 'Q3.e.1.+256'"
   },
   {
    "type": "complete",
    "expression": "{Q3.e.1.1} = 'Q3.e.1.1.8' or {Q3.e.1.1} = 'Q3.e.1.1.+8'"
   },
   {
    "type": "complete",
    "expression": "{Q3.e.2} = 'Q3.e.2.No'"
   },
   {
    "type": "complete",
    "expression": "{Q3.e.2.1} = 'Q3.e.2.1.4' or {Q3.e.2.1} = 'Q3.e.2.1.+4'"
   }
  ]
 }

export default data