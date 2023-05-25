import { useContext } from "react";
import { ComparisonContext } from "src/services/context/comparison/comparison-context";
import { DataIcon } from "../svg";


const SelectData: React.FC<{compared?:  boolean}> = ({compared})=> {
    const { allHPC, selectedHPC, comparedHPC } = useContext(ComparisonContext);

    const currHpc = compared ? comparedHPC : selectedHPC
    const hpc = allHPC.find(h => h.name === currHpc);

    return (
        <> 
        {hpc ? 
             <div className="select-item u-margin-bottom-medium">
                <div className="select-item--item">
                    <div className="select-item--item-body-icon">
                        <DataIcon />
                    </div>
                    <div className="select-item--item-body">
                        <div className="select-item--item-body_content">
                            <span className="select-item--item-body_content-title">Data</span>
                            <h3 className="select-item--item-body_content-data select-data--container">Data levels 
                            <div className="data-level">
                                {hpc.data.map(d => (
                                    <span key={d} className={`data-level--item data-level--item-${d}`}>{d}</span>
                                ))}
                            </div>
                            </h3>
                        </div>
                    </div>
                </div>
            
            </div>
            :
            null
        }
        </>

    )
}

export default SelectData;