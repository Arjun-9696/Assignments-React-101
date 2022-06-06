import React from 'react'
import "./TodoList.css"
const TodoList = ({title,id,status,handleDelete}) => {
  return (
    <div className="items_div">
      <h3>{title}</h3>
      <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  );
}

export default TodoList