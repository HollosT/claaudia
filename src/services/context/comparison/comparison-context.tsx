import { createContext } from "react";
import { AllHPC } from "src/services/types/hpc/hpc";


interface ComparisonContextProps {
    selectedHPC: AllHPC;
    handleSelectedHPC: (value: AllHPC) => void;
}

export const ComparisonContext = createContext<ComparisonContextProps>({
    selectedHPC: AllHPC.StratoRegular,
    handleSelectedHPC: () => {}
});

export const ComparisonContextProvider = ComparisonContext.Provider;