import { AllHPC, HarwareSpecType } from "src/services/types/hpc/hpc";
import { Check, X } from "../svg";

const HardwareSpec: React.FC<{data: HarwareSpecType, currHpc?: AllHPC}> = ({data, currHpc}) => {
    const stratoBuyIn =  currHpc === AllHPC.StratoBuyIn
    const aiCloudBuyIn =  currHpc === AllHPC.AiCloudBuyIn

    return (
        <div className="option-item">
            <p className="option-item--title">HARDWARE SPECIFICATIONS</p>

           { stratoBuyIn || aiCloudBuyIn ?
                <div className="option-item--item option-item--item-buy_in">
                    <p className="option-item--item-body">{stratoBuyIn ? 'Strato buy-in' : 'AI Cloud buy-in'} has no limitations regarding hardware, as users are responsible for purchasing their own server hardware.</p>
                </div>
            :
            <>
                <div className="option-item--item">
                        {data.vcpu === -1 ? <X /> :  <Check /> }
                        {data.vcpu === -1 ? <p className="option-item--item-body">Non vCPU centric system</p> : <p className="option-item--item-body">{`Up to ${data.vcpu} VCPU`}</p>}
                    </div>
                    <div className="option-item--item">
                        {data.netwrok_storage === -1 ? <X /> :  <Check /> }
                        {data.netwrok_storage === -1 ? <p className="option-item--item-body">No Network storage</p> : <p className="option-item--item-body">{ data.network_storage_plus ?   `${data.netwrok_storage}+ GB network storage` : `Up to ${data.netwrok_storage} GB network storage`}</p>}
                    </div>
                    <div className="option-item--item">
                        {data.memory === -1 ? <X /> : <Check />}
                        {data.memory === -1 ? <p className="option-item--item-body">No Memory</p> : <p className="option-item--item-body">{typeof data.memory !== 'string' ?`Up to ${data.memory} GB memory` : `${data.memory} memory`}</p>}
                    </div>
                    <div className="option-item--item">
                        {data.gpu === -1 ? <X /> : <Check />}
                        {data.gpu === -1  ? <p className="option-item--item-body">No GPU access</p> : <p className="option-item--item-body">{`Up to ${data.gpu} GB GPU`}</p>}
                    </div>
                    <div className="option-item--item">
                        {data.shared_temporary_storage === -1 ? (data.shared_temporary_storage_unlimited ? <Check /> : <X /> ): <Check />}
                        {data.shared_temporary_storage === -1 ? <p className="option-item--item-body">{data.shared_temporary_storage_unlimited ? "Unlimited shared temporary storage" : "No shared temporary storage"}</p> : <p className="option-item--item-body">{`Up to ${data.shared_temporary_storage} GB shared temporary storage`}</p>}
                    </div>
            </>
            }
        </div>
    )
}

export default HardwareSpec;