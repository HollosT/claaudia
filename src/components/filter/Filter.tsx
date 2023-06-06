import { useContext, useEffect, useState } from "react";
import { keys } from "src/hooks";
import { DefinitonContext } from "src/services/context/definition/definition-context";


interface FilterProps<T> {
    data: T;
    handleChange: (data: string) => void;
    title: string;
    isSearching?: boolean;
    isDefinition?: boolean
}

interface OptionType {
    label: string;
    value: string
}

const Filter = <T,>({ data, handleChange, title, isSearching, isDefinition }: FilterProps<T>) => {
    const [active, setActive] = useState<string | T>("All")
    const { filtering } = useContext(DefinitonContext);

    useEffect(() => {
        if(isSearching) {
            setActive("All")
        }
    }, [isSearching, active])


    const options = [
        {
            value: "All",
            label: "All use cases"
        },
        ...keys(data).map(
        (key, i) => (
            {
                value: data[key],
                label: data[key]
            }
        )
    )] as OptionType[];

    const handleFilterChange = (value: string) => {


        filtering()
        setActive(value)
        handleChange(value)
    };

    return (
        <>
            <section className="filter">
                <div className="filter-header">
                    <p className={isDefinition ? "filter-header--title u-margin-bottom-small fitler-definition--header" : "filter-header--title u-margin-bottom-small"}>
                        {title}
                    </p>
                    
                    <div className={isDefinition ? "filter-header--filter u-margin-bottom-medium definition-filter"  : "filter-header--filter u-margin-bottom-medium"}>
                        
                            {options.map(opt => (
                                <div onClick={() => handleFilterChange(opt.value)} className={active === opt.value ? "filter-item active" : "filter-item"} key={opt.value}>
                                    <span className="filter-item--title">{opt.label}</span>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Filter;

