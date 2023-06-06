// https://reactstrap.github.io/?path=/story/home-installation--page
// Initializing the label HTML element

import { Label as LabelRS, LabelProps } from "reactstrap";

const Label:  React.FC<LabelProps> = ({children, ...props}) => {
    return (
        <LabelRS {...props}>{children}</LabelRS>
    )
}

export default Label