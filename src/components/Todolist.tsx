import React from 'react';
import { Task } from './Task';

type TodolistProps = {
    title: string
    tasks: TaskProps[]
}

type TaskProps = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = ({ title, tasks }: TodolistProps) => {

    const mappedTasks = tasks.map((task) => {
        return (
            <Task  title={task.title} isDone={task.isDone}/>
        )
    })

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {mappedTasks}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

