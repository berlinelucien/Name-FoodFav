import * as React from 'react';
import './ToDo.css';

export interface IToDo {
    todo: string;
    isCompleted: boolean;
}

export interface ToDoCallbackProps {
    toggleTodo: () => void;
}

export type ToDoProps = IToDo & ToDoCallbackProps;

export const ToDo: React.FC<ToDoProps> = (props: ToDoProps) => (
    <li 
        className={['todo', props.isCompleted ? 'completed' : 'active'].join(' ')}
        onClick={props.toggleTodo}
    >
        {props.todo}
    </li>
)