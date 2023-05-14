interface Answer {
    label: string,
    value: string | string[]
}

export interface QuestionType {
    id: number,
    topic: string,
    question: string,
    answers: Answer[]
}
