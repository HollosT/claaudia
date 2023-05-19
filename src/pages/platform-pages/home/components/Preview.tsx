import { Link } from "react-router-dom";
import platformRoutes from "src/services/router/platform-routes";

const Preview: React.FC = () => {

    return (
        <article className="home-preview--item">
            <h5 className="home-preview--item-title">AAU HPC Resources</h5>
            <p className="home-preview--item-body">Find all HPC resources available for your research at AAU</p>

            <Link className="home-preview--item-nav" to={platformRoutes.resources.path}>See available resources</Link>
        </article>
    )
};

export default Preview;