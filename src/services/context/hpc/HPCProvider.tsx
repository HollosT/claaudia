import { useEffect, useState } from "react"
import { HPCContextProvider } from "./hpc-context";
import { SYSTEM_DATA } from "src/services/types/hpc/constant";
import { HPCCategory, HPCCategoryType, SystemType } from "src/services/types/hpc/hpc";
import { getAllSystemData } from "src/services/firebase/firebase.utils";
import { useFetchData } from "src/hooks";



interface HPCProviderProps {
    children: React.ReactNode;
}

const HPCProvider: React.FC<HPCProviderProps>= (props) => {
    const {data} = useFetchData(getAllSystemData)
    const [systemData, setSystemData] = useState<HPCCategoryType[] | []>([])
    const [currentSystemData, setCurrentSystemData] = useState<HPCCategoryType | {}>({})
    useEffect(() => {
      if(data) {
        handleSystemData(data)
      }
    }, [data])
  
   
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
            }}
        >
            {props.children}
        </HPCContextProvider>
    )
}

export default HPCProvider;