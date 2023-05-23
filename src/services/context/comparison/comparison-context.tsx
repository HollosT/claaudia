import { createContext } from "react";
import { ALL_HPCS_DATA } from "src/services/types/hpc/constant";
import { AllHPC, HPCType } from "src/services/types/hpc/hpc";


interface ComparisonContextProps {
    selectedHPC: AllHPC;
    handleSelectedHPC: (value: AllHPC) => void;
    allHPC: HPCType[]
}

export const ComparisonContext = createContext<ComparisonContextProps>({
    selectedHPC: AllHPC.StratoRegular,
    handleSelectedHPC: () => {},
    allHPC: ALL_HPCS_DATA,
});

export const ComparisonContextProvider = ComparisonContext.Provider;