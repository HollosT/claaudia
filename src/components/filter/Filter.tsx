import { useContext, useEffect, useState } from "react";
import { keys } from "src/hooks";
import { DefinitonContext } from "src/services/context/definition/definition-context";


interface FilterProps<T> {
    data: T; // an array of elements that will be used for filtering
    handleChange: (data: string) => void; // the callback that will handle the change event
    title: string; // Customizable title
    isSearching?: boolean; // used when there is searching possbility alongside the filtering --> to be able to reset one and the other
    isDefinition?: boolean // responsible for assigning possible class names if it is needed
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


    // Generating the filter options
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
                    <p className={isDefinition ? "filter-header--title u-margin-bottom-tiny fitler-definition--header" : "filter-header--title u-margin-bottom-tiny"}>
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

