import React, { useState } from 'react';
import {v4 as uuid} from "uuid"
import TodoItem from './TodoItem';

const Todo = () => {
    const [query, setQuery]=useState("")
    const [list, setList]=useState([])
    const handleAdd=() => {
        const payload={
            title:query,
            status:false,
            id:uuid(),
        }
        setList([...list,payload])
        
    }
    const handleDelete=(id) => {
        let updatedList=list.filter(item=>item.id !==id)
        setList(updatedList)
    }
  return (
    <>
      <div className="todo_header">Todo App</div>
      <div>
          <input value={query} onChange={(e)=> setQuery(e.target.value)} type="text" placeholder="Add items..."/>
          <button onClick={handleAdd} > +</button>
      </div>
      <div>{list.map((item)=>{
         return (
           <div>
             <br />
             <TodoItem key={item.id} {...item} handleDelete={handleDelete} />
           </div>
         );
      })}</div>
    </>
  );
}

export default Todo