import React from "react";

//Import CSS module
import styles from "./ToDoItem.module.css"

class TodoItem extends React.Component{
    state = {
      editing: false,
    }

    handleEditing = () => {
      this.setState({
        editing: true,
      })
      //console.log("Editing Mode Activated");
    }

    handleUpdatedDone = event => {
      //console.log(event.key)
      if(event.key === "Enter"){
        this.setState({
          editing: false,
        })
      }
    }

    componentWillUnmount(){
      console.log("Cleaning up...")
    }

    render() {

      let viewMode = {}
      let editMode = {}

      if (this.state.editing){
        viewMode.display = "none"
      }else{
        editMode.display = "none"
      }

      const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }

      const { completed, id, title } = this.props.todo

        return (

          <li className={styles.item}>
            
            <div 
              onDoubleClick={this.handleEditing} 
              style={viewMode}
            >
              <input 
                type="checkbox"
                className={styles.checkbox}
                checked={completed}
                onChange={() => this.props.handleChangeProps(id)}
                />
                


                <button onClick={() => this.props.deleteTodoProps(id)}>
                    Delete
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
            onChange={e => {
              //console.log(e.target.value, id)
              this.props.setUpdate(e.target.value, id)
            }}
            onKeyDown={this.handleUpdatedDone}
              />
          </li>
        )
      }
    }
 
export default TodoItem