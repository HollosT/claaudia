// https://reactstrap.github.io/?path=/story/home-installation--page
// Initializing the button HTML element
import { Button as ButtonRS, ButtonProps } from "reactstrap";


const Button: React.FC<ButtonProps> = ({children, ...props}) => {

    return (
        <ButtonRS className="button" {...props}>{children}</ButtonRS>
    )
}

export default Button;