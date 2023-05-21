import { TabDataType } from "src/services/types/hpc/hpc";

const TabContentItem: React.FC<{data: TabDataType}> = ({data}) => {

    return (
        <div className="tab-content--item">
            {data.img &&  <img className="tab-content--item-img" src={data.img} alt={data.title} />}
            <h5 className="tab-content--item-title">{data.title}</h5>
            <p className="tab-content--item-body">{data.body}</p>
        </div>
    )
}

export default TabContentItem;