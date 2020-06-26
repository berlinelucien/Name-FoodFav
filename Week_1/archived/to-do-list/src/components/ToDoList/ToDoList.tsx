import * as React from 'react';
import { IToDo, ToDo } from '../ToDo/ToDo';
import './ToDoList.css';

export interface ToDoListProps{
    todos: IToDo[];
    toggleTodo: (index: number) => void;
}

export const ToDoList: React.FC<ToDoListProps> = (props: ToDoListProps) => (
    props.todos.length > 0
    ?   <ul id="todo-list">
            {props.todos.map((todo, index) => (
                <ToDo key={index} {...todo} toggleTodo={() => props.toggleTodo(index)}/>
            ))}
        </ul>
    :   null
);