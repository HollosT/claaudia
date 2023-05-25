import { ResourceAvailabilityType } from "src/services/types/hpc/hpc";
import { Check, X } from "../svg";

const Resource: React.FC<{data: ResourceAvailabilityType}> = ({data}) => {

    return (
        <div className="option-item">
            <p className="option-item--title">RESOURCE AVAILABILITY</p>

            <div className="option-item--item">
                {data.payment ? <X /> : <Check /> }
                {data.payment ?  <p className="option-item--item-body">Payment required</p> : <p className="option-item--item-body">No payment required</p>}
            </div>
            <div className="option-item--item">
                {data.time_limitation ?  <X /> : <Check />}
                {data.time_limitation ? <p className="option-item--item-body">Maximum time of use applies</p> : <p className="option-item--item-body">No maximum time of use</p>}
            </div>
            <div className="option-item--item">
                {data.minimum_time ?  <X /> : <Check />}
                {data.minimum_time ? <p className="option-item--item-body">Minimum time of use 1 month</p> : <p className="option-item--item-body">No minimum time of use</p>}
            </div>
            <div className="option-item--item">
                {data.own_resources ? <Check /> : <X />}
                {data.own_resources ? <p className="option-item--item-body">All resources to yourself</p> : <p className="option-item--item-body">Resources not only to yourself</p>}
            </div>
        </div>
    )
}

export default Resource;