import { useContext, useState } from "react";
import { ComparisonContextProvider } from "./comparison-context";
import { AllHPC } from "src/services/types/hpc/hpc";
import { ALL_HPCS_DATA } from "src/services/types/hpc/constant";


interface ComparisonProviderProps {
    children: React.ReactNode;
}

const ComparisonProvider: React.FC<ComparisonProviderProps>= (props) => {
    const [selectedHPC, setSelectedHPC] = useState(AllHPC.AiCloud)
    const [allHPC, setAllHPC] = useState(ALL_HPCS_DATA)

    const handleSelectedHPC = (value: AllHPC) => {
        setSelectedHPC(value)
    }

    return(
        <ComparisonContextProvider
            value={{
               selectedHPC,
               handleSelectedHPC,
               allHPC
            }}
        >
            {props.children}
        </ComparisonContextProvider>
    )
}

export default ComparisonProvider;