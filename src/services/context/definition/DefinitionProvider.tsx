import { useState } from "react"
import { DefinitonContextProvider } from "./definition-context";


interface DefinitionProviderProps {
    children: React.ReactNode;
}

const DefinitionProvider: React.FC<DefinitionProviderProps>= (props) => {
    const [isFiltering, setIsFiltering] = useState(false)
    const [isSearching, setIsSearching] = useState(false)


    const filtering = () => {
        setIsFiltering(true)
        setIsSearching(false)

    }
    const searching = () => {
        setIsSearching(true)
        setIsFiltering(false)
    }

    return(
        <DefinitonContextProvider
            value={{
               isFiltering,
               isSearching,
               filtering,
               searching
            }}
        >
            {props.children}
        </DefinitonContextProvider>
    )
}

export default DefinitionProvider;