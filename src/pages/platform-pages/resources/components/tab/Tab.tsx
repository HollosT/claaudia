import { useState } from "react";
import { TabType } from "src/services/types/hpc/hpc";
import TabContentFAQ from "./TabContentFAQ";
import { Loading } from "src/atoms";
import TabContent from "./TabContent";

const Tab: React.FC<{data: TabType}> = ({data}) => {
    const [activeTab, setActiveTab] = useState(0);
    const activeTabContent = data.tab_value.find(t => t.value === activeTab);
    const activeTabHeader = data.tab_header.find(t => t.value === activeTab);

    const adjustUnderline = () => {
        switch(activeTab) {
            case 0: 
                return {left: `.5rem`, width: '12rem'};
            case 1: 
                return {left: `21rem`, width: '14rem'};
            case 2: 
                return {left: `40.25rem`, width: '2rem'};
            default:
                return {left: `2rem`, width: '12rem'};           
        }

    }

    if(!activeTabContent || !activeTabHeader) {
        return <Loading />
    }

    return (
        <div className="tab">
                <div className="tab-header  u-margin-bottom-medium">
                    <div className="tab-header--nav">
                        {data.tab_header.map(t => (
                            <span key={t.value} onClick={() => setActiveTab(t.value)} className={t.value === activeTab ? `tab-header--nav-item tab-item--active` : 'tab-header--nav-item'}>{t.tab_title}</span>
                        ))}
                    </div>
                    <div className="tab-header--underline">
                        <div className="tab-header--underline-active" style={adjustUnderline()}></div>
                    </div>
                </div>
                {activeTabHeader.isFaq === true ? 
                    <TabContentFAQ data={activeTabContent} />
                    :
                    <TabContent data={activeTabContent} />
                }
        </div>
    )
}

export default Tab;