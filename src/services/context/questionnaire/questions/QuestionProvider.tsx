import { useEffect, useState } from "react"
import { DUMMY_DATA, QuestionContextProvider } from "./question-context"

interface QuestionProviderProps {
    children: React.ReactNode;
}



const QuestionProvider: React.FC<QuestionProviderProps>= (props) => {
    const [questions, setQuestions] = useState(DUMMY_DATA)
    const [active, setActive] = useState(0)
    const [activeQuestion, setActiveQuestion] = useState(questions[active])

    useEffect(() => {
        setActiveQuestion(questions[active]);
      }, [active, questions]);

    const handleActive = (inc: Boolean) => {
        if (inc) {
            setActive(prevState => {
                if (prevState === questions.length - 1) {
                    return prevState
                } else {
                    return ++prevState
                }
            })
        } else (
            setActive(prevState => {
                if (prevState === 0) {
                    return prevState
                } else {
                    return --prevState
                }
            })
        )
    }

    const goTo = (index: number) => {
        if(index >= 0 && index < questions.length) {
            setActive(index)
        } else {
            return
        }
    }

    return(
        <QuestionContextProvider
            value={{
                questions,
                active,
                activeQuestion,
                handleActive,
                goTo
            }}
        >
            {props.children}
        </QuestionContextProvider>
    )
}

export default QuestionProvider;