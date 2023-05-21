import { TabValueType } from "src/services/types/hpc/hpc";
import { TabContentItem } from ".";

const TabContent: React.FC<{data: TabValueType}> = ({data}) => {

    return (
        <div className="tab-content u-margin-bottom-medium">
            {data.data.map((d, i) => (
                <TabContentItem key={i} data={d} />
            ))}
        </div>
    )
}

export default TabContent;