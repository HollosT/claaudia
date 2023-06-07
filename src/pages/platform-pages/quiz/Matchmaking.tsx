import { ArrowRight, Button } from "src/atoms";
import { Check } from "../resources/components/svg";
import { Link, useNavigate } from "react-router-dom";
import Footer from "src/components/footer/Footer";
import platformRoutes from "src/services/router/platform-routes";
import PreviewImg from "./components/PreviewImg";

const Matchmaking: React.FC = () => {
    const navigate = useNavigate()

    const handleStart = () => {
        localStorage.setItem('isQuiz', "1");
        navigate(platformRoutes.quiz.path);
    }

    return (
        <div className="matchmaking-page">
            <section className="matchmaking u-margin-bottom-big">
                <div className="matchmaking-content">
                    <div className="matchmaking-content--heade u-margin-bottom-small">
                        <h1 className="matchmaking-content--header-title u-margin-bottom-small">
                            Complete the HPC Matchmaking Quiz and find the most suitable system for your project 
                        </h1>
                        <p className="matchmaking-content--header-body">
                            The HPC Matchmaking Quiz is a tool which can assist you in exploring the HPC options fitting your specific needs. Find out what is the most beneficial system for your work by answering questions about your computing experience, the scientific area related to the project and research data. During the quiz, learn how the characteristics of that project may affect the range of suited alternatives.   
                        </p>
                    </div>
                    <ul className="matchmaking-content--list u-margin-bottom-medium">
                        <li className="matchmaking-content--list-item">
                            <Check />
                            <p className="matchmaking-content--list-item_body">
                                Adaptive inquiry adjusted to previous responses 
                            </p>
                        </li>
                        <li className="matchmaking-content--list-item">
                            <Check />
                            <p className="matchmaking-content--list-item_body">
                                Informational section of suitable systems adapting to the answers 
                            </p>
                        </li>
                        <li className="matchmaking-content--list-item">
                            <Check />
                            <p className="matchmaking-content--list-item_body">
                            Explanation tools clarifying the quiz 
                            </p>
                        </li>

                    </ul>
                    <Button className="matchmaking-content--nav" onClick={handleStart}>Begin HPC Matchmaking Quiz <ArrowRight /> </Button>
                </div>
                <div className="matchmaking-img">
                    <PreviewImg />
                </div>

            </section>
            <Footer shown={true} />
        </div>
    )
}

export default Matchmaking;