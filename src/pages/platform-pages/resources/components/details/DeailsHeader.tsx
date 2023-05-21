import { Link } from "react-router-dom"
import platformRoutes from "src/services/router/platform-routes";
import BackLeftArrow from "../svg/BackLeftArrow";

const DetailsHeader: React.FC<{title: string, body: string}> = ({title, body}) => {

    return (
        <div className="resource-detail--header u-margin-bottom-medium">
            <Link className="btn-outline u-margin-bottom-medium" to={platformRoutes.resources.path}> <BackLeftArrow /> Back to AAU HPC Resources</Link>
            <h1 className="primary-header u-margin-bottom-small">{title}</h1>
            <p className="resource-detail--body u-margin-bottom-small">{body}</p>
        </div>
    )
}

export default DetailsHeader;