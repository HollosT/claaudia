import { InfoIcon } from "./svg";

const AdditionalInfo: React.FC<{info: string}> = ({info}) => {
    return (
        <div className="addtional-info">
            <InfoIcon />
            <p className="addtional-info--body">{info}</p>
        </div>
    )

}

export default AdditionalInfo;