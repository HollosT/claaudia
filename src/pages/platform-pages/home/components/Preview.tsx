import { Link } from "react-router-dom";
import platformRoutes from "src/services/router/platform-routes";
import { PreviewType } from "../Home";

const Preview: React.FC<{prev: PreviewType}> = ({prev}) => {

    return (
        <article className="preview">
            <div className="preview-icon">
                {prev.icon}
            </div>
            <h5 className="preview-item--title">{prev.title}</h5>
            <p className="preview-item--body">{prev.body}</p>
            <Link className="preview-item--nav" to={platformRoutes.resources.path}>{prev.linkTitle}</Link>
        </article>
    )
};

export default Preview;