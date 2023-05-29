import { useEffect, useState } from "react"
import { QuestionContextProvider } from "./question-context"

import { keys } from "src/hooks";
import { AllHPC } from "src/services/types/hpc/hpc";

interface QuestionProviderProps {
    children: React.ReactNode;
}

const QuestionProvider: React.FC<QuestionProviderProps>= (props) => {
    const [currentHPCs, setCUrrentHPCs] = useState([...keys(AllHPC).map(h => AllHPC[h])])
    const [progress, setProgress] = useState("0")

    const handleCurrentHPCs = (values: AllHPC[]) => {
        setCUrrentHPCs(values)
    }
    const handleProgress = (prog: string) => {
        setProgress(prog)
    }


    return(
        <QuestionContextProvider
            value={{
                currentHPCs,
                handleCurrentHPCs,
                progress,
                handleProgress
            }}
        >
            {props.children}
        </QuestionContextProvider>
    )
}

export default QuestionProvider;