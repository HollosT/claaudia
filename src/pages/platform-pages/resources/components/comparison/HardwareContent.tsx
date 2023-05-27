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
                                <h3 className="select-item--item-body_content-data">{hpc.hardware_spec.vcpu !== -1 ? `Up to ${hpc.hardware_spec.vcpu} vCPU's` : (hpc.hardware_spec.vcpu_budget ? `Budget limited`  : `Non vCPU centric system`)}</h3>
                            </div>
                          {hpc.hardware_spec.vcpu_budget ? <PieChart val1={100} val2={0} /> : <PieChart val1={hpc.hardware_spec.vcpu} val2={comparedVal?.hardware_spec.vcpu} />}
                        </div>
                    </div>
                    <div className="select-item--item select-item--item-hardware">
                        <div className="select-item--item-body-icon">
                            <CpuGpuIcon />
                        </div>
                        <div className="select-item--item-body">
                            <div className="select-item--item-body_content">
                                <span className="select-item--item-body_content-title">vGPU</span>
                                <h3 className="select-item--item-body_content-data">{hpc.hardware_spec.gpu !== -1 ? ( hpc.hardware_spec.gpu !== 0 ?`Up to ${hpc.hardware_spec.gpu} vGPU's` : `No GPU access`) : (hpc.hardware_spec.gpu_budget ? `Budget limited`  : `Non GPU centric system`)}</h3>
                            </div>
                           {hpc.hardware_spec.gpu_budget ? <PieChart val1={100} val2={0} /> :  <PieChart val1={hpc.hardware_spec.gpu} val2={comparedVal?.hardware_spec.gpu} />}
                        </div>
                    </div>
                    <div className="select-item--item select-item--item-hardware">
                        <div className="select-item--item-body-icon">
                            <MemoryIcon />
                        </div>
                        <div className="select-item--item-body">
                            <div className="select-item--item-body_content">
                                <span className="select-item--item-body_content-title">Memory</span>
                                <h3 className="select-item--item-body_content-data">{hpc.hardware_spec.memory !== -1 ? `Up to ${hpc.hardware_spec.memory} GB` : (hpc.hardware_spec.memory_budget ? `Budget limited` : `No Memory`)}</h3>
                            </div>
                            {hpc.hardware_spec.memory_budget ? <PieChart val1={100} val2={0} /> :   <PieChart val1={hpc.hardware_spec.memory} val2={comparedVal?.hardware_spec.memory} />}
                        </div>
                    </div>
                    <div className="select-item--item select-item--item-hardware">
                        <div className="select-item--item-body-icon">
                            <NetworkStorageIcon />
                        </div>
                        <div className="select-item--item-body">
                            <div className="select-item--item-body_content">
                                <span className="select-item--item-body_content-title">Network storage</span>
                                <h3 className="select-item--item-body_content-data">
                                    {hpc.hardware_spec.netwrok_storage !== -1 ? (hpc.hardware_spec.network_storage_plus ? `${hpc.hardware_spec.netwrok_storage}+ GB` : `Up to ${hpc.hardware_spec.netwrok_storage} GB` ): (hpc.hardware_spec.network_storage_budget ? `Budget limited` : 'No network storage')}
                                    <span className={hpc.hardware_spec.network_storage_plus ? "select-item--item-body_content-data--tooltip" : "select-item--item-body_content-data--tooltip hide"}>{hpc.hardware_spec.network_storage_plus ? 'Possible to add more' : null}</span>
                                </h3>
                            </div>
                            {hpc.hardware_spec.network_storage_plus || hpc.hardware_spec.network_storage_budget ? <PieChart val1={100} val2={0} /> :  <PieChart val1={hpc.hardware_spec.netwrok_storage} val2={comparedVal?.hardware_spec.netwrok_storage} />}
                        </div>
                    </div>
                    <div className="select-item--item select-item--item-hardware">
                        <div className="select-item--item-body-icon">
                            <TemporaryStorageIcon />
                        </div>
                        <div className="select-item--item-body">
                            <div className="select-item--item-body_content">
                                <span className="select-item--item-body_content-title">Shared temporary storage</span>
                                <h3 className="select-item--item-body_content-data">{hpc.hardware_spec.shared_temporary_storage !== -1 ? `${hpc.hardware_spec.shared_temporary_storage} GB shared temporary storage` : `No shared temporary storage`}</h3>
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