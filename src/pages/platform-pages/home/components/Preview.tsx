import { Link } from "react-router-dom";
import { PreviewType } from "../Home";

const Preview: React.FC<{prev: PreviewType}> = ({prev}) => {
    return (
        <article className="preview">
            <div className="preview-icon">
                {prev.icon}
            </div>
            <h5 className="preview-title">{prev.title}</h5>
            <p className="preview-body">{prev.body}</p>
            <Link className="preview-nav" to={prev.link}>{prev.linkTitle}</Link>
        </article>
    )
};

export default Preview;