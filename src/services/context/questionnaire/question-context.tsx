import { createContext } from "react";
import { keys } from "src/hooks";

import { AllHPC } from "src/services/types/hpc/hpc";


interface QuestionContextProps {
    progress: string,
    handleProgress: (prog: string) => void,
    currentHPCs: AllHPC[],
    handleCurrentHPCs: (values: AllHPC[]) => void;
    handleSelectedHpc: (hpc: AllHPC) => void;
    selectedHpc: AllHPC,
    handleIsClose: (isClose: boolean) => void;
    isClosed: Boolean
}



export const QuestionContext = createContext<QuestionContextProps>({
    currentHPCs: [...keys(AllHPC).map(h => AllHPC[h])],
    handleCurrentHPCs: () => {},
    handleProgress: () => {},
    progress: "10",
    handleSelectedHpc: () => {},
    selectedHpc: AllHPC.AiCloud,
    handleIsClose: () => {},
    isClosed: false

});

export const QuestionContextProvider = QuestionContext.Provider;
