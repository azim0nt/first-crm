import './style.scss'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './Column.jsx';
import { context } from '../../../store';
import { useContext } from 'react';
import PathToTab from '../../common/PathToTab.jsx'
const items1 = ['Test Sidebar', 'Design Dashboard'];
const items2 = ['Dashboard issue', 'Test Sidebar'];
const items3 = ['Test Sidebar', 'Design Dashboard'];
function Kanban() {
  const { store, useStore } = useContext(context)
  return (
    <>
    <div className="kanban-wrapper" style={{backgroundColor:store.theme.backBgColor, color:store.theme.textColor}}>
      <div className="kanban-content">
        <div className="top">
          <h3>Kanban Board</h3>
          <PathToTab parent={'Apps'} tab={'Kanban Board'}/>
        </div>
        <div className="middle">
          <div className="section-1">
            <div className="default-demo-card"  style={{backgroundColor:store.theme.bgColor, color:store.theme.textColor}}>
    <h4>Default Demo</h4>
              <DndProvider backend={HTML5Backend}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Column color={store.theme.backBgColor} items={items1} />
          <Column color={store.theme.backBgColor} items={items2} />
          <Column color={store.theme.backBgColor} items={items3} />
        </div>
      </DndProvider>
            </div>
          </div>
          <div className="section-2">
            <div className="custom-board-card"  style={{backgroundColor:store.theme.bgColor, color:store.theme.textColor}}>
    <h4>Custom Board</h4>
              <DndProvider backend={HTML5Backend}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Column color={'#44A8D750'} items={items1} />
          <Column color={'#E7AE2F50'} items={items2} />
          <Column color={'#61AE4150'} items={items3} />
        </div>
      </DndProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Kanban;