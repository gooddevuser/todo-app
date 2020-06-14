import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = (props) => {

    const [todoText, setTodoText] = useState('');
    const { onInsert } = props; // const onInsert = props.onInsert

    // const submitHandler = (e) => {
    //     onInsert(todoText);
    //     setTodoText('');
    //     e.preventDefault();
    // }
    const submitHandler = useCallback( 
        (e) => {
            onInsert(todoText);
            setTodoText('');
            e.preventDefault();
        }, 
        [ onInsert, todoText ]
    );

    return (
        <form className="TodoInsert"
              onSubmit={ submitHandler }>
            <input 
                placeholder="할 일을 입력하세요"
                value={ todoText }
                onChange = {
                    (e) => setTodoText(e.target.value)
                } />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );

}

export default TodoInsert;