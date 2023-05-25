
import {ALL_HPCS_DATA, LOCALMACHINE_DATA, } from "src/services/types/hpc/constant";
import { Tab } from "../tab";
import { Divider } from "src/atoms";
import DetailsHeader from "./DeailsHeader";
import { SystemType } from "src/services/types/hpc/hpc";
import Options from "./Options";
import Footer from "src/components/footer/Footer";
import platformRoutes from "src/services/router/platform-routes";

const LocalMachine: React.FC = () => {
    const data = LOCALMACHINE_DATA;
    const locals = ALL_HPCS_DATA.filter(hpc => hpc.type === SystemType.LocalMachine)
  
    return (
        <section className="resource-detail">
            <DetailsHeader title={data.name} body={data.introduction} path={platformRoutes.resources.path} />
            <Tab data={data.tab} />
            <Divider />
            <Options hpcs={locals} />
            <Footer shown={true} />
        </section>

    )
}

export default LocalMachine;