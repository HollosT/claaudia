import { Label as LabelRS, LabelProps } from "reactstrap";

const Label:  React.FC<LabelProps> = ({children, ...props}) => {
    return (
        <LabelRS {...props}>{children}</LabelRS>
    )
}

export default Label