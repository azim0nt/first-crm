import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from './DraggableItem.jsx';
import { context } from '../../../store';
import { useContext } from 'react';
const ItemTypes = {
  ITEM: 'item',
};

function Column({ items, color }) {
  const [columnItems, setColumnItems] = useState(items);
  const { store, useStore } = useContext(context)
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
    <>
      <div
        ref={drop}
        style={{
          width: '500px',
          margin: '8px',
          backgroundColor: `${color}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10px'
        }}
        className='column'
      >

        <div style={{ padding: '20px', width: '100%' }}>
          {columnItems.map((item, index) => (
            <DraggableItem key={index} name={item} remove={removeItem} />
          ))}
        </div>
      </div>
    </>

  );
}

export default Column;
