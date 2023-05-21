import { useState } from "react";

interface AccordionInput {
    title: string;
    body: string;
    isOpen?: boolean;
}

const Accordion: React.FC<AccordionInput> = ({title, body, isOpen=false}) => {
    const [open, setOpen] = useState(isOpen);
    const toggle = () => {
        setOpen(!open)
    }

    return (
        <div className="accordion">
            <div onClick={toggle} className="accordion-header">
                <p className={`accordion-header__title ${open ? 'accordion-title-open' : ''}`}>{title}</p>
                <span className={`accordion-header__arrow material-symbols-outlined ${open ? 'accordion-header__arrow-open' : 'accordion-header__close-close'}`}>expand_more</span>
            </div>
            <div className={`accordion-body ${open ? 'accordion-body__open' : 'accordion-body__close'}`}>
                {open && <p className="accordion-body__text">{body}</p>}
            </div>
        </div>
    )
}

export default Accordion;