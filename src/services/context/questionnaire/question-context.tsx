import { createContext } from "react";
import { QuestionType } from "src/services/types/questions";

interface QuestionContextProps {
    activeQuestion: QuestionType;
    active: number;
    questions: QuestionType[];
    handleActive: (inc: boolean) => void;
    goTo: (index: number) => void
    updateChecked: (label: string) => void;
}

export const DUMMY_DATA = [
    // {
    //     id: "1",
    //     topic: 'Prior experience',
    //     question: 'Did you work with HPC before?',
    //     answers: [
    //         {       
    //             checked: false,
    //             label: 'Yes, multiple times',
    //             value: 'many'
    //         },
    //         {
    //             checked: false,
    //             label: 'A few times only',
    //             value: 'some'
    //         },
    //         {
    //             checked: false,
    //             label: 'Never',
    //             value: 'none'
    //         },
    //         {
    //             checked: false,
    //             label: 'Not sure',
    //             value: 'nothing'
    //         },
    //     ]
    // },
    // {
    //     id: "2",
    //     topic: 'Knowledge base',
    //     question: 'What level of knowledge you have about HPC?',
    //     answers: [
    //         {
    //             checked: false,
    //             label: 'A lot (worked with it)',
    //             value: 'lot'
    //         },
    //         {
    //             checked: false,
    //             label: 'Okay level',
    //             value: 'medium'
    //         },
    //         {
    //             checked: false,
    //             label: 'Nothing',
    //             value: 'none'
    //         },
    //         {
    //             checked: false,
    //             label: 'Not sure',
    //             value: 'nothing'
    //         },
    //     ]
    // },
    // {
    //     id: "3",
    //     topic: 'Data classification',
    //     question: 'What kind of data will you work?',
    //     answers: [
    //         {
    //             checked: false,
    //             label: 'Regarding healthcare',
    //             value: 'personal'
    //         },
    //         {
    //             checked: false,
    //             label: 'Public transportation',
    //             value: 'public'
    //         },
    //         {
    //             checked: false,
    //             label: 'Architecture',
    //             value: 'public'
    //         },
    //         {
    //             checked: false,
    //             label: 'Not sure',
    //             value: 'nothing'
    //         },
    //     ]
    // },
    // {
    //     id: "4",
    //     topic: 'Hardware requirements',
    //     question: 'What hardware is more suitable for your research?',
    //     answers: [
    //         {
    //             checked: false,
    //             label: 'GPU (Graphics Processing Unit)',
    //             value: 'GPU'
    //         },
    //         {
    //             checked: false,
    //             label: 'CPU (Central Processing Unit)',
    //             value: 'CPU'
    //         },
    //         {
    //             checked: false,
    //             label: 'Both CPU and GPU',
    //             value: 'both'
    //         },
    //         {
    //             checked: false,
    //             label: 'Not sure',
    //             value: 'nothing'
    //         },
    //     ]
    // },
    // {
    //     id: "5",
    //     topic: 'Depends on questions',
    //     question: 'This is the last question, do you like LOTR?',
    //     answers: [
    //         {
    //             checked: false,
    //             label: 'Yes, my favourite!',
    //             value: 'love'
    //         },
    //         {
    //             checked: false,
    //             label: 'Its okay!',
    //             value: 'okay'
    //         },
    //         {
    //             checked: false,
    //             label: 'Hate it',
    //             value: 'hate'
    //         },
    //         {
    //             checked: false,
    //             label: 'Not sure',
    //             value: 'nothing'
    //         },
    //     ]
    // },

]

export const QuestionContext = createContext<QuestionContextProps>({
    activeQuestion: DUMMY_DATA[0],
    active: 0,
    questions: DUMMY_DATA,
    handleActive: () => {},
    goTo: () => {},
    updateChecked: () => {},
});

export const QuestionContextProvider = QuestionContext.Provider;
