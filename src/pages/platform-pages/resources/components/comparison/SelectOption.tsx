import {  useContext, useState } from "react"
import { ComparisonContext } from "src/services/context/comparison/comparison-context"
import Select from "react-select"
import { AllHPC } from "src/services/types/hpc/hpc"
import { keys } from "src/hooks"


interface SelectOptionProps {
    compared?: boolean;
}

interface OptionType {
    value: AllHPC | null;
    label: string;
  }

const SelectOption: React.FC<SelectOptionProps> = ({compared}) => {
    const { selectedHPC, handleSelectedHPC, handleComparedHPC } = useContext(ComparisonContext);
    const [active, setActive] = useState<AllHPC | string>(compared ? "" : selectedHPC)

    const options = compared ? [...keys(AllHPC).filter(hpc => AllHPC[hpc] !== selectedHPC).map(hpc => {
        return {
            value: AllHPC[hpc],
            label: AllHPC[hpc]
        }
    })] : [...keys(AllHPC).map(hpc => {
        return {
            value: AllHPC[hpc],
            label: AllHPC[hpc]
        }
    })]

    const selectedValue = options.find(opt => opt.value === active)

    const handleChange = (hpc: OptionType | null) => {
        if (hpc && hpc.value !== null) {
            if(compared) {
                handleComparedHPC(hpc.value)
            } else {
                handleSelectedHPC(hpc.value)
            }
            setActive(hpc.value)
        } else {
            setActive("")
        }
    }

    return (
        <div className="select-select u-margin-bottom-small">
            <Select 
                    options={options}
                    value={selectedValue}
                    placeholder="Select an HPC"
                    onChange={handleChange}
            />


        </div>
    )
}

export default SelectOption;