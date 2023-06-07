
import { Link, useNavigate } from 'react-router-dom';
import BackLeftArrow from "../svg/BackLeftArrow";



const DetailsHeader: React.FC<{title: string, body: string, path?: string}> = ({title, body, path}) => {
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    };
    return (
        <div className="resource-detail--header">
            
            {path ? 
                <Link className="btn-outline u-margin-bottom-medium" to={path}> <BackLeftArrow /> Back to AAU HPC Resources</Link>
                :  
                <a className="btn-outline u-margin-bottom-medium" href='#' onClick={goBack}> <BackLeftArrow /> Go back</a>
            }
            <h1 className="primary-header">{title}</h1>
            <p className="resource-detail--body u-margin-bottom-small">{body}</p>
        </div>
    )
}

export default DetailsHeader;