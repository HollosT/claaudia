import { useContext } from "react";
import { ComparisonContext } from "src/services/context/comparison/comparison-context";
import { ApplicationIcon } from "../svg";

const Application: React.FC<{compared?:  boolean}> = ({compared}) => {
    const { allHPC, selectedHPC, comparedHPC } = useContext(ComparisonContext);

    const currHpc = compared ? comparedHPC : selectedHPC
    const hpc = allHPC.find(h => h.name === currHpc);


    return (
        <>
            {hpc ?
                    <div className="select-item--item u-margin-bottom-medium">
                        <div className="select-item--item-body-icon">
                          <ApplicationIcon />
                        </div>
                        <div className="select-item--item-body">
                            <div className="select-item--item-body_content">
                                <span className="select-item--item-body_content-title">Application process</span>
                                <h3 className="select-item--item-body_content-data">{hpc.application}</h3>
                            </div>
                        </div>
                    </div>
                :
                null
            }
        </>
    );
}

export default Application;