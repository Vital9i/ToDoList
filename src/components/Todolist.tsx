import React from 'react';
import { Task } from './Task';
import { Button } from './Button';

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
            <Task key={task.id} title={task.title} isDone={task.isDone} />
        )
    })

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input />
                <Button title='+' />
            </div>
            <ul>
                {mappedTasks}
            </ul>
            <div>
                <Button title='All' />
                <Button title='Active' />
                <Button title='Completed' />
            </div>
        </div>
    );
};

