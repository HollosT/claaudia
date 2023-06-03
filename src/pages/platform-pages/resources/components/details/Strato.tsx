

import {ALL_HPCS_DATA} from "src/services/types/hpc/constant";
import { Tab } from "../tab";
import { Divider, Loading } from "src/atoms";
import DetailsHeader from "./DeailsHeader";
import { SystemType } from "src/services/types/hpc/hpc";
import Options from "./Options";
import Footer from "src/components/footer/Footer";
import platformRoutes from "src/services/router/platform-routes";
import { useContext } from "react";
import { HPCContext } from "src/services/context/hpc/hpc-context";

const Strato: React.FC = () => {
        const {getCurrentSytemData} = useContext(HPCContext)

        const data = getCurrentSytemData(SystemType.Strato);
        if(!data) {
            return <Loading />
        }

    const stratos = ALL_HPCS_DATA.filter(hpc => hpc.type === SystemType.Strato)
  
    return (
        <section className="resource-detail">
            <DetailsHeader title={data.name} body={data.introduction} path={platformRoutes.resources.path} />
            <Tab data={data.tab} />
            <Divider />
            <Options hpcs={stratos} />
            <Divider className="u-margin-top-small" />
            <Footer shown={true} />
        </section>

    )
}

export default Strato;