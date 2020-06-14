import React, { useState, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {

  const [ todos, setTodos ] = useState([
    { 
      id: 1, 
      text: '중간 프로젝트 산출물 제출', 
      checked: true 
    },
    { id: 2, text: '스프링 부트 과제 제출', checked: true },
    { id: 3, text: '관리자 상담', checked: false },
  ]);

  //const [ nextId, setNextId ] = useState(4);
  const nextId = useRef(4);

  const insertHandler = (text) => {
    const newTodo = {
      id: nextId.current,
      text, // text: text,
      checked: false
    }
    setTodos( todos.concat(newTodo) );
    nextId.current += 1;
  }

  const removeHandler = (id) => {
    //반복문
    // id가 같은 todo가 발견되면 목록에서 제거
    setTodos( todos.filter( (todo) => todo.id !== id ) );
  }

  // if (todo.id === id) {
  //   todo.checked = !todo.checked;
  //   return todo;
  // } else {
  //   return todo;
  // }

  const toggleHandler = (id) => {

    setTodos(
      todos.map( (todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo )
    );

  }

  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={ insertHandler } />
        <TodoList todos={ todos } 
                  onRemove={ removeHandler }
                  onToggle={ toggleHandler } />
      </TodoTemplate>
    </div>
  );
}

export default App;
