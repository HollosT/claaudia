import { createContext } from "react";
import { HPCCategoryType, HPCType, SystemType } from "src/services/types/hpc/hpc";

interface HPCContextProps {
    systemData: HPCCategoryType[] | [],
    currentSystemData: HPCCategoryType | {},
    getCurrentSytemData: (type: SystemType) => HPCCategoryType | null;
    allHPCs: HPCType[];
}

export const HPCContext = createContext<HPCContextProps>({
    systemData: [],
    currentSystemData: {},
    getCurrentSytemData: () => null,
    allHPCs: [],
});

export const HPCContextProvider = HPCContext.Provider;