import { useContext } from "react"
import {useNavigate } from "react-router-dom"
import { Button, Divider } from "src/atoms"
import { HardwareSpec, Integration, OptionData, Resource, Skills } from "src/pages/platform-pages/resources/components/details"
import { ComparisonIcon } from "src/pages/platform-pages/resources/components/svg"
import { ComparisonContext } from "src/services/context/comparison/comparison-context"
import platformRoutes from "src/services/router/platform-routes"
import { HPCType, SystemType } from "src/services/types/hpc/hpc"

const FinishedSpec: React.FC<{ hpc: HPCType }> = ({ hpc }) => {
    const { handleSelectedHPC } = useContext(ComparisonContext);
    const navigate = useNavigate();

    const handleNav = () => {
        handleSelectedHPC(hpc.name)
        navigate(platformRoutes.comparison.path)
    }

    const handlePageNav = () => {
        switch (hpc.type) {
            case SystemType.AICloud:
                navigate(platformRoutes.aicloud.path)
                break;
            case SystemType.Strato:
                navigate(platformRoutes.strato.path)
                break;
            case SystemType.LocalMachine:
                return
            case SystemType.UCloud:
                navigate(platformRoutes.ucloud.path)
                break;
            default:
                return;
        }
    }

    return (
        <div className="spec">
            <h4 className="spec-title u-margin-bottom-medium">Based on your answers, you might consider: </h4>
            <div className="spec-content">
                <div className="spec-content--header u-margin-bottom-medium">
                    <div className="spec-content--header-title">
                        <h1 className="spec-content--header-title_title u-margin-bottom-small">{hpc.name}</h1>
                        <p className="spec-content--header-title_body">{hpc.intro}</p>
                    </div>
                    <div className="spec-content--header-action">
                        <Button className="option-nav" onClick={handleNav}>
                            <ComparisonIcon />
                            Compare with other system
                        </Button>
                        {
                            hpc.type === SystemType.LocalMachine ?
                            null
                            :
                            <Button className="option-nav" onClick={handlePageNav}> Go to {hpc.type} page</Button>
                        }


                    </div>
                </div>
                <Divider />
                <div className="spec-content--body">
                    <HardwareSpec data={hpc.hardware_spec} currHpc={hpc.name} />
                    <Resource data={hpc.resource_availability} />
                    <div className="spec-content--body-data_integration">
                        <OptionData data={hpc.data} />
                        <Integration data={hpc.integrations} />
                    </div>
                    <Skills data={hpc.skill} />
                </div>

            </div>

        </div>

    )
}

export default FinishedSpec;