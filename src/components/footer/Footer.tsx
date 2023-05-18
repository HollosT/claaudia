import { UpArrow } from "./icons";

interface FooterProps {
    id: string,
    shown: boolean,
}

const Footer: React.FC<FooterProps> = ({id, shown}) => {
    return (
        <footer className="footer">
            <p className="footer-rights">All rights reserved to CLAAUDIA © 2023</p>
            {shown ?
                 <a href={id} className="footer-nav">
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