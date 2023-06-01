import { ArrowLeft, Button, Divider } from "src/atoms"
import FinishedSuccessIcon from "./FinishedSuccessIcon"

const FinishedHeader: React.FC = () => {

    return (
        <div className="content">
            <div className="content-success">
                <FinishedSuccessIcon />
                <div className="content-success--content">
                    <p className="content-success--content-title p-huge u-margin-bottom-small">
                        You have succesfully finished HPC Matching quiz
                    </p>
                    <p className="content-success--content-body u-margin-bottom-small">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.
                    </p>
                    <Button className="content-success--content-nav u-margin-bottom-small">
                        <ArrowLeft /> 
                        Re-take the quiz
                    </Button>
                </div>
            </div>
            <div className="content-next">
                    <p className="content-next--title p-big u-margin-bottom-small">
                        What to do next?
                    </p>
                    <p className="content-next--body u-margin-bottom-small">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.  
                    </p>
                    <a className="content-next--nav p-big u-margin-bottom-small" href="#"> Contact CLAAUDIA</a>
            </div>
        </div>

    )
}

export default FinishedHeader