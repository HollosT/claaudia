import { SystemType } from "src/services/types/hpc/hpc";
import DetailsHeader from "./DeailsHeader";
import { AICLOUD_DATA, ALL_HPCS_DATA } from "src/services/types/hpc/constant";
import { Tab } from "../tab";
import { Divider } from "src/atoms";
import Options from "./Options";
import Footer from "src/components/footer/Footer";
import platformRoutes from "src/services/router/platform-routes";

const AICloud: React.FC = () => {
    const data = AICLOUD_DATA;
    const aiclouds = ALL_HPCS_DATA.filter(hpc => hpc.type === SystemType.AICloud)

    return (
        <section className="resource-detail">
            <DetailsHeader title={data.name} body={data.introduction} path={platformRoutes.resources.path} />
            <Tab data={data.tab} />
            <Divider />
            <Options hpcs={aiclouds} />
            <Footer shown={true} />
        </section>

    )
}

export default AICloud;