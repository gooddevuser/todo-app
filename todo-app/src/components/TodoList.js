import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

// const TodoList = (props) => {
//     //const todos = props.todos; //1
//     const { todos } = props; //2
const TodoList = ({ todos, onRemove, onToggle }) => {

    return (
        <div className="TodoList">
            {
                todos.map( (todo) => {
                    return <TodoListItem key={ todo.id }
                                         todo={ todo }
                                         onRemove={ onRemove }
                                         onToggle={ onToggle } />
                })
            }            
        </div>
    );

}

export default TodoList;