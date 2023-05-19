
const Magnifier: React.FC<{className: string}> = ({className}) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} >
            <path d="M14.0262 12.8477L17.5951 16.4166L16.4166 17.5951L12.8477 14.0262C11.5644 15.0528 9.93699 15.667 8.16699 15.667C4.02699 15.667 0.666992 12.307 0.666992 8.16699C0.666992 4.02699 4.02699 0.666992 8.16699 0.666992C12.307 0.666992 15.667 4.02699 15.667 8.16699C15.667 9.93699 15.0528 11.5644 14.0262 12.8477ZM12.3542 12.2293C13.3732 11.1792 14.0003 9.74666 14.0003 8.16699C14.0003 4.94408 11.3899 2.33366 8.16699 2.33366C4.94408 2.33366 2.33366 4.94408 2.33366 8.16699C2.33366 11.3899 4.94408 14.0003 8.16699 14.0003C9.74666 14.0003 11.1792 13.3732 12.2293 12.3542L12.3542 12.2293Z" fill="#594FBF" />
        </svg>
    )
}
export default Magnifier;