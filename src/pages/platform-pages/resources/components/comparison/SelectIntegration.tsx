import { useContext } from "react";
import { ComparisonContext } from "src/services/context/comparison/comparison-context";
import { GuiIcon, TimeIcon } from "../svg";


const SelectIntegration: React.FC<{compared?:  boolean}> = ({compared})=> {
    const { allHPC, selectedHPC, comparedHPC } = useContext(ComparisonContext);

    const currHpc = compared ? comparedHPC : selectedHPC
    const hpc = allHPC.find(h => h.name === currHpc);

    return (
        <> 
        {hpc ? 
             <div className="select-item u-margin-bottom-medium">
                <div className={hpc.integrations.gui ? `select-item--item select-item--item-resource no-apply` : `select-item--item select-item--item-resource apply`}>
                    <div className="select-item--item-body-icon">
                        <GuiIcon />
                    </div>
                    <div className="select-item--item-body">
                        <div className="select-item--item-body_content">
                            <span className="select-item--item-body_content-title">Interface</span>
                            <h3 className="select-item--item-body_content-data">{hpc.integrations.gui ? 'Possible to add GUI' : 'No possibility to add GUI'}</h3>
                        </div>
                    </div>
                </div>
                <div className={hpc.integrations.web_browser ? `select-item--item select-item--item-resource no-apply` : `select-item--item select-item--item-resource apply`}>
                    <div className="select-item--item-body-icon">
                        <TimeIcon />
                    </div>
                    <div className="select-item--item-body">
                        <div className="select-item--item-body_content">
                            <span className="select-item--item-body_content-title">Web browser</span>
                            <h3 className="select-item--item-body_content-data">{hpc.integrations.web_browser ? 'Possible to access Web browser' : 'No possibility of using web browser'}</h3>
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

export default SelectIntegration;