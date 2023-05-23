import { HarwareSpecType } from "src/services/types/hpc/hpc";
import { Check, X } from "../svg";

const HardwareContent:React.FC<{data: HarwareSpecType}> = ({data}) => {

    return (
        <div className="option-item">
            <p className="option-item--title">HARDWARE SPECIFICATIONS</p>

            <div className="option-item--item">
                {data.vcpu === -1 ? <X /> : <Check />}
                {data.vcpu === -1 ? <p className="option-item--item-body">No VCPU</p> : <p className="option-item--item-body">{typeof data.vcpu !== 'string' ?`Up to ${data.vcpu} VCPU` : `${data.vcpu} VCPU`}</p>}
            </div>
            <div className="option-item--item">
                {data.netwrok_storage === -1 ? <X /> : <Check />}
                {data.netwrok_storage === -1 ? <p className="option-item--item-body">No Network storage</p> : <p className="option-item--item-body">{typeof data.netwrok_storage !== 'string' ?`Up to ${data.netwrok_storage} GB network storage` : `${data.netwrok_storage} network storage`}</p>}
            </div>
            <div className="option-item--item">
                {data.memory === -1 ? <X /> : <Check />}
                {data.memory === -1 ? <p className="option-item--item-body">No Memory</p> : <p className="option-item--item-body">{typeof data.memory !== 'string' ?`Up to ${data.memory} GB memory` : `${data.memory} memory`}</p>}
            </div>
            <div className="option-item--item">
                {data.gpu === -1 ? <X /> : <Check />}
                {data.gpu === -1 ? <p className="option-item--item-body">No GPU access</p> : <p className="option-item--item-body">{typeof data.gpu !== 'string' ?`Up to ${data.gpu} GB GPU` : `${data.gpu} GPU`}</p>}
            </div>
            <div className="option-item--item">
                {data.shared_temporary_storage === -1 ? <X /> : <Check />}
                {data.shared_temporary_storage === -1 ? <p className="option-item--item-body">No shared temporary storage</p> : <p className="option-item--item-body">{typeof data.shared_temporary_storage !== 'string' ?`Up to ${data.shared_temporary_storage} GB shared temporary storage` : `${data.shared_temporary_storage} shared temporary storage`}</p>}
            </div>
        </div>
    )
}

export default HardwareContent;