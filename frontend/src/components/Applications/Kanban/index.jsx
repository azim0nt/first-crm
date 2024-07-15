import React, { useState, useEffect, useContext } from "react";
import { context } from '../../../store';
import PathToTab from '../../common/PathToTab';
import { useTranslation } from 'react-i18next';
import './style.scss';

function Kanban() {
  const { t } = useTranslation();
  const { store } = useContext(context);

  const initialBoards = () => ([
    { id: 1, title: t('kanban.kanban_board.boards.todo'), items: [{ id: 1, title: 'Design Dashboard' }, { id: 2, title: 'Implement Backend' }, { id: 3, title: 'Test and Deploy' }] },
    { id: 2, title: t('kanban.kanban_board.boards.in_progress'), items: [{ id: 4, title: 'Frontend Development' }, { id: 5, title: 'User Testing' }, { id: 6, title: 'Deployment' }] },
    { id: 3, title: t('kanban.kanban_board.boards.done'), items: [{ id: 7, title: 'Launch Website' }, { id: 8, title: 'Monitor Performance' }, { id: 9, title: 'Close Project' }] },
  ]);

  const [boards, setBoards] = useState(initialBoards);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [selectedBoard, setSelectedBoard] = useState(boards[0].id);

  useEffect(() => {
    setBoards(initialBoards());
  }, [t]);

  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className === 'item') {
      e.target.classList.add('item-shadowed');
    }
  }

  function dragLeaveHandler(e) {
    e.target.classList.remove('item-shadowed');
  }

  function dragStartHandler(e, board, item) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }

  function dragEndHandler(e) {
    e.target.classList.remove('item-shadowed');
  }

  function dropHandler(e, board, item) {
    e.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);
    setBoards(boards.map(b => {
      if (b.id === board.id) {
        return board;
      }
      if (b.id === currentBoard.id) {
        return currentBoard;
      }
      return b;
    }));
    e.target.classList.remove('item-shadowed');
  }

  function dropBoardHandler(e, board) {
    e.preventDefault();
    if (board.items.length === 0) {
      board.items.push(currentItem);
      const currentIndex = currentBoard.items.indexOf(currentItem);
      currentBoard.items.splice(currentIndex, 1);
      setBoards(boards.map(b => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      }));
    }
  }

  function handleAddTask() {
    const newTask = { id: Date.now(), title: newTaskTitle };
    setBoards(boards.map(board => {
      if (board.id === selectedBoard) {
        return { ...board, items: [...board.items, newTask] };
      }
      return board;
    }));
    setNewTaskTitle("");
  }

  return (
    <div className={"kanban-wrapper " + store.theme + '-bg'}>
      <div className="kanban-container">
        <div className="top">
          <h3>{t('kanban.title')}</h3>
          <PathToTab parent={t('kanban.path_to_tab.parent')} tab={t('kanban.path_to_tab.tab')} />
        </div>
        <div className="middle">
          <div className="section-1">
            <div className={"kanban-board " + store.theme + '-cardd'}>
              <div className="add-task">
                <input
                  type="text"
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder={t('kanban.kanban_board.input')}
                  className={store.theme + '-input'}
                />
                <select
                  value={selectedBoard}
                  onChange={(e) => setSelectedBoard(parseInt(e.target.value))}
                  className={store.theme + '-input'}
                >
                  {boards.map(board => (
                    <option key={board.id} value={board.id}>{board.title}</option>
                  ))}
                </select>
                <button className="blue-btn" onClick={handleAddTask}>{t('kanban.kanban_board.button')}</button>
              </div>
              <div className="boards">
                {boards.map((board, i) => (
                  <div
                    className="board"
                    key={i}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropBoardHandler(e, board)}
                  >
                    <div className="top-part">
                      <h3>{board.title}</h3>
                    </div>
                    <div className="bottom-part">
                      {board.items.map((item, j) => (
                        <div
                          onDragOver={(e) => dragOverHandler(e)}
                          onDragLeave={dragLeaveHandler}
                          onDragStart={(e) => dragStartHandler(e, board, item)}
                          onDragEnd={dragEndHandler}
                          onDrop={(e) => dropHandler(e, board, item)}
                          className="item"
                          key={j}
                          draggable
                        >
                          {item.title}
                        </div>
                      ))}
                      {board.items.length === 0 && (
                        <div className="empty-board-placeholder">
                          Drag items here
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kanban;
