import { Divider } from "src/atoms";
import { UpArrow } from "./icons";

interface FooterProps {
    shown: boolean,
}

const Footer: React.FC<FooterProps> = ({ shown}) => {
    return (
        <>
        <footer className="footer u-margin-bottom-medium">
            <Divider />
            <div className="footer-content">
                <p className="footer-rights">All rights reserved to CLAAUDIA © 2023</p>
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