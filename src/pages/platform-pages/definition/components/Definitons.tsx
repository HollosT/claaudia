import { DefinitionType } from "src/services/types/definition";
import { DefinitionItem } from ".";

const Definitions: React.FC<{data: DefinitionType[]}> = ({data}) => {
    
    if(data.length === 0) {
        return null
    }
    return (

                <div>
                <h4 className="definition-items--title u-margin-top-small">{data[0].topic} definitions</h4>
                    {data.map(item => (
                        <DefinitionItem key={item.id} def={item} />
                    ))}
                </div>
    )
}

export default Definitions;