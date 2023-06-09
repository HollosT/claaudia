import { DataLevel as DataLevelType } from "src/services/types/hpc/hpc"

const DataLevel: React.FC<{ data: DataLevelType[] }> = ({ data }) => {

    return (
        <div className="data-level">
            <p className="data-level--title">Data classification levels:</p>
            {data.map(d => (
                <span key={d} className={`data-level--item data-level--item-${d}`}>{d}</span>
            ))}
        </div>
    )
}

export default DataLevel