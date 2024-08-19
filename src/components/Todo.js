import { BiTask } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";
import { BiSolidPencil } from "react-icons/bi";
import React,{ useState } from 'react'
import TodoForm from "./TodoForm";




function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const[edit, setEdit] = useState({
        id:null,
        value: ''
    })
    const [filter, setFilter] = useState('all');
    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };
    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') {
            return todo.isComplete;
        } else if (filter === 'incomplete') {
            return !todo.isComplete;
        } else {
            return true;
        }
    });
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }
    return (
        <div className="main">
            <div className="filter-controls">
                <button onClick={() => setFilter('all')}>Todas</button>
                <button onClick={() => setFilter('completed')}>Completas</button>
                <button onClick={() => setFilter('incomplete')}>Não Completas</button>
            </div>

        <div className="todo-container">
            {filteredTodos.map((todo, index) => (
                <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
                    <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                        {todo.text}
                    </div>
                    <div className='icons'>
                        {!todo.isComplete && (
                            <BiTask onClick={() => completeTodo(todo.id)} className="complete-icon" />
                        )}
                        <BiSolidTrash onClick={() => removeTodo(todo.id)} className="delete-icon" />
                        <BiSolidPencil onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit-icon" />
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Todo
