import { createContext } from "react";
import { QuestionType } from "src/services/types/questions";

interface QuestionContextProps {
    activeQuestion: QuestionType;
    active: number;
    questions: QuestionType[];
    handleActive: (inc: boolean) => void;
    goTo: (index: number) => void
}

export const DUMMY_DATA = [
    {
        id: 1,
        topic: 'Prior experience',
        question: 'Did you work with HPC before?',
        answers: [
            {
                label: 'Yes, multiple times',
                value: 'many'
            },
            {
                label: 'A few times only',
                value: 'some'
            },
            {
                label: 'Never',
                value: 'none'
            },
            {
                label: 'Not sure',
                value: 'nothing'
            },
        ]
    },
    {
        id: 2,
        topic: 'Knowledge base',
        question: 'What level of knowledge you have about HPC?',
        answers: [
            {
                label: 'A lot (worked with it)',
                value: 'lot'
            },
            {
                label: 'Okay level',
                value: 'medium'
            },
            {
                label: 'Nothing',
                value: 'none'
            },
            {
                label: 'Not sure',
                value: 'nothing'
            },
        ]
    },
    {
        id: 3,
        topic: 'Data classification',
        question: 'What kind of data will you work?',
        answers: [
            {
                label: 'Regarding healthcare',
                value: 'personal'
            },
            {
                label: 'Public transportation',
                value: 'public'
            },
            {
                label: 'Architecture',
                value: 'public'
            },
            {
                label: 'Not sure',
                value: 'nothing'
            },
        ]
    },
    {
        id: 4,
        topic: 'Hardware requirements',
        question: 'What hardware is more suitable for your research?',
        answers: [
            {
                label: 'GPU (Graphics Processing Unit)',
                value: 'GPU'
            },
            {
                label: 'CPU (Central Processing Unit)',
                value: 'CPU'
            },
            {
                label: 'Both CPU and GPU',
                value: ['CPU', 'GPU']
            },
            {
                label: 'Not sure',
                value: 'nothing'
            },
        ]
    },
    {
        id: 5,
        topic: 'Depends on questions',
        question: 'This is the last question, do you like LOTR?',
        answers: [
            {
                label: 'Yes, my favourite!',
                value: 'love'
            },
            {
                label: 'Its okay!',
                value: 'okay'
            },
            {
                label: 'Hate it',
                value: 'hate'
            },
            {
                label: 'Not sure',
                value: 'nothing'
            },
        ]
    },

]

export const QuestionContext = createContext<QuestionContextProps>({
    activeQuestion: DUMMY_DATA[0],
    active: 0,
    questions: DUMMY_DATA,
    handleActive: () => {},
    goTo: () => {},
});

export const QuestionContextProvider = QuestionContext.Provider;
