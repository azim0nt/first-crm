import React, { useState } from 'react';
import './Accordion.scss';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import * as ReactIconsFa from 'react-icons/fa';  // Import icons from Font Awesome
import * as ReactIconsMd from 'react-icons/md';  // Import icons from Material Design
import * as ReactIconsBi from 'react-icons/bi';  // Import icons from Bootstrap Icons

function IconByName({ name }) {
    // Check Font Awesome icons first
    let IconComponent = ReactIconsFa[name];
    if (!IconComponent) {
        // If not found in Font Awesome, check Material Design icons
        IconComponent = ReactIconsMd[name];
    }
    if (!IconComponent) {
        // If not found in Material Design, check Bootstrap Icons
        IconComponent = ReactIconsBi[name];
    }
    if (!IconComponent) return null;  // If icon not found, return null
    return <IconComponent />;
}

const AccordionItem = ({ title, content, icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={toggleOpen}>
                <div className="logo-link">
                    <div className="left"><IconByName name={icon} /></div>
                    <div className="right">
                        <p>{title}</p>
                        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="accordion-content">
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>
                                <NavLink to={item.url}>{item.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const Accordion = ({ items }) => {
    return (
        <div className="accordion">
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title} icon={item.icon} content={item.content} />
            ))}
        </div>
    );
};

export default Accordion;
