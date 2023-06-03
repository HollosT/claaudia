import { createContext } from "react";
import { HPCCategoryType, SystemType } from "src/services/types/hpc/hpc";

interface HPCContextProps {
    systemData: HPCCategoryType[] | [],
    currentSystemData: HPCCategoryType | {},
    getCurrentSytemData: (type: SystemType) => HPCCategoryType | null;
}

export const HPCContext = createContext<HPCContextProps>({
    systemData: [],
    currentSystemData: {},
    getCurrentSytemData: () => null,

});

export const HPCContextProvider = HPCContext.Provider;