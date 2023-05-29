import { useEffect, useState } from "react"
import { QuestionContextProvider } from "./question-context"

import { keys } from "src/hooks";
import { AllHPC } from "src/services/types/hpc/hpc";

interface QuestionProviderProps {
    children: React.ReactNode;
}

const QuestionProvider: React.FC<QuestionProviderProps>= (props) => {
    const [currentHPCs, setCUrrentHPCs] = useState([...keys(AllHPC).map(h => AllHPC[h])])


    const handleCurrentHPCs = (values: AllHPC[]) => {
        setCUrrentHPCs(values)
    }


    return(
        <QuestionContextProvider
            value={{
                currentHPCs,
                handleCurrentHPCs
            }}
        >
            {props.children}
        </QuestionContextProvider>
    )
}

export default QuestionProvider;