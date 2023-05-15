import { useEffect, useState } from "react"
import { DUMMY_DATA, QuestionContextProvider } from "./question-context"
import { QuestionType } from "src/services/types/questions";
import { getAllQuestions } from "src/services/firebase/firebase.utils";

interface QuestionProviderProps {
    children: React.ReactNode;
}



const QuestionProvider: React.FC<QuestionProviderProps>= (props) => {
    const [questions, setQuestions] = useState<QuestionType[]>(DUMMY_DATA)
    const [active, setActive] = useState(0)
    const [activeQuestion, setActiveQuestion] = useState(questions[active])

    useEffect(() => {
        const initQuestions = async () => {
            const qsts = await getAllQuestions()
            setQuestions(qsts)
        }
        initQuestions()
    }, [])

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
                updateChecked,
            }}
        >
            {props.children}
        </QuestionContextProvider>
    )
}

export default QuestionProvider;