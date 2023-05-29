import { AllHPC } from "src/services/types/hpc/hpc";

 const data = {
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

export default data