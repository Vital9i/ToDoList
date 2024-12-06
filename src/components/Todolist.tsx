import React from 'react';
import {Button} from './Button';
import {TaskNameType} from "../App";

export type TodolistProps = {
    title: string
    tasks: TaskProps[]
    removeTasks: (taskId: number) => void
    changeTasks: (taskName: TaskNameType) => void
}

type TaskProps = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = ({title, tasks, removeTasks, changeTasks}: TodolistProps) => {



    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button title='+'/>
            </div>
            {
                tasks.length === 0
                    ? <p>тасок нет</p>
                    : <ul>
                        {tasks.map((task) => {
                            return (
                                <li key={task.id}>
                                    <button onClick={() => {
                                        removeTasks(task.id)
                                    }}>X
                                    </button>
                                    <span>{task.title}</span>
                                    <input type="checkbox" checked={task.isDone}/>
                                </li>)
                        })}
                    </ul>}
            <div>
                <button onClick={() => {
                    changeTasks('All')
                }}>All
                </button>
                <button onClick={() => {
                    changeTasks('Active')
                }}>Active
                </button>
                <button onClick={() => {
                    changeTasks('Completed')
                }}>Completed
                </button>
            </div>
        </div>
    );
}