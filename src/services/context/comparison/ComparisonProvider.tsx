import { useContext, useEffect, useState } from "react";
import { ComparisonContextProvider } from "./comparison-context";
import { AllHPC } from "src/services/types/hpc/hpc";
import { HPCContext } from "../hpc/hpc-context";


interface ComparisonProviderProps {
    children: React.ReactNode;
}

const ComparisonProvider: React.FC<ComparisonProviderProps>= (props) => {
    const {allHPCs: fetchedAllHPCs} = useContext(HPCContext)


    const [selectedHPC, setSelectedHPC] = useState(AllHPC.AiCloud)
    const [comparedHPC, setComparedHPC] = useState<AllHPC | false>(false)
    const [allHPC, setAllHPC] = useState(fetchedAllHPCs)

    useEffect(() => {
        if(fetchedAllHPCs) {
            setAllHPC(fetchedAllHPCs)
        }
    }, [fetchedAllHPCs])


    const handleSelectedHPC = (value: AllHPC) => {
        setSelectedHPC(value)
    }

    const handleComparedHPC = (value: AllHPC) => {
        if(value) {
            setComparedHPC(value)
        } else {
            setComparedHPC(false)
        }
            
    }

    return(
        <ComparisonContextProvider
            value={{
               selectedHPC,
               handleSelectedHPC,
               allHPC,
               comparedHPC,
               handleComparedHPC,
               
            }}
        >
            {props.children}
        </ComparisonContextProvider>
    )
}

export default ComparisonProvider;