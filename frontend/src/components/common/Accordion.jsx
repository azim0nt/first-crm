import React, { useState } from 'react';
import './Accordion.scss';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import {NavLink} from 'react-router-dom'

  

const AccordionItem = ({ title, content, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleOpen}>
        <button> <span className="text">{title}</span></button>
        {isOpen ? <MdKeyboardArrowUp/>: <MdKeyboardArrowDown/>}
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
