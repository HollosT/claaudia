export interface AnswerType {
    label: string,
    value: string,
    checked: boolean
}

export interface QuestionType {
    id: string,
    topic: string,
    question: string,
    answers: AnswerType[]
}
