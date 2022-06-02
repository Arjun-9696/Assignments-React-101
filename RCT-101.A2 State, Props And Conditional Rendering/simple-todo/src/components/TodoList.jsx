import React from 'react';
import Task from "./Task"
const TodoList = ({ todo, handleUpdateTodo }) => {
console.log("todo",todo)
  return (
    <>
        {todo.map((task)=>(
             <Task key={task.id} task={task} handleUpdateTodo={handleUpdateTodo}/>
        ))}
    </>
    )
};
export default TodoList;
