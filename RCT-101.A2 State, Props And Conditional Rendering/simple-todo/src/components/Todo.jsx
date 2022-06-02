import React,{useState} from 'react';
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import { v4 as uuid } from 'uuid';
const Todo = () => {
    const [item, setItem] = useState('');
    const [todo, setTodo] = useState([]);

    const handleAdd = () => {
      const payload = {
        id: uuid(),
        title: item,
        status: false,
      };
      setTodo([...todo, payload]);
    };
   const handleUpdateTodo = (updatedTodo) => {
     let newTodo = todo.reduce((acc, curr) => {
       if (curr.id === updatedTodo.id) {
         acc.push(updatedTodo);
       } else {
         acc.push(curr);
       }
       return acc;
     }, []);
     setTodo([...newTodo]);
   };
  return (
    <div>
      <TodoItem
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
        item={item}
        setItem={setItem}
      />
      <TodoList
        handleUpdateTodo={handleUpdateTodo}
        todo={todo}
        setTodo={setTodo}
      />
    </div>
  );
};

export default Todo;
