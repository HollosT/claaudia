import { Divider, FeatureDataIcon, FeatureIcon } from "src/atoms";
import { UseCasesType } from "src/services/types/usecases";

const Case: React.FC<{ useCase: UseCasesType }> = ({ useCase }) => {

    const returnIcon = (i: number): React.ReactNode => {
        switch(i) {
            case 0 :
                return <FeatureIcon />;
            case 1 :
                return <FeatureDataIcon />;
            default :
                return <FeatureIcon />;
        }
    }

    const random = Math.floor(Math.random() * 5) + 1;

    return (

        <article className="case">
            <div className="case-body">
                <div className="case-body--content">
                    <h3 className="case-body--content-title p-huge u-margin-bottom-small">{useCase.title}</h3>
                    <div className="case-body--content-feature u-margin-bottom-medium">
                        <p className="case-body--content-feature_title">
                            Utilized HPC:
                            <span>{useCase.type}</span>
                        </p>
                        <Divider />
                        <div className="case-body--content-feature_features">
                            {useCase.features.map((ftr, i) => (
                                <div key={i} className="feature">
                                    {returnIcon(i)}
                                    <p>{ftr.feature}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="case-body--content-body">{useCase.body}</p>
                </div>
                <div className="case-body--image">
                  <img src={useCase.img ? useCase.img : `/assets/usecases/case-${random}.png`} />
                </div>

            </div>
            <Divider />
        </article>
    )
}

export default Case;