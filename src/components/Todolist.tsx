import React from 'react';
import { Task } from './Task';
import { Button } from './Button';

type TodolistProps = {
    title: string
    tasks: TaskProps[]
    removeTasks:(taskId: number)=>void
    changeFilter:(filter:number)=>void
}

type TaskProps = {
    id: number
    title: string
    isDone: boolean
}

export const Todolist = ({ title, tasks,removeTasks,changeFilter }: TodolistProps) => {

    const mappedTasks = tasks.map((task) => {
        return (
            <li key={task.id}>
                <button onClick={()=>{removeTasks(task.id)}}>x</button>
                <span>{task.title}</span>
                <input type="checkbox" checked={task.isDone}  />
            </li> 
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
                <button onClick={()=>{changeFilter(01)}}>All</button>
                <button onClick={()=>{changeFilter(02)}}>Active</button>
                <button onClick={()=>{changeFilter(03)}}>Completed</button>
                {/* <Button title='All' />
                <Button title='Active' />
                <Button title='Completed' /> */}
            </div>
        </div>
    );
};

