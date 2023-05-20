import { DataLevel as DataLevelType} from "src/services/types/hpc"

const DataLevel: React.FC<{data: DataLevelType[]}> = ({data}) => {

    return (
        <div className="data-level">
            <p>Data classification levels:</p>
            {data.map(d => (
                <p>{d}</p>
            ))}
        </div>
    )
}

export default DataLevel