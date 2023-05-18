import { Fragment, useState } from "react";
import { Divider, Input, Label } from "src/atoms";
import { keys } from "src/hooks";

interface FilterProps<T> {
    data: T;
    handleChange: (data: string) => void
}

interface OptionType {
    label: string;
    value: string
}

const Filter = <T,>({ data, handleChange }: FilterProps<T>) => {
    const [active, setActive] = useState<string | T>("All")
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
        setActive(event.currentTarget.value)
        handleChange(event.currentTarget.value)
    };

    return (
        <>
            <section className="filter">
                <div className="filter-header">
                    <p className="filter-header--title u-margin-bottom-small">Filter use cases by used PC</p>
                    <div className="filter-header--filter u-margin-bottom-medium">
                        {options.map(opt => (
                            <Fragment key={opt.value}>
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
                            </Fragment>
                        ))}
                    </div>
                    <Divider />
                </div>
            </section>
        </>
    )
}

export default Filter;

