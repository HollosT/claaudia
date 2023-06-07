import { DefinitionType } from "src/services/types/definition";

const DefinitionItem: React.FC<{def: DefinitionType}> = ({def}) => {

    return (
        <article className="defintion-item">
            <h5 className="defintion-item--title">{def.title}</h5>
            <p className="defintion-item--body">{def.body}</p>
            {/* <a className="defintion-item--link" target="_blank" href={def.link}>Read more about {def.linkTitle}</a> */}
        </article>
    )
}

export default DefinitionItem;