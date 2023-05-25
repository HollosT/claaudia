import { SkillType } from "src/services/types/hpc/hpc"
import { Check} from "../svg"

const Skills: React.FC<{data: SkillType}> = ({data}) => {

    return (
        <div className="option-item">
            <p className="option-item--title">REQUIRED SKILLS & KNOWLEDGE</p>

            <div className="option-item--item">
                {data.linux  ?  <Check /> : null}
                {data.linux  ? <p className="option-item--item-body">{data.linux}</p> : null}
            </div>
            <div className="option-item--item">
                {data.programming  ?  <Check /> : null}
                {data.programming  ? <p className="option-item--item-body">{data.programming}</p> : null}
            </div>
            <div className="option-item--item">
                {data.ssh  ?  <Check /> : null}
                {data.ssh  ? <p className="option-item--item-body">SSH Connection</p> : null}
            </div>
            <div className="option-item--item">
                {data.containers  ?  <Check /> : null}
                {data.containers  ? <p className="option-item--item-body">Containers</p> : null}
            </div>
        </div>
    )
}

export default Skills