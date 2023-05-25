

import {ALL_HPCS_DATA, STRATO_DATA } from "src/services/types/hpc/constant";
import { Tab } from "../tab";
import { Divider } from "src/atoms";
import DetailsHeader from "./DeailsHeader";
import { SystemType } from "src/services/types/hpc/hpc";
import Options from "./Options";
import Footer from "src/components/footer/Footer";
import platformRoutes from "src/services/router/platform-routes";

const Strato: React.FC = () => {
    const data = STRATO_DATA;
    const stratos = ALL_HPCS_DATA.filter(hpc => hpc.type === SystemType.Strato)
  
    return (
        <section className="resource-detail">
            <DetailsHeader title={data.name} body={data.introduction} path={platformRoutes.resources.path} />
            <Tab data={data.tab} />
            <Divider />
            <Options hpcs={stratos} />
            <Footer shown={true} />
        </section>

    )
}

export default Strato;