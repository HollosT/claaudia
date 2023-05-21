import { DataLevel } from "src/services/types/hpc/hpc";
import { Check, X } from "../svg";


const OptionData: React.FC<{data: DataLevel[]}> = ({data}) => {

    const dataLabeling = (): string => {
        let value = '';
        data.forEach((d, i) => {
            if(i === 0) {
                value += d
            } else {
                value += `, ${d}`;
            }
        });
        return value;
      };

    return (
        <div className="option-item">
            <p className="option-item--title">DATA</p>

            <div className="option-item--item">
                {data.length > 0 ?  <Check /> : <X />}
                {data.length > 0 ? <p className="option-item--item-body">Data categories {dataLabeling()}</p> : <p className="option-item--item-body">There is no data level</p>}
            </div>
        </div>
    )
}

export default OptionData;