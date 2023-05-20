import { AllHPC } from "src/services/types/hpc";

const Subs: React.FC<{subs: AllHPC[] | []}> = ({subs}) => {

    return(
        <div className='subs'>
            <p className='subs-title'>Includes:</p>
            {subs.length > 0 ?
                subs.map(sub => (
                   <p className="subs-body">{sub}</p> 
                ))
                :
                <p className="subs-body">No sub-systems</p>
            }                        
        </div>

    )
}

export default Subs;