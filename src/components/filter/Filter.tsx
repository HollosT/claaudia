import { Fragment, useContext, useEffect, useState } from "react";
import { Divider, Input, Label } from "src/atoms";
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
    const { filtering } = useContext(DefinitonContext)

    useEffect(() => {
        if(isSearching) {
            setActive("All")
        }
    }, [isSearching])


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

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        filtering()
        setActive(event.currentTarget.value)
        handleChange(event.currentTarget.value)
    };

    return (
        <>
            <section className="filter">
                <div className="filter-header">
                    <p className="filter-header--title u-margin-bottom-small">{title}</p>
                    <div className="filter-header--filter u-margin-bottom-medium">
                        {options.map(opt => (
                            <div className="filter-item--container" key={opt.value}>
                                <Input
                                    type="radio"
                                    name="hpc"
                                    className="filter-header--filter_item-radio"
                                    value={opt.value}
                                    onChange={handleFilterChange}
                                    checked={opt.value === active}
                                    id={opt.value}
                                />
                                <Label for={opt.value} className="filter-header--filter_item-label">
                                    <span className="form__radio-button">
                                    </span>
                                    {opt.label}
                                </Label>
                            </div>
                        ))}
                    </div>
                    <Divider />
                </div>
            </section>
        </>
    )
}

export default Filter;

