
import { Link } from "react-router-dom";
import platformRoutes from "src/services/router/platform-routes";
import { STRATO_DATA } from "src/services/types/hpc/constant";
import BackLeftArrow from "../svg/BackLeftArrow";
import { Tab } from "../tab";
import { Divider } from "src/atoms";

const Strato: React.FC = () => {
    const data = STRATO_DATA;
  
    return (
        <section className="resource-detail">
            <div className="resource-detail--header u-margin-bottom-medium">
                <Link className="btn-outline u-margin-bottom-medium" to={platformRoutes.resources.path}> <BackLeftArrow /> Back to AAU HPC Resources</Link>
                <h1 className="primary-header u-margin-bottom-small">Strato</h1>
                <p className="resource-detail--body u-margin-bottom-small">Strato is an on-premise cloud platform based on servers with CPU and GPU components that enable you to solve both generic and specific computational problems using virtual machines that you can configure yourself. This can be for both short-term problem solving, as well as work that takes a long time. </p>
            </div>
            <Tab data={data.tab} />
            <Divider />
        </section>

    )
}

export default Strato;