import { createContext } from "react";

interface DefintionContextProps {
    isSearching: boolean;
    isFiltering: boolean;
    filtering: () => void;
    searching: () => void;
}

export const DefinitonContext = createContext<DefintionContextProps>({
    isSearching: false,
    isFiltering: false,
    filtering: () => {},
    searching: () => {},
});

export const DefinitonContextProvider = DefinitonContext.Provider;