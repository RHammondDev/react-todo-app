import React, {useState, useEffect} from "react";

//icon
import { FaTrash } from "react-icons/fa";

//Import CSS module
import styles from "./ToDoItem.module.css"

const TodoItem = props => {

  useEffect(() => {
    return () => {
      //console.log("Cleaning up...")
    }
  }, [])
  
  const [editing, setEditing] = useState(false)

  const handleEditing = () => {
    setEditing(true)
  }

  const handleUpdatedDone = event => {
    if (event.key === "Enter") {
      setEditing(false)
    }
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { completed, id, title } = props.todo
  let viewMode = {}
  let editMode = {}
  
  if (editing){
    viewMode.display = "none"
  }else{
    editMode.display = "none"
  }

  return (

    <li className={styles.item}>
      
      <div 
        onDoubleClick={handleEditing} 
        style={viewMode}
      >
        <input 
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
          />
          
          <button onClick={() => props.deleteTodoProps(id)}>
              <FaTrash style={{ color: "red", fontSize: "16px" }} />
          </button> 

          <span style={completed ? completedStyle : null }>
            {title}  
          </span>
      </div>
      
      <input
      type="text"
      style={editMode}
      className={styles.textInput}
      value={title}
      onChange={(e) => {
        //console.log(e.target.value, id)
        props.setUpdate(e.target.value, id)
      }}
      onKeyDown={handleUpdatedDone}
        />
    </li>
  )

}


export default TodoItem