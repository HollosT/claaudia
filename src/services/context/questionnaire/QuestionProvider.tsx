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

      useEffect(() => {
        setQuestions((prevQuestions) => {
            prevQuestions[active] = activeQuestion;
            return prevQuestions;
        });
      }, [activeQuestion, active])

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

    const updateChecked = (label: string) => {
        setActiveQuestion((prevState) => {
            const updatedAnswers = prevState.answers.map((a) =>
              a.label === label ? { ...a, checked: !a.checked } : { ...a, checked: false }
            );
            return { ...prevState, answers: updatedAnswers };
        });
    }

    return(
        <QuestionContextProvider
            value={{
                questions,
                active,
                activeQuestion,
                handleActive,
                goTo,
                updateChecked
            }}
        >
            {props.children}
        </QuestionContextProvider>
    )
}

export default QuestionProvider;