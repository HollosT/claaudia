import { Fragment, useContext, useEffect, useState } from "react";
import { ArrowRight, Divider, Input, Label } from "src/atoms";
import { keys } from "src/hooks";
import { DefinitonContext } from "src/services/context/definition/definition-context";

interface FilterProps<T> {
    data: T;
    handleChange: (data: string) => void;
    title: string
    isSearching?: boolean
}

interface OptionType {
    label: string;
    value: string
}

const Filter = <T,>({ data, handleChange, title, isSearching }: FilterProps<T>) => {
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
                    <p className="filter-header--title u-margin-bottom-small">{title}
                    <ArrowRight className="filter-arrow" />
                    </p>
                    
                    <div className="filter-header--filter u-margin-bottom-medium">
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

