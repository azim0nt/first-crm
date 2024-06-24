import React from 'react';
import { useDrop } from 'react-dnd';

const ItemTypes = {
  ITEM: 'item',
};

function DropArea() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.ITEM,
    drop: () => ({ name: 'DropArea' }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        height: '200px',
        width: '200px',
        margin: '8px',
        backgroundColor: isOver ? 'lightgreen' : 'lightgrey',
        border: '1px solid #000',
      }}
    >
      Drop here
    </div>
  );
}

export default DropArea;
