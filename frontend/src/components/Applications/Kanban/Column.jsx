import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from './DraggableItem.jsx';
import {context} from '../../../store';
import { useContext } from 'react';
const ItemTypes = {
  ITEM: 'item',
};

function Column({ items }) {
  const [columnItems, setColumnItems] = useState(items);
  const {store, useStore} = useContext(context)
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.ITEM,
    drop: (item) => {
      setColumnItems((prevItems) => [...prevItems, item.name]);
      item.remove(item.name);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const removeItem = (itemName) => {
    setColumnItems((prevItems) => prevItems.filter((item) => item !== itemName));
  };

  return (
    <div
      ref={drop}
      style={{
        width: '500px',
        minHeight: '400px',
        margin: '8px',
        backgroundColor: store.theme.backBgColor,
        border: '1px solid #000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '8px',
      }}
    >
      {columnItems.map((item, index) => (
        <DraggableItem key={index} name={item} remove={removeItem} />
      ))}
    </div>
  );
}

export default Column;
