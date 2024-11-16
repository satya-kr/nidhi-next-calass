"use client"

import TodoList from "@/components/todo/TodoList";
import { useState } from "react";




const Todo = () => {

    const [isEdit, setIsEdit] = useState(false);
    const [input, setInput] = useState('');
    const [inputErr, setInputErr] = useState('');
    const [selectedRow, setSelectedRow]:any = useState(null);
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            task: 'Task 1',
            status: 'Done',
        },
        {
            id: 2,
            task: 'Task 2',
            status: 'Done',
        },
        {
            id: 3,
            task: 'Task 3',
            status: 'Done',
        },
        {
            id: 4,
            task: 'Task 4',
            status: 'Done',
        },
    ]);

    const handleSubmit = (event:any) => {
        event.preventDefault();

        if(input && input.length > 4) {

            if(isEdit && selectedRow && selectedRow != null) {
                let list = [...todoList];
                list = list.map((item) => {
                    if(item.id === selectedRow.id) {
                        item.task = input;
                    }
                    return item;
                });
                setTodoList(list);
                setInput('');
                setIsEdit(false);
            } else {
                let list = [...todoList]; 
                list.push({id: todoList.length + 1, task: input, status: 'Pending'});
                setTodoList(list);
                setInput('');
            }

        } else {
           setInputErr('Please enter atleast 5 characters'); 
        }

    }

    const actions = (id:any) => {
        const data:any = todoList.find((item) => item.id === id);
        // console.log(id, data);  
        setSelectedRow(data);
        setInput(data.task);
        setIsEdit(true);
    }

    return(
        <div>
            <h1>Todo</h1>
            <>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <label htmlFor="todo">Todo</label>
                    <input type="text" name="todo" value={input} id="todo" onChange={(e) => {
                        setInput(e.target.value);

                        if(e.target.value && e.target.value.length > 4) {
                            setInputErr('');
                        } else {
                            setInputErr('Please enter atleast 5 characters');
                        }
                    }} />
                    {(inputErr && inputErr != "") && <p style={{color: 'red', fontSize: '12px'}}>{inputErr}</p>}
                    <br />
                    <button type="submit" >{ isEdit ? 'Update' : 'Save' }</button>
                </form>
            </>
            <TodoList list={todoList} actions={actions}/>
        </div>
    )
}

export default Todo;