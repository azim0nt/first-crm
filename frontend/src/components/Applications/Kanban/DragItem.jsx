import React from 'react';
import { useDrag } from 'react-dnd';

const ItemTypes = {
  ITEM: 'item',
};

function DragItem() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ITEM,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        padding: '8px',
        margin: '8px',
        backgroundColor: 'lightblue',
        border: '1px solid #000',
      }}
    >
      Drag me
    </div>
  );
}

export default DragItem;
