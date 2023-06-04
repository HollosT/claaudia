import { createContext } from "react";
import { AllHPC, HPCType } from "src/services/types/hpc/hpc";


interface ComparisonContextProps {
    selectedHPC: AllHPC;
    comparedHPC: AllHPC | boolean;
    handleSelectedHPC: (value: AllHPC) => void;
    handleComparedHPC: (value: AllHPC) => void;
    allHPC: HPCType[],


}

export const ComparisonContext = createContext<ComparisonContextProps>({
    selectedHPC: AllHPC.StratoRegular,
    comparedHPC: false,
    handleSelectedHPC: () => {},
    handleComparedHPC: () => {},
    allHPC: [],
 
});

export const ComparisonContextProvider = ComparisonContext.Provider;