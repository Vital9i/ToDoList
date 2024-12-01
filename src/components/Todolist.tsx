import React, {useState} from 'react';
import {Task} from './Task';
import {Button} from './Button';
import {FilterValueType} from '../App'

type TodolistProps = {
    title: string
    tasks: TaskProps[]
}

type TaskProps = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = ({title, tasks,}: TodolistProps) => {

    const mappedTasks = tasks.map((task) => {
        return (
            <li key={task.id}>
                <span>{task.title}</span>
                <input type="checkbox" checked={task.isDone}/>
            </li>
        )
    })

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title='+'/>
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

