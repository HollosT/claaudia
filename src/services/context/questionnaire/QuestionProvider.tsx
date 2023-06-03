import {useState } from "react"
import { QuestionContextProvider } from "./question-context"

import { keys } from "src/hooks";
import { AllHPC } from "src/services/types/hpc/hpc";
import { Model } from "survey-core";


interface QuestionProviderProps {
    children: React.ReactNode;
}

const QuestionProvider: React.FC<QuestionProviderProps>= (props) => {
    const [currentHPCs, setCUrrentHPCs] = useState([...keys(AllHPC).map(h => AllHPC[h])])
    const [progress, setProgress] = useState("10");
    const [selectedHpc, setSelectedHpc] = useState(AllHPC.AiCloud)
    const [isClosed, setIsClosed] = useState(true)
    const [finished, setFinished] = useState(false)
    const [survey, setSurvey] = useState<Model | null>(null)
    
    const handleCurrentHPCs = (values: AllHPC[]) => {
        setCUrrentHPCs(values)
    }
    const handleProgress = (prog: string) => {
        setProgress(prog)
    }

    const handleSelectedHpc = (hpc: AllHPC) => {
        setSelectedHpc(hpc)
    }
    const handleIsClose = (isClose: boolean) => {
        setIsClosed(isClose)
    }
    const handleFinished = (isFinished: boolean) => {
        setFinished(isFinished)
    }
    const handleSurvey = (survey: Model) => {
        setSurvey(survey)
    }


    return(
        <QuestionContextProvider
            value={{
                currentHPCs,
                handleCurrentHPCs,
                progress,
                handleProgress,
                selectedHpc,
                handleSelectedHpc,
                isClosed,
                handleIsClose,
                finished,
               handleFinished,
               survey,
               handleSurvey
            }}
        >
            {props.children}
        </QuestionContextProvider>
    )
}

export default QuestionProvider;