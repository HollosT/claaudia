
const Divider: React.FC<{className?: string}> = ({className}) => {

    return (

        <div className={className ? `divider ${className}` : "divider"} />
    )
}

export default Divider;