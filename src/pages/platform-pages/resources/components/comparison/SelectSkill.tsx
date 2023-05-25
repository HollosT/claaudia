import { useContext } from "react";
import { ComparisonContext } from "src/services/context/comparison/comparison-context";
import { OperatingSystemIcon, ProgrammingIcon, SshIcon, } from "../svg";
;

const SelectSkill: React.FC<{ compared?: boolean }> = ({ compared }) => {
    const { allHPC, comparedHPC, selectedHPC } = useContext(ComparisonContext);

    const hpc = allHPC.find(h => h.name === (compared ? comparedHPC : selectedHPC))

    return (
        <>
            {hpc ?
                <div className="select-item u-margin-bottom-medium u-margin-bottom-medium">
                   {hpc.skill.linux && <div className="select-item--item select-item--item-resource">
                        <div className="select-item--item-body-icon">
                            <OperatingSystemIcon />
                        </div>
                        <div className="select-item--item-body">
                            <div className="select-item--item-body_content">
                                <span className="select-item--item-body_content-title">Operating system</span>
                                <h3 className="select-item--item-body_content-data">{hpc.skill.linux}</h3>
                            </div>
                        </div>
                    </div>
                   }
                   {hpc.skill.programming && <div className="select-item--item select-item--item-resource">
                        <div className="select-item--item-body-icon">
                            <ProgrammingIcon />
                        </div>
                        <div className="select-item--item-body">
                            <div className="select-item--item-body_content">
                                <span className="select-item--item-body_content-title">Operating system</span>
                                <h3 className="select-item--item-body_content-data">{hpc.skill.programming}</h3>
                            </div>
                        </div>
                    </div>
                   }
                   {hpc.skill.ssh && <div className="select-item--item select-item--item-resource">
                        <div className="select-item--item-body-icon">
                            <SshIcon />
                        </div>
                        <div className="select-item--item-body">
                            <div className="select-item--item-body_content">
                                <span className="select-item--item-body_content-title">SSH</span>
                                <h3 className="select-item--item-body_content-data">SSH Connection</h3>
                            </div>
                        </div>
                    </div>
                   }
                   {hpc.skill.containers && <div className="select-item--item select-item--item-resource">
                        <div className="select-item--item-body-icon">
                            <ProgrammingIcon />
                        </div>
                        <div className="select-item--item-body">
                            <div className="select-item--item-body_content">
                                <span className="select-item--item-body_content-title">Containers</span>
                                <h3 className="select-item--item-body_content-data">Docker container</h3>
                            </div>
                        </div>
                    </div>
                   }
                </div>
                :
                null
            }
        </>
    );
}

export default SelectSkill;