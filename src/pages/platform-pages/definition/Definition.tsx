
import DefinitionBody from "./DefinitionBody";


const Definition: React.FC = () => {


    return (
        <section className="definition">
            <div className="definition-header u-margin-bottom-small">
                <h1 className='primary-header u-margin-bottom-small'>Definitions library</h1>
                <p>Find out more about high-performance computing and the terminology within this topic to be able to understand what is relevant to you and what you need to know to successfully operate the systems you can access.</p>
            </div>

            <DefinitionBody />
            
        </section>

    )
}

export default Definition;