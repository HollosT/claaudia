import { Link } from "react-router-dom";
import platformRoutes from "src/services/router/platform-routes";

const AICloud: React.FC = () => {

    return (
        <section className="resource-detail">
            <div className="resource-detail--header">
                <Link to={platformRoutes.resources.path}>Back to AAU HPC Resources</Link>
                <h1>AI Cloud</h1>
                <p>Strato is an on-premise cloud platform based on servers with CPU and GPU components that enable you to solve both generic and specific computational problems using virtual machines that you can configure yourself. This can be for both short-term problem solving, as well as work that takes a long time. </p>
            </div>

        </section>

    )
}

export default AICloud;