const ArrowDown: React.FC<{open: boolean}> = ({open}) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={`accordion-header__arrow ${open ? 'accordion-header__arrow-open' : 'accordion-header__close-close'}`}>
            <path d="M10.0006 10.9763L14.1254 6.85156L15.3039 8.03007L10.0006 13.3334L4.69727 8.03007L5.87578 6.85156L10.0006 10.9763Z" fill="#54616E"/>
        </svg>
    )
}

export default ArrowDown;