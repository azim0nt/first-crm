import './style.scss'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './Column.jsx';

const items1 = ['Item 1', 'Item 2'];
const items2 = ['Item 4', 'Item 5'];
const items3 = ['Item 7', 'Item 8'];
function Kanban() {

    return ( 
        <>
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Column items={items1} />
        <Column items={items2} />
        <Column items={items3} />
      </div>
    </DndProvider>
        </>
     );
}

export default Kanban;