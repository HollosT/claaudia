import { ArrowRight } from "src/atoms";
import { Check } from "../resources/components/svg";
import { Link } from "react-router-dom";
import Footer from "src/components/footer/Footer";
import platformRoutes from "src/services/router/platform-routes";
import PreviewImg from "./components/PreviewImg";

const Matchmaking: React.FC = () => {

    return (
        <>
            <section className="matchmaking u-margin-bottom-big">
                <div className="matchmaking-content">
                    <div className="matchmaking-content--heade u-margin-bottom-small">
                        <h1 className="matchmaking-content--header-title u-margin-bottom-small">Complete the HPC Matching quiz
                            and find most suitable HPC for your research
                        </h1>
                        <p className="matchmaking-content--header-body">Explore the high-performance computing possibilities available to you at Aalborg University and find out which HPC system fits your needs. Convenient cloud computing is accessible now at hand through your laptop.</p>
                    </div>
                    <ul className="matchmaking-content--list u-margin-bottom-medium">
                        <li className="matchmaking-content--list-item">
                            <Check />
                            <p className="matchmaking-content--list-item_body">
                                Dynamic questions based on your given answers
                            </p>
                        </li>
                        <li className="matchmaking-content--list-item">
                            <Check />
                            <p className="matchmaking-content--list-item_body">
                                Educate yourself and see how your decisions impact the potential choice of the HPC system
                            </p>
                        </li>
                        <li className="matchmaking-content--list-item">
                            <Check />
                            <p className="matchmaking-content--list-item_body">
                            Definition explanations during the quiz
                            </p>
                        </li>

                    </ul>
                    <Link className="matchmaking-content--nav" to={platformRoutes.quiz.path}>Begin the Matching quiz <ArrowRight /> </Link>
                </div>
                <div className="matchmaking-img">
                    <PreviewImg />
                </div>

            </section>
            <Footer shown={true} />
        </>
    )
}

export default Matchmaking;