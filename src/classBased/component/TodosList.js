import React from "react";
import TodoItem from "./ToDoItem";


class TodosList extends React.Component{
    render() {
        return (
          <ul>
            {this.props.todos.map(todo => (
              //<li key={todo.id}>{todo.title}</li>
              <TodoItem 
                key={todo.id} 
                todo={todo}
                handleChangeProps={this.props.handleChangeProps}
                deleteTodoProps={this.props.deleteTodoProps}
                setUpdate={this.props.setUpdate}
                />
            ))}
          </ul>
        )
      }
    }

export default TodosList