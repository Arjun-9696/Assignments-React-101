import React from 'react'
import { Input, Button } from '@chakra-ui/react';
const TodoItem = ({handleAdd,item,setItem}) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '20%',
        margin: 'auto',
        paddingTop: '5%',
      }}
    >
      <Input
        value={item}
        placeholder="Add Items"
        width="auto"
        size="md"
        onChange={(e) => setItem(e.target.value)}
      />
      <Button colorScheme="blue" onClick={handleAdd}>
        ADD
      </Button>
    </div>
  );
}

export default TodoItem