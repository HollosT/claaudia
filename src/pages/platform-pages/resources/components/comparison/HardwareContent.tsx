import { useContext } from "react";
import PieChart from "src/components/pie/PieChart";
import { ComparisonContext } from "src/services/context/comparison/comparison-context";
import { CpuGpuIcon, MemoryIcon, NetworkStorageIcon, TemporaryStorageIcon } from "../svg";
;

const HardwareContent: React.FC<{ compared?: boolean }> = ({ compared }) => {
    const { allHPC, comparedHPC, selectedHPC } = useContext(ComparisonContext);

    const hpc = allHPC.find(h => h.name === (compared ? comparedHPC : selectedHPC))
    const comparedVal = allHPC.find(h => h.name === (compared ? selectedHPC : comparedHPC));



    return (
        <>
            {hpc ?
                <div className="select-item u-margin-bottom-medium">
                    <div className="select-item--item select-item--item-hardware">
                        <div className="select-item--item-body-icon">
                            <CpuGpuIcon />
                        </div>
                        <div className="select-item--item-body">
                            <div className="select-item--item-body_content">
                                <span className="select-item--item-body_content-title">vCPU</span>
                                <h3 className="select-item--item-body_content-data">{hpc.hardware_spec.vcpu !== -1 ? `Up to ${hpc.hardware_spec.vcpu} vCPU's` : `Unlimited vCPU`}</h3>
                            </div>
                            <PieChart val1={hpc.hardware_spec.vcpu} val2={comparedVal?.hardware_spec.vcpu} />
                        </div>
                    </div>
                    <div className="select-item--item select-item--item-hardware">
                        <div className="select-item--item-body-icon">
                            <CpuGpuIcon />
                        </div>
                        <div className="select-item--item-body">
                            <div className="select-item--item-body_content">
                                <span className="select-item--item-body_content-title">vGPU</span>
                                <h3 className="select-item--item-body_content-data">{hpc.hardware_spec.gpu !== -1 ? `Up to ${hpc.hardware_spec.gpu} vGPU's` : `Unlimited vGPU`}</h3>
                            </div>
                            <PieChart val1={hpc.hardware_spec.gpu} val2={comparedVal?.hardware_spec.gpu} />
                        </div>
                    </div>
                    <div className="select-item--item select-item--item-hardware">
                        <div className="select-item--item-body-icon">
                            <MemoryIcon />
                        </div>
                        <div className="select-item--item-body">
                            <div className="select-item--item-body_content">
                                <span className="select-item--item-body_content-title">Memory</span>
                                <h3 className="select-item--item-body_content-data">{hpc.hardware_spec.memory !== -1 ? `Up to ${hpc.hardware_spec.memory} GB` : `Unlimited Memory`}</h3>
                            </div>
                            <PieChart val1={hpc.hardware_spec.memory} val2={comparedVal?.hardware_spec.memory} />
                        </div>
                    </div>
                    <div className="select-item--item select-item--item-hardware">
                        <div className="select-item--item-body-icon">
                            <NetworkStorageIcon />
                        </div>
                        <div className="select-item--item-body">
                            <div className="select-item--item-body_content">
                                <span className="select-item--item-body_content-title">Network storage</span>
                                <h3 className="select-item--item-body_content-data">{hpc.hardware_spec.netwrok_storage !== -1 ? `Up to ${hpc.hardware_spec.netwrok_storage} GB` : `Unlimited Network storage`}</h3>
                            </div>
                            <PieChart val1={hpc.hardware_spec.netwrok_storage} val2={comparedVal?.hardware_spec.netwrok_storage} />
                        </div>
                    </div>
                    <div className="select-item--item select-item--item-hardware">
                        <div className="select-item--item-body-icon">
                            <TemporaryStorageIcon />
                        </div>
                        <div className="select-item--item-body">
                            <div className="select-item--item-body_content">
                                <span className="select-item--item-body_content-title">Shared temporary storage</span>
                                <h3 className="select-item--item-body_content-data">{hpc.hardware_spec.shared_temporary_storage !== 0 ? `${hpc.hardware_spec.shared_temporary_storage} GB shared temporary storage` : `No shared temporary storage`}</h3>
                            </div>
                            <PieChart val1={hpc.hardware_spec.shared_temporary_storage} val2={comparedVal?.hardware_spec.shared_temporary_storage} />
                        </div>
                    </div>
                </div>
                :
                null
            }
        </>
    );
}

export default HardwareContent;