import React, { useState, useContext } from "react";
import { context } from "../../store";
import './DragDrop.scss'
function DragDrop(props) {
  const [drag, setDrag] = useState(false)
  const [inputState, setInputState] = useState(false)
  const { store } = useContext(context)
  function dragStartHandler(e) {
    e.preventDefault()
    setDrag(true)

  }
  function dragLeaveHandler(e) {
    e.preventDefault()
    setDrag(false)
  }
  function onDropHandler(e) {
    e.preventDefault()
    let files = [...e.dataTransfer.files]

    setDrag(false)
    setInputState(files.length > 0)
  }

  return (
    <div className="drag-and-drop">
      {
        drag
          ? <div
            onDragEnter={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
            onDrop={e => onDropHandler(e)}
            className="drop-area"
          ></div>
          : <div
            onDragEnter={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
          >
            {
              props.children ? props.children : (
                <span>Состаяние : {inputState ? <span style={{ color: "#8cb84a" }}>Загружено</span> : <span style={{ color: "#e06c75" }}>Не загружено</span>}</span>
              )
            }
          </div>
      }
    </div>
  );
}

export default DragDrop;
