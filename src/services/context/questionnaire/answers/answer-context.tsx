import { createContext } from "react";


interface AnswerContextProps {
    
}

export const AnswerContext = createContext<AnswerContextProps>({
    
});

export const AnswerContextProvider = AnswerContext.Provider;