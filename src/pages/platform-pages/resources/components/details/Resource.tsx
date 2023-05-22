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
                {data.time_limitation ? <Check /> : <X />}
                {data.time_limitation ? <p className="option-item--item-body">No time limitations</p> : <p className="option-item--item-body">Time limitations apply</p>}
            </div>
            <div className="option-item--item">
                {data.minimum_time ? <Check /> : <X />}
                {data.minimum_time ? <p className="option-item--item-body">No minimum time of use</p> : <p className="option-item--item-body">Yes, minimum 1 month</p>}
            </div>
            <div className="option-item--item">
                {data.own_resources ? <Check /> : <X />}
                {data.own_resources ? <p className="option-item--item-body">All resources to yourself</p> : <p className="option-item--item-body">Shared resources</p>}
            </div>
        </div>
    )
}

export default Resource;