import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Input } from "src/atoms";
import { Magnifier } from "./icon";
import { DefinitonContext } from "src/services/context/definition/definition-context";

interface SearchProps {
    handleChange: (query: string) => void;
    className?: string;
    isFiltering?: boolean
}

const Search: React.FC<SearchProps> = ({ handleChange, className, isFiltering }) => {
    const [searchInput, setSearchInput] = useState<string>("");
    const { searching } = useContext(DefinitonContext)

    useEffect(() => {
        if(isFiltering) {
            setSearchInput("")
        }
    }, [isFiltering])

    useEffect(() => {
        
        const timer = setTimeout(() => {
            handleChange(searchInput)
        }, 500);

        return () => clearTimeout(timer)

    }, [searchInput, handleChange])

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.currentTarget.value)
        searching()
    }

    return (
        <div className={`search ${className}`}>
            <Input
                className="search-field"
                name="definition"
                placeholder="Search for a specific definition"
                value={searchInput}
                onChange={handleInput}
            />
            <Magnifier className="search-icon" />
        </div>
    )
}
export default Search;