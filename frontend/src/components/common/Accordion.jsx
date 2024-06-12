import React, { useState } from 'react';
import './Accordion.scss';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import {NavLink} from 'react-router-dom'

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleOpen}>
        <button>{title}</button>
        {isOpen ? <MdKeyboardArrowUp/>: <MdKeyboardArrowDown/>}
      </div>
      {isOpen && (
        <div className="accordion-content">
          <ul>
            {content.map((item, index) => (
              <li key={index}>
                <a href={item.url}><span className="line"></span>{item.name}</a>
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
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
