import { useContext } from "react";
import { ComparisonContext } from "src/services/context/comparison/comparison-context";
import { PaymentIcon, ResourceIcon, TimeIcon } from "../svg";

const SelectResource: React.FC<{compared?:  boolean}> = ({compared})=> {
    const { allHPC, selectedHPC, comparedHPC } = useContext(ComparisonContext);

    const currHpc = compared ? comparedHPC : selectedHPC
    const hpc = allHPC.find(h => h.name === currHpc);

    return (
        <> 
        {hpc ? 
             <div className="select-item u-margin-bottom-medium">
                <div className={hpc.resource_availability.payment ? `select-item--item select-item--item-resource apply` : `select-item--item select-item--item-resource no-apply`}>
                    <div className="select-item--item-body-icon">
                        <PaymentIcon />
                    </div>
                    <div className="select-item--item-body">
                        <div className="select-item--item-body_content">
                            <span className="select-item--item-body_content-title">Payment</span>
                            <h3 className="select-item--item-body_content-data">{hpc.resource_availability.payment ? 'Payment required' : 'No payment required'}</h3>
                        </div>
                    </div>
                </div>
                <div className={hpc.resource_availability.time_limitation ? `select-item--item select-item--item-resource apply` : `select-item--item select-item--item-resource no-apply`}>
                    <div className="select-item--item-body-icon">
                        <TimeIcon />
                    </div>
                    <div className="select-item--item-body">
                        <div className="select-item--item-body_content">
                            <span className="select-item--item-body_content-title">Maximum time of use</span>
                            <h3 className="select-item--item-body_content-data">{hpc.resource_availability.time_limitation ? 'No maximum time of use' : 'Maximum time of use apply'}</h3>
                        </div>
                    </div>
                </div>
                <div className={hpc.resource_availability.minimum_time? `select-item--item select-item--item-resource apply` : `select-item--item select-item--item-resource no-apply`}>
                    <div className="select-item--item-body-icon">
                        <TimeIcon />
                    </div>
                    <div className="select-item--item-body">
                        <div className="select-item--item-body_content">
                            <span className="select-item--item-body_content-title">Minimum time of use</span>
                            <h3 className="select-item--item-body_content-data">{hpc.resource_availability.minimum_time ? 'No minimum time of use' : 'Minimum time of use 1 month'}</h3>
                        </div>
                    </div>
                </div>
                <div className={hpc.resource_availability.own_resources ? `select-item--item select-item--item-resource no-apply` : `select-item--item select-item--item-resource apply`}>
                    <div className="select-item--item-body-icon">
                        <ResourceIcon />
                    </div>
                    <div className="select-item--item-body">
                        <div className="select-item--item-body_content">
                            <span className="select-item--item-body_content-title">Resource allocation</span>
                            <h3 className="select-item--item-body_content-data">{hpc.resource_availability.own_resources ? 'All resources to yourself' : 'Resources not only to yourself'}</h3>
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

export default SelectResource;