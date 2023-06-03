import { SystemType } from "src/services/types/hpc/hpc";
import DetailsHeader from "./DeailsHeader";
import { 
    ALL_HPCS_DATA,  UCLOUD_DATA } from "src/services/types/hpc/constant";
import { Tab } from "../tab";
import { Divider, Loading } from "src/atoms";
import Options from "./Options";
import Footer from "src/components/footer/Footer";
import platformRoutes from "src/services/router/platform-routes";
import { HPCContext } from "src/services/context/hpc/hpc-context";
import { useContext } from "react";

const UCloud: React.FC = () => {
    const {getCurrentSytemData} = useContext(HPCContext)

    const data = getCurrentSytemData(SystemType.UCloud);
    if(!data) {
        return <Loading />
    }

    const uclouds = ALL_HPCS_DATA.filter(hpc => hpc.type === SystemType.UCloud)

    return (
        <section className="resource-detail">
            <DetailsHeader title={data.name} body={data.introduction} path={platformRoutes.resources.path} />
            <Tab data={data.tab} />
            <Divider />
            <Options hpcs={uclouds} />
            <Footer shown={true} />
        </section>

    )
}

export default UCloud;