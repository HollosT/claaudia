interface Answer {
    label: string,
    value: string,
    checked: boolean
}

export interface QuestionType {
    id: number,
    topic: string,
    question: string,
    answers: Answer[]
}
