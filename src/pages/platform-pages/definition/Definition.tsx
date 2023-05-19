
import { getAllDefintions } from "src/services/firebase/firebase.utils";
import { useFetchData } from "src/hooks";
import { Loading } from "src/atoms";
import DefinitionBody from "./DefinitionBody";


const Definition: React.FC = () => {
    const {data,loading} = useFetchData(getAllDefintions)
    
    if(!data || loading) {
        return <Loading />
    }

    return (
        <section className="definition">
            <div className="definition-header u-margin-bottom-small">
                <h1 className='primary-header u-margin-bottom-small'>Definitions library</h1>
                <p>Find out more about high-performance computing and the terminology within this topic to be able to understand what is relevant to you and what you need to know to successfully operate the systems you can access.</p>
            </div>

            <DefinitionBody data={data} />
            
        </section>

    )
}

export default Definition;