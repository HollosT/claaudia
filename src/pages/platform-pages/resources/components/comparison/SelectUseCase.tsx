import { useContext } from "react";
import { ComparisonContext } from "src/services/context/comparison/comparison-context";

const SelectUseCase: React.FC<{compared?:  boolean}> = ({compared}) => {
    const { allHPC, selectedHPC, comparedHPC } = useContext(ComparisonContext);

    const currHpc = compared ? comparedHPC : selectedHPC
    const hpc = allHPC.find(h => h.name === currHpc);


    return (
        <>
            {hpc && <p className="select-usecase u-margin-bottom-medium">
                {hpc.useCase}
            </p>}
        </>
    )
}

export default SelectUseCase;