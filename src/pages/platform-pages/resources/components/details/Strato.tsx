import { useState } from "react";
import { Link } from "react-router-dom";
import platformRoutes from "src/services/router/platform-routes";
import { STRATO_DATA } from "src/services/types/hpc/constant";
import BackLeftArrow from "../svg/BackLeftArrow";

const Strato: React.FC = () => {
    const data = STRATO_DATA;
    const [activeTab, setActiveTab] = useState(0);
    const activeTabContent = data.tab?.tab_value.find(t => t.value === activeTab);

    return (
        <section className="resource-detail">
            <div className="resource-detail--header u-margin-bottom-medium">
                <Link className="btn-outline u-margin-bottom-medium" to={platformRoutes.resources.path}> <BackLeftArrow /> Back to AAU HPC Resources</Link>
                <h1 className="primary-header u-margin-bottom-small">Strato</h1>
                <p className="resource-detail--body u-margin-bottom-small">Strato is an on-premise cloud platform based on servers with CPU and GPU components that enable you to solve both generic and specific computational problems using virtual machines that you can configure yourself. This can be for both short-term problem solving, as well as work that takes a long time. </p>
            </div>
            <div className="tab">
                <div className="tab-header">
                    <div className="tab-header--nav">
                        {data.tab && data.tab.tab_header.map(t => (
                            <span onClick={() => setActiveTab(t.value)} className={t.value === activeTab ? `tab-header--nav-item tab-item--active` : 'tab-header--nav-item'}>{t.tab_title}</span>
                        ))}
                    </div>
                </div>
                    <div className="tab-header--underline">
                        <div className="tab-header--underline-active" style={{left: `${activeTab * 15 + 2}rem`}}></div>
                    </div>

            </div>
        </section>

    )
}

export default Strato;