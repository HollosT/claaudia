import { Fragment, useState } from "react";
import { Divider, Input, Label } from "src/atoms";
import { keys } from "src/hooks";
import { AllHPC } from "src/services/types/hpc";


import Case from "./Case";
import { UseCasesType } from "src/services/types/usecases";
import Footer from "src/components/footer/Footer";

interface FilterProps {
    cases: UseCasesType[];
}

const Filter: React.FC<FilterProps> = ({cases}) => {
    const [selectedFilter, setSelectedFilter] = useState<string | AllHPC>('All');

    const options = [
        {
            value: "All",
            label: "All use cases"
        },
        ...keys(AllHPC).map(
        (key, i) => (
            {
                value: AllHPC[key],
                label: AllHPC[key]
            }
        )
    )];

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFilter(event.target.value);
    };

    const filteredCases = selectedFilter === 'All' ?
    cases :
    cases.filter((useCase) => useCase.hpcs.includes(selectedFilter as AllHPC));


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
                                    checked={selectedFilter === opt.value}
                                    onChange={handleFilterChange}
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
                <div className="filter-results">
                    {filteredCases.map(useCase => (
                        <Case key={useCase.id} useCase={useCase} />
                    ))}
                </div>
            </section>
            <Footer id="#casesHeader" shown={filteredCases.length > 2 ? true : false} />
        </>
    )
}

export default Filter;

