
import { Link, useNavigate } from 'react-router-dom';
import BackLeftArrow from "../svg/BackLeftArrow";



const DetailsHeader: React.FC<{title: string, body: string, path?: string}> = ({title, body, path}) => {
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    };
    return (
        <div className="resource-detail--header u-margin-bottom-medium">
            
            {path ? 
                <Link className="btn-outline u-margin-bottom-medium" to={path}> <BackLeftArrow /> Back to AAU HPC Resources</Link>
                :  
                <a className="btn-outline u-margin-bottom-medium" onClick={goBack}> <BackLeftArrow /> Back to AAU HPC Resources</a>
            }
            <h1 className="primary-header u-margin-bottom-small">{title}</h1>
            <p className="resource-detail--body u-margin-bottom-small">{body}</p>
        </div>
    )
}

export default DetailsHeader;