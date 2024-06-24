import React from 'react';
import { useDrag } from 'react-dnd';
import {context} from '../../../store';
import { useContext } from 'react';
const ItemTypes = {
  ITEM: 'item',
};

function DraggableItem({ name, remove }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.ITEM,
    item: { name, remove },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const {store, useStore} = useContext(context)
  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        padding: '8px',
        margin: '8px',
        backgroundColor: store.theme.backBgColor,
        border: `1px solid ${store.theme.textColor}`,
        color:store.theme.textColor,
        width: '100%',
        textAlign: 'center',
      }}
    >
      {name}
    </div>
  );
}

export default DraggableItem;
