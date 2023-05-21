import DetailsHeader from "./DeailsHeader";
import { AICLOUD_DATA } from "src/services/types/hpc/constant";

const AICloud: React.FC = () => {
    const data = AICLOUD_DATA;

    return (
        <section className="resource-detail">
            <DetailsHeader title={data.name} body={data.introduction} />
            

        </section>

    )
}

export default AICloud;