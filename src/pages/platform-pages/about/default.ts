import { AllHPC } from "src/services/types/hpc/hpc";

const data2 = {
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "Q1",
          title: "Q1: Which data science area matches your project?",
          choices: [
            {
              value: "Knowledge Representation and Reasoning",
              text: "Knowledge representation and reasoning",
              result: [
                AllHPC.StratoRegular,
                AllHPC.StratoProjects,
                AllHPC.StratoBuyIn,
              ],
            },
            {
              value: "Machine & Deep Learning",
              text: "Machine learning and deep learning or Computer vision",
              result: [AllHPC.AiCloud, AllHPC.AiCloudBuyIn],
            },
            {
              value: "All",
              text: "Other",
              result: [AllHPC.UCloud, AllHPC.LocalMachine],
            },
          ],
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "radiogroup",
          name: "Q1.1",
          visibleIf: "{Q1} = 'All'",
          title:
            "Is your project CPU-focused (are you going to run many independent tasks) or GPU-focused (are you going to have few tasks running together at once)?",
          choices: [
            {
              value: 'CPU',
              result: [AllHPC.AiCloud, AllHPC.StratoBuyIn, AllHPC.LocalMachine],
              text: "CPU",
            },
            {
              value: 'GPU',
              result: [AllHPC.AiCloud, AllHPC.AiCloudBuyIn],
              text: "GPU",
            },
            {
              result: [AllHPC.AiCloud, AllHPC.AiCloudBuyIn],
              text: "both -> cpu and gpu (then its mostly cpu with additional few gpu)",
            },
            {
              value: "All",
              result: [AllHPC.AiCloud, AllHPC.AiCloudBuyIn],
              text: "I don’t know",
            },
          ],
        },
      ],
    },
    {
      name: "page3",
      elements: [
        {
          type: "radiogroup",
          name: "Q2",
          visibleIf: "{Q1.1} = 'CPU' or {Q1.1} = 'GPU' or {Q1.1} = 'Both' and {Q1.1} = 'All' or {Q1} = 'KRR' or {Q1} = 'MLDL'",
          title: "What kind of data levels are you working on?",
          choices: [
            {
              value: "0-1",
              text: "Only 0-1",
              result: [
                AllHPC.StratoRegular,
                AllHPC.StratoProjects,
                AllHPC.StratoBuyIn,
              ],
            },
            {
              value: "2-3",
              text: "Will include 2 or / and 3",
              result: [
                AllHPC.StratoRegular,
                AllHPC.StratoProjects,
                AllHPC.StratoBuyIn,
              ],
            },
          ],
        },
      ],
    },
  ],
};

