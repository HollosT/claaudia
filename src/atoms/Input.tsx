// https://reactstrap.github.io/?path=/story/home-installation--page
// Initializing the input HTML element
import { Input as InputRS, InputProps } from "reactstrap"

const Input: React.FC<InputProps> = (props) => {

    return (
        <InputRS {...props} />
    ) 
}

export default Input