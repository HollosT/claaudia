import { useContext, useState } from "react";
import { ComparisonContextProvider } from "./comparison-context";
import { AllHPC } from "src/services/types/hpc/hpc";


interface ComparisonProviderProps {
    children: React.ReactNode;
}

const ComparisonProvider: React.FC<ComparisonProviderProps>= (props) => {
    const [selectedHPC, setSelectedHPC] = useState(AllHPC.AiCloud)

    const handleSelectedHPC = (value: AllHPC) => {
        setSelectedHPC(value)
    }

    return(
        <ComparisonContextProvider
            value={{
               selectedHPC,
               handleSelectedHPC
            }}
        >
            {props.children}
        </ComparisonContextProvider>
    )
}

export default ComparisonProvider;