import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {

    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem">
            <div className="checkbox"
                 onClick={ (e) => onToggle(id) }>
                { checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
                <div className="text">{ text }</div>
            </div>
            <div className="remove" 
                 onClick={ 
                     (e) => onRemove(id)
                 }>
                <MdRemoveCircleOutline />
            </div>
        </div>
    );

}

export default TodoListItem;