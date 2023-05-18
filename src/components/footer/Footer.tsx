import { UpArrow } from "./icons";

interface FooterProps {
    shown: boolean,
}

const Footer: React.FC<FooterProps> = ({ shown}) => {
    return (
        <footer className="footer">
            <p className="footer-rights">All rights reserved to CLAAUDIA © 2023</p>
            {shown ?
                 <a href="#topOfThePage" className="footer-nav">
                    <UpArrow />
                    Back to top
                 </a>
                 : 
                 null
            }
        </footer>
    )
};

export default Footer;