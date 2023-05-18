import { Fragment, useState } from "react";
import { Divider, Input, Label } from "src/atoms";
import { keys } from "src/hooks";
import { AllHPC } from "src/services/types/hpc";
import { UseCasesType } from "src/services/types/usecases";
import { v4 as uuidv4} from 'uuid'
import Case from "./Case";


const DUMMY_CASES: UseCasesType[]  = [
    {
        id: uuidv4(),
        type: "Strato projects (With and without GPU access)",
        title: "Synthetic data generation and probabilistic graphical model: Integrates the power of CPU and GPU",
        hpcs: [AllHPC.StratoRegular ,AllHPC.StratoProjects],
        features: [
            {
                feature: "Powerful GPU processinig"
            },
            {
                feature: "Data levels 0 and 1"
            },
            {
                feature: "Powerful GPU processinig"
            },
        ],
        body: "Strato Projects is a great solution for those who work with machine learning and need to run their experiments on servers with many CPU cores, for example for creating synthetic data. For some methods, just like probabilistic graphical models, you can take the advantage of the GPU available on this system and run the algorithms effectively. Strato Projects is relevant for data levels 0 and 1."
    },
    {
        id: uuidv4(),
        type: "Strato regular",
        title: "Synthetic data generation and probabilistic graphical model: Integrates the power of CPU and GPU",
        hpcs: [AllHPC.StratoRegular],
        features: [
            {
                feature: "Powerful GPU processinig"
            },
            {
                feature: "Data levels 0 and 1"
            },
            {
                feature: "Powerful GPU processinig"
            },
        ],
        body: "Strato Projects is a great solution for those who work with machine learning and need to run their experiments on servers with many CPU cores, for example for creating synthetic data. For some methods, just like probabilistic graphical models, you can take the advantage of the GPU available on this system and run the algorithms effectively. Strato Projects is relevant for data levels 0 and 1."
    },
    {
        id: uuidv4(),
        type: "Strato buy-in",
        title: "Synthetic data generation and probabilistic graphical model: Integrates the power of CPU and GPU",
        hpcs: [AllHPC.StratoRegular, AllHPC.StratoBuyIn],
        features: [
            {
                feature: "Powerful GPU processinig"
            },
            {
                feature: "Data levels 0 and 1"
            },
            {
                feature: "Powerful GPU processinig"
            },
        ],
        body: "Strato Projects is a great solution for those who work with machine learning and need to run their experiments on servers with many CPU cores, for example for creating synthetic data. For some methods, just like probabilistic graphical models, you can take the advantage of the GPU available on this system and run the algorithms effectively. Strato Projects is relevant for data levels 0 and 1."
    },
    {
        id: uuidv4(),
        type: "AI Cloud",
        title: "Synthetic data generation and probabilistic graphical model: Integrates the power of CPU and GPU",
        hpcs: [AllHPC.AiCloud],
        features: [
            {
                feature: "Powerful GPU processinig"
            },
            {
                feature: "Data levels 0 and 1"
            },
            {
                feature: "Powerful GPU processinig"
            },
        ],
        body: "Strato Projects is a great solution for those who work with machine learning and need to run their experiments on servers with many CPU cores, for example for creating synthetic data. For some methods, just like probabilistic graphical models, you can take the advantage of the GPU available on this system and run the algorithms effectively. Strato Projects is relevant for data levels 0 and 1."
    },
    {
        id: uuidv4(),
        type: "AI Cloud buy-in",
        title: "Synthetic data generation and probabilistic graphical model: Integrates the power of CPU and GPU",
        hpcs: [AllHPC.AiCloud, AllHPC.AiCloudBuyIn],
        features: [
            {
                feature: "Powerful GPU processinig"
            },
            {
                feature: "Data levels 0 and 1"
            },
            {
                feature: "Powerful GPU processinig"
            },
        ],
        body: "Strato Projects is a great solution for those who work with machine learning and need to run their experiments on servers with many CPU cores, for example for creating synthetic data. For some methods, just like probabilistic graphical models, you can take the advantage of the GPU available on this system and run the algorithms effectively. Strato Projects is relevant for data levels 0 and 1."
    },
    {
        id: uuidv4(),
        type: "AI Cloud projects",
        title: "Synthetic data generation and probabilistic graphical model: Integrates the power of CPU and GPU",
        hpcs: [AllHPC.AiCloud, AllHPC.AiCloudProjects],
        features: [
            {
                feature: "Powerful GPU processinig"
            },
            {
                feature: "Data levels 0 and 1"
            },
            {
                feature: "Powerful GPU processinig"
            },
        ],
        body: "Strato Projects is a great solution for those who work with machine learning and need to run their experiments on servers with many CPU cores, for example for creating synthetic data. For some methods, just like probabilistic graphical models, you can take the advantage of the GPU available on this system and run the algorithms effectively. Strato Projects is relevant for data levels 0 and 1."
    },
]


const Filter: React.FC = () => {
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
    DUMMY_CASES :
    DUMMY_CASES.filter((useCase) => useCase.hpcs.includes(selectedFilter as AllHPC));


    return (
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
    )
}

export default Filter;

