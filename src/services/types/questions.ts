interface Answer {
    label: string,
    value: string,
    checked: boolean
}

export interface QuestionType {
    id: string,
    topic: string,
    question: string,
    answers: Answer[]
}