const data = {
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q1",
      "title": " Which data science area matches your project?",
      "choices": [
       {
        "value": "KRR",
        "result": [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.UCloud, AllHPC.LocalMachine],
        "text": "Knowledge representation and reasoning"
       },
       {
        "value": "MLDL and CV",
        "result": [AllHPC.AiCloud, AllHPC.AiCloudProjects, AllHPC.AiCloudBuyIn, AllHPC.StratoBuyIn, AllHPC.LocalMachine],
        "text": "Machine learning and deep learning or Computer vision"
       },
       {
        "value": "All",
        "result": [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.AiCloud, AllHPC.AiCloudProjects, AllHPC.AiCloudBuyIn, AllHPC.UCloud, AllHPC.LocalMachine],
        "text": "NLP, Text and Data Mining, Simulation or other"
       }
      ],
      "otherText": "Other"
     }
    ]
   },
   {
    "name": "page2",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q1.1",
      "visibleIf": "{Q1} = 'All'",
      "title": "Is your project CPU-focused (are you going to run many independent tasks) or GPU-focused (are you going to have few tasks running together at once)?",
      "choices": [
       {
        "value": "CPU",
        "text": "CPU",
        "result": [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.UCloud, AllHPC.LocalMachine],
       },
       {
        "value": "GPU",
        "text": "GPU",
        "result": [AllHPC.AiCloud, AllHPC.AiCloudProjects, AllHPC.AiCloudBuyIn,AllHPC.LocalMachine],

       },
       {
        "value": "Both",
        "text": "Both",
        "result": [AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.AiCloudBuyIn, AllHPC.LocalMachine],
       },
       {
        "value": "All",
        "text": "I don't know",
        "result": [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.AiCloud, AllHPC.AiCloudProjects, AllHPC.AiCloudBuyIn, AllHPC.UCloud, AllHPC.LocalMachine],
       }
      ]
     }
    ]
   },
   {
    "name": "page3",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.a",
      "visibleIf": "{Q1} = 'KRR'",
      "title": "What kind of data levels are you working on?",
      "choices": [
       {
        "value": "0-1",
        "result": [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.UCloud, AllHPC.LocalMachine],
        "text": "Only 0-1"
       },
       {
        "value": "2-3",
        "result": [AllHPC.UCloud, AllHPC.LocalMachine],
        "text": "Will include 2 or / and 3"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "Q2.b",
      "visibleIf": "{Q1} = 'MLDL and CV'",
      "title": "What kind of data levels are you working on?",
      "choices": [
       {
        "value": "0-1",
        "result": [AllHPC.AiCloud, AllHPC.AiCloudBuyIn, AllHPC.StratoBuyIn],
        "text": "Only 0-1"
       },
       {
        "value": "2-3",
        "result": [AllHPC.AiCloudProjects, AllHPC.AiCloudBuyIn],
        "text": "Will include 2 or / and 3"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "Q2.c",
      "visibleIf": "{Q1.1} = 'CPU'",
      "title": "What kind of data levels are you working on?",
      "choices": [
       {
        "value": "0-1",
        "result": [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.UCloud, AllHPC.LocalMachine],
        "text": "Only 0-1"
       },
       {
        "value": "2-3",
        "result": [AllHPC.UCloud, AllHPC.LocalMachine],
        "text": "Will include 2 or / and 3"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "Q2.d",
      "visibleIf": "{Q1.1} = 'GPU'",
      "title": "What kind of data levels are you working on?",
      "choices": [
       {
        "value": "0-1",
        "result": [AllHPC.AiCloud, AllHPC.AiCloudBuyIn],
        "text": "Only 0-1"
       },
       {
        "value": "2-3",
        "result": [AllHPC.AiCloudProjects, AllHPC.AiCloudBuyIn],
        "text": "Will include 2 or / and 3"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "Q2.e",
      "visibleIf": "{Q1.1} = 'Both'",
      "title": "What kind of data levels are you working on?",
      "choices": [
       {
        "value": "0-1",
        "result": [ AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.AiCloudBuyIn],
        "text": "Only 0-1"
       },
       {
        "value": "2-3",
        "result": [AllHPC.AiCloudBuyIn],
        "text": "Will include 2 or / and 3"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "Q2.f",
      "visibleIf": "{Q1.1} = 'All'",
      "title": "What kind of data levels are you working on?",
      "choices": [
       {
        "value": "0-1",
        "result": [AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.AiCloud, AllHPC.AiCloudProjects, AllHPC.AiCloudBuyIn, AllHPC.UCloud, AllHPC.LocalMachine],
        "text": "Only 0-1"
       },
       {
        "value": "2-3",
        "result": [ AllHPC.AiCloudProjects, AllHPC.AiCloudBuyIn, AllHPC.UCloud, AllHPC.LocalMachine],
        "text": "Will include 2 or / and 3"
       }
      ]
     }
    ]
   },
   {
    "name": "page4",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.a.1",
      "visibleIf": "{Q2.a} = '2-3'",
      "title": "How much data will you need to upload onto the HPC system?",
      "choices": [
       {
        "value": "256",
        "result": [AllHPC.LocalMachine, AllHPC.UCloud],

        "text": "up to 256"
       },
       {
        "value": "+256",
        "result": [AllHPC.UCloud],
        "text": "more than 256"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "Q2.b.1.a",
      "visibleIf": "{Q2.b} = '0-1'",
      "title": "Are you willing to pay for the HPC solution? (e.g. for the additional hardware components)",
      "choices": [
        {
          "value": "Yes",
          "result": [AllHPC.AiCloudBuyIn, AllHPC.StratoBuyIn, AllHPC.StratoBuyIn],
  
          "text": "Yes"
         },
        {
          "value": "No",
          "result": [AllHPC.AiCloud],
          "text": "No"
         },
      ]
     },
     {
      "type": "radiogroup",
      "name": "Q2.b.1.b",
      "visibleIf": "{Q2.d} = '2-3'",
      "title": "How many GPUs does your project require?",
      "choices": [
       {
        "value": "4",
        "result": [AllHPC.AiCloudProjects],
        "text": "Up to 4 GPUs"
       },
       {
        "value": "+4",
        "result": [AllHPC.AiCloudBuyIn],
        "text": "More than 4 GPUs"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "Q2.e.1",
      "visibleIf": "{Q2.e} = '0-1'",
      "title": "Are you willing to pay for the HPC solution? (e.g. for the additional hardware components)",
      "choices": [
        {
          "value": "Yes",
          "result": [AllHPC.StratoBuyIn, AllHPC.AiCloudBuyIn],
  
          "text": "Yes"
         },
        {
          "value": "No",
          "result": [AllHPC.StratoProjects],
          "text": "No"
         },
      ]
     }
    ]
   },
   {
    "name": "page5",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.a.1.1",
      "visibleIf": "{Q2.a.1} = 256",
      "title": "How much data will you load at once in your RAM?",
      "choices": [
       {
        "value": "8",
        "result": [AllHPC.LocalMachine],
        "text": "Up to 8"
       },
       {
        "value": "+8",
        "result": [AllHPC.UCloud],
        "text": "More than 8"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "Q2.b.1.a.1",
      "visibleIf": "{Q2.b.1.a} = 'Yes'",
      "title": "Would you like the HPC system to havr GUI (graphical user interface)",
      "choices": [
        {
          "value": "Yes",
          "result": [AllHPC.StratoBuyIn],
  
          "text": "Yes"
         },
        {
          "value": "No",
          "result": [AllHPC.AiCloudBuyIn, AllHPC.AiCloud],
          "text": "No"
         },
      ]
     },
     {
      "type": "radiogroup",
      "name": "Q2.e.1.1",
      "visibleIf": "{Q2.e.1} = 'Yes'",
      "title": "Would you like the HPC system to have GUI (graphical user interface)",
      "choices": [
        {
          "value": "Yes",
          "result": [AllHPC.StratoBuyIn],
  
          "text": "Yes"
         },
        {
          "value": "No",
          "result": [AllHPC.AiCloudBuyIn],
          "text": "No"
         },
      ]
     }
    ]
   },
   {
    "name": "page6",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.b.1.a.1.1",
      "visibleIf": "{Q2.d} = '0-1'",
      "title": "How many GPUs does your project require?",
      "choices": [
       {
        "value": "16",
        "result": [AllHPC.AiCloud, AllHPC.AiCloudBuyIn],

        "text": "Up to 16 GPUs"
       },
       {
        "value": "16+",
        "result": [ AllHPC.AiCloudBuyIn],

        "text": "More than 16 GPUs"
       },
       {
        "value": "dont know",
        "result": [AllHPC.AiCloud, AllHPC.AiCloudBuyIn],
        "text": "I don't know"
       }
      ]
     }
    ]
   },
   {
    "name": "page7",
    "elements": [
     {
      "type": "radiogroup",
      "name": "Q2.b.1.a.1.1.1",
      "visibleIf": "{Q2.b.1.a.1.1} = 16 or {Q2.b.1.a.1.1} = 'dont know'",
      "title": "Would you like to have a prioritised access to the resources?",
      "choices": [
        {
          "value": "Yes",
          "result": [AllHPC.AiCloudBuyIn],
  
          "text": "Yes"
         },
        {
          "value": "No",
          "result": [AllHPC.AiCloud],
          "text": "No"
         },
      ]
     }
    ]
   }
  ],
  "triggers": [
   {
    "type": "complete",
    "expression": "{Q2.a.1} = +256"
   },
   {
    "type": "complete",
    "expression": "{Q2.a.1.1} = 8 or {Q2.a.1.1} = +8"
   },
   {
    "type": "complete",
    "expression": "{Q2.b.1.a.1} = 'Yes'"
   },
   {
    "type": "complete",
    "expression": "{Q2.b.1.a.1.1} = '16+'"
   },
   {
    "type": "complete",
    "expression": "{Q2.b.1.a.1.1.1} = 'Yes' or {Q2.b.1.a.1.1.1} = 'No'"
   },
   {
    "type": "complete",
    "expression": "{Q2.b.1.b} = 4 or {Q2.b.1.b} = +4"
   },
   {
    "type": "complete",
    "expression": "{Q2.e} = '2-3'"
   },
   {
    "type": "complete",
    "expression": "{Q2.e.1} = 'No'"
   },
   {
    "type": "complete",
    "expression": "{Q2.e.1.1} = 'Yes' or {Q2.e.1.1} = 'No'"
   }
  ]
 }
export default data;
