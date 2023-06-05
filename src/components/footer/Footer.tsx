import { Divider } from "src/atoms";
import { UpArrow } from "./icons";
import { useNavigate } from "react-router-dom";

interface FooterProps {
    shown: boolean,
}

const Footer: React.FC<FooterProps> = ({ shown}) => {
    const navigate = useNavigate()

    const handleIntro = () => {
        localStorage.removeItem('introduction');
        navigate('/')
    }

    return (
        <>
        <footer className="footer u-margin-bottom-medium">
            <Divider />
            <div className="footer-content">
                <div className="footer-content--body">
                    <div className="footer-content--body-container">
                        <p onClick={handleIntro} className="footer-content--body-item footer-content--body-item_nav">About HPC Matchmaker</p>
                        <a href="mailto:support@its.aau.dk"  className="footer-content--body-item footer-content--body-item_nav">Contact CLAAUDIA</a>
                    </div>
                    <p  className="footer-content--body-item footer-content--body-item_rights">All rights reserved to CLAAUDIA © 2023</p>
                </div>
                {shown ?
                    <a href="#topOfThePage" className="footer-nav">
                        <UpArrow />
                        Back to top
                    </a>
                    : 
                    null
                }

            </div>
        </footer>
        </>
    )
};

export default Footer;