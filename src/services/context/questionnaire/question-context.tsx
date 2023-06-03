import { createContext } from "react";
import { keys } from "src/hooks";

import { AllHPC } from "src/services/types/hpc/hpc";
import { Model } from "survey-core";



interface QuestionContextProps {
    progress: string,
    handleProgress: (prog: string) => void,
    currentHPCs: AllHPC[],
    handleCurrentHPCs: (values: AllHPC[]) => void;
    handleSelectedHpc: (hpc: AllHPC) => void;
    selectedHpc: AllHPC,
    handleIsClose: (isClose: boolean) => void;
    isClosed: boolean,
    finished: boolean,
    handleFinished: (isFinished: boolean) => void;
    survey: Model | null;
    handleSurvey: (survey: Model) => void
}



export const QuestionContext = createContext<QuestionContextProps>({
    currentHPCs: [...keys(AllHPC).map(h => AllHPC[h])],
    handleCurrentHPCs: () => {},
    handleProgress: () => {},
    progress: "10",
    handleSelectedHpc: () => {},
    selectedHpc: AllHPC.AiCloud,
    handleIsClose: () => {},
    isClosed: false,
    handleFinished: () => {},
    finished: false,
    handleSurvey: () => {},
    survey: null,

});

export const QuestionContextProvider = QuestionContext.Provider;
