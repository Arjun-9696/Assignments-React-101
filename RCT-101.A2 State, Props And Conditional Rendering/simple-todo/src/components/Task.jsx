import React from 'react';
import { Checkbox, textDecoration} from '@chakra-ui/react';
const Task = ({ task, handleUpdateTodo }) => {
  const toggleTodoStatus = () => {
    let toggledTodo = {
      ...task,
      status: !task.status,
    };
    handleUpdateTodo(toggledTodo);
  };
  return (
    <div className="todolist">
      <Checkbox checked={task.status} onChange={toggleTodoStatus} >
      {`   -  ${task.title} `}</Checkbox>
    </div>
  );
};

export default Task;
