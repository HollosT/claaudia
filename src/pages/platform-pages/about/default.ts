import { AllHPC } from "src/services/types/hpc/hpc";

const data = {
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question1",
      "title": "Which data science area matched your project?",
      "choices": [
       {
        "value": "KPR",
        "text": "Knowledge representation and reasoning"
       },
       {
        "value": "ML",
        "text": "Machine learning and deep learning | Computer vision"
       },
       {
        "value": "NLP",
        "text": "NLP | Text and Data Mining | Simulation "
       }
      ]
     }
    ]
   },
   {
    "name": "page2",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question2",
      "visibleIf": "{question1} = 'NLP'",
      "title": "Is your project CPU-focused (are you going to run many independent tasks) or GPU-focused (are you going to have few tasks running together at once)?",
      "choices": [
       {
        "value": "Item 1",
        "text": "CPU"
       },
       {
        "value": "Item 2",
        "text": "GPU"
       },
       {
        "value": "Item 3",
        "text": "both -> cpu and gpu (then its mostly cpu with additional few gpu)"
       },
       {
        "value": "Item 4",
        "text": "I don’t know"
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
      "name": "question3",
      "title": "What kind of data levels are you working on? (here: explain the data classification model and explain data levels - give context)",
      "choices": [
       {
        "value": "Item 1",
        "text": "only 0-1"
       },
       {
        "value": "Item 2",
        "text": "will include 2 or/and 3"
       }
      ]
     }
    ]
   }
  ]
 }


// const data = {
//     "logoPosition": "right",
//     "pages": [
//       {
//         "name": "page1",
//         "elements": [
//           {
//             "type": "radiogroup",
//             "name": "question1",
//             "title": "Which data science area matched your project?",
//             "choices": [
//               {
//                 "value": "KPR",
//                 "text": "Knowledge representation and reasoning"
//               },
//               {
//                 "value": "ML",
//                 "text": "Machine learning and deep learning | Computer vision"
//               },
//               {
//                 "value": "NLP",
//                 "text": "NLP | Text and Data Mining | Simulation"
//               }
//             ]
//           }
//         ]
//       },
//       {
//         "name": "page2",
//         "elements": [
//           {
//             "type": "radiogroup",
//             "name": "question2",
//             "title": "Is your project CPU-focused (are you going to run many independent tasks) or GPU-focused (are you going to have few tasks running together at once)?",
//             "choices": [
//               {
//                 "value": [AllHPC.AiCloud, AllHPC.StratoBuyIn, AllHPC.LocalMachine],
//                 "text": "CPU"
//               },
//               {
//                 "value": [AllHPC.AiCloud, AllHPC.AiCloudBuyIn],
//                 "text": "GPU"
//               },
//               {
//                 "value": "Item 3",
//                 "text": "both -> cpu and gpu (then its mostly cpu with additional few gpu)"
//               },
//               {
//                 "value": "Item 4",
//                 "text": "I don’t know"
//               }
//             ]
//           }
//         ]
//       },
//       {
//         "name": "page3",
//         "elements": [
//           {
//             "type": "radiogroup",
//             "name": "question3",
//             "title": "What kind of data levels are you working on? (here: explain the data classification model and explain data levels - give context)",
//             "choices": [
//               {
//                 "value": "Item 1",
//                 "text": "only 0-1"
//               },
//               {
//                 "value": "Item 2",
//                 "text": "will include 2 or/and 3"
//               }
//             ]
//           }
//         ]
//       }
//     ],
//     // "triggers": [
//     //   {
//     //     "type": "visible",
//     //     "expression": "{question1} = 'NLP'",
//     //     "name": "trigger1",
//     //     "visible": false,
//     //     "questions": [
//     //       "question3"
//     //     ]
//     //   },
//     //   {
//     //     "type": "visible",
//     //     "expression": "{question1} != 'NLP'",
//     //     "name": "trigger2",
//     //     "visible": false,
//     //     "questions": [
//     //       "question2"
//     //     ]
//     //   }
//     // ]
// }

export default data;