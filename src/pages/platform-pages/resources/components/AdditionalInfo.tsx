
const AdditionalInfo: React.FC<{info: string}> = ({info}) => {
    return (
        <div className="addtional-info">
            <span>icon</span>
            <p className="addtional-info--body">{info}</p>
        </div>
    )

}

export default AdditionalInfo;