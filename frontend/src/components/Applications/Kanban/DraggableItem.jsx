import React from 'react';
import { useDrag } from 'react-dnd';
import {context} from '../../../store';
import { useContext } from 'react';
import './DraggableItem.scss'
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
    <div className='card'
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: store.theme === 'dark'? '#10101c' : '#f2f5fa',
        border: `1px solid ${store.theme === 'light'? '#10101c' : '#f2f5fa50'}`,
        color:store.theme.textColor,

      }}
    >
      <p className="date">24/7/20</p>
      <p className="title">{name}</p>
      <p className="where">
        <span className="circle"></span> <p>Themeforest, australia</p>
      </p>
    </div>
  );
}

export default DraggableItem;
