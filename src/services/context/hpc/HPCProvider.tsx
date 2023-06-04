import { useEffect, useState } from "react"
import { HPCContextProvider } from "./hpc-context";
import { HPCCategoryType, HPCType, SystemType } from "src/services/types/hpc/hpc";
import { getAllHPCs, getAllSystemData } from "src/services/firebase/firebase.utils";
import { useFetchData } from "src/hooks";



interface HPCProviderProps {
    children: React.ReactNode;
}

const HPCProvider: React.FC<HPCProviderProps>= (props) => {
    const [allHPCs, setAllHPCs] = useState<HPCType[] | []>([])
    const {data} = useFetchData(getAllSystemData)
    const {data: hpcsData} = useFetchData(getAllHPCs)
    const [systemData, setSystemData] = useState<HPCCategoryType[] | []>([])
    const [currentSystemData, setCurrentSystemData] = useState<HPCCategoryType | {}>({})
    useEffect(() => {
      if(data) {
        handleSystemData(data)
      }
    }, [data])
    useEffect(() => {
      if(hpcsData) {
        setAllHPCs(hpcsData)
      }
    }, [hpcsData])
  
   
    const getCurrentSytemData = (type: SystemType): HPCCategoryType | null => {

        if (systemData) {
         return systemData.find(data => data.name === type) as HPCCategoryType | null;
        } else {
          return null;
        }
      };

    const handleSystemData = (data: HPCCategoryType[]) => {
        setSystemData(data)
    }

    return(
        <HPCContextProvider
            value={{
                systemData,
                currentSystemData,
                getCurrentSytemData,
                allHPCs
            }}
        >
            {props.children}
        </HPCContextProvider>
    )
}

export default HPCProvider;