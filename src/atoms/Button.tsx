import { Button as ButtonRS, ButtonProps } from "reactstrap";


const Button: React.FC<ButtonProps> = ({children, ...props}) => {

    return (
        <ButtonRS className="button" {...props}>{children}</ButtonRS>
    )
}

export default Button;