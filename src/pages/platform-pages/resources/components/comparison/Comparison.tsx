import platformRoutes from "src/services/router/platform-routes"
import { DetailsHeader } from "../details"
import {  useContext, useState } from "react"
import { ComparisonContext } from "src/services/context/comparison/comparison-context"
import Select from "react-select"
import { AllHPC } from "src/services/types/hpc/hpc"
import { keys } from "src/hooks"


const Comparison: React.FC = () => {
    const { selectedHPC } = useContext(ComparisonContext);
    const [active1, setActive1] = useState<AllHPC>(selectedHPC)
    const [active2, setActive2] = useState<AllHPC>(selectedHPC === AllHPC.AiCloud ? AllHPC.AiCloud : AllHPC.StratoRegular)

    const options1 = [...keys(AllHPC).map(hpc => {
        return {
            value: AllHPC[hpc],
            label: AllHPC[hpc]
        }
    })]

    const options2 = [
        ...keys(AllHPC).filter(hpc => AllHPC[hpc] === selectedHPC).map(hpc => {
        return {
            value: AllHPC[hpc],
            label: AllHPC[hpc]
        }
    })]

   
    const selectedValue1 = options1.find(opt => opt.value === active1)
    const selectedValue2 = options2.find(opt => opt.value === active2)

    return (
        <section className="comparison">
            <DetailsHeader title="Compare two HPC systems" body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" path={platformRoutes.strato.path} />
            <h3>{selectedHPC}</h3>

            <div className="comaprison-select">
                <Select
                    options={options1}
                    value={selectedValue1}
                    onChange={(hpc) => setActive1(hpc?.value || AllHPC.AiCloud)}
                />
                <Select
                    options={options2}
                    onChange={(hpc) => setActive2(hpc?.value || AllHPC.AiCloud)}
                    value={selectedValue2}
                />
            </div>
        </section>
    )
}

export default Comparison;