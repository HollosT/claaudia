import { Link, useNavigate } from "react-router-dom";
import { PreviewType } from "../Home";

const Preview: React.FC<{prev: PreviewType}> = ({prev}) => {
    const navigate = useNavigate()

    const handleNav = () => {
        navigate(prev.link)
    }

    return (
        <article onClick={handleNav} className="preview">
            <div>
                <div className="preview-icon u-margin-bottom-small">
                    {prev.icon}
                </div>
                <h5 className="preview-title">{prev.title}</h5>
                <p className="preview-body">{prev.body}</p>
            </div>
            <Link className="preview-nav" to={prev.link}>{prev.linkTitle}</Link>
        </article>
    )
};

export default Preview;