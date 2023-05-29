import { createContext } from "react";
import { keys } from "src/hooks";

import { AllHPC } from "src/services/types/hpc/hpc";
import { QuestionType } from "src/services/types/questions";

interface QuestionContextProps {

    currentHPCs: AllHPC[],
    handleCurrentHPCs: (values: AllHPC[]) => void;
}



export const QuestionContext = createContext<QuestionContextProps>({
    currentHPCs: [...keys(AllHPC).map(h => AllHPC[h])],
    handleCurrentHPCs: () => {},
});

export const QuestionContextProvider = QuestionContext.Provider;
