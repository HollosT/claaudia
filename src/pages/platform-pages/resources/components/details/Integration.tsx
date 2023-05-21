import { IntegrationType } from "src/services/types/hpc/hpc";
import { Check, X } from "../svg";

const Integration: React.FC<{ data: IntegrationType }> = ({ data }) => {

    return (
        <div className="option-item">
            <p className="option-item--title">DATA</p>

            <div className="option-item--item">
                {data.gui ? <Check /> : <X />}
                {data.gui ? <p className="option-item--item-body">Possible to add GUI</p> : <p className="option-item--item-body">Not possible to add GUI</p>}
            </div>
            <div className="option-item--item">
                {data.web_browser ? <Check /> : <X />}
                {data.web_browser ? <p className="option-item--item-body">Possible use of web browser</p> : <p className="option-item--item-body">Not possible use of web browser</p>}
            </div>
        </div>
    )
}

export default Integration;