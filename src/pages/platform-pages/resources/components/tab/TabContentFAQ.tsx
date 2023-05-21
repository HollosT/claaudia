import { Accordion } from "src/atoms";
import { TabValueType } from "src/services/types/hpc/hpc";

const TabContentFAQ: React.FC<{data: TabValueType}> = ({data})=> {

    return (
        <div className="tab-faq u-margin-bottom-medium">
            {data.data.map((d, i) => (
                <Accordion key={i} title={d.title} body={d.body}  />
            ))}

        </div>
    )
}

export default TabContentFAQ;