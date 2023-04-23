import { Input as InputRS, InputProps } from "reactstrap"

const Input: React.FC<InputProps> = (props) => {

    return (
        <InputRS {...props} />
    ) 
}

export default Input