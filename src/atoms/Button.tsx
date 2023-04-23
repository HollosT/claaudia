import { Button as ButtonRS, ButtonProps } from "reactstrap";


const Button: React.FC<ButtonProps> = ({children}) => {

    return (
        <ButtonRS className="button">{children}</ButtonRS>
    )
}

export default Button;