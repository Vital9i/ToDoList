import React,  { useState } from 'react';
import { Task } from './Task';
import { Button } from './Button';
import {FilterValueType} from '../App'

type TodolistProps = {
    title: string
    tasks: TaskProps[]
    removeTasks:(taskId: number)=>void
    // changeFilter:(Value: FilterValueType)=>void
}

type TaskProps = {
    id: number
    title: string
    isDone: boolean
}


export const Todolist = ({ title, tasks,removeTasks}: TodolistProps) => {

    const [valForDrushlaq, setValForDrushlaq] = useState('All')

    const changeFilter = (Value: FilterValueType) => {
        console.log(Value)
        setValForDrushlaq(Value)
    }

    const drushlaqFoo = () => {
        let drushlaq = tasks;
        switch (valForDrushlaq) {
            case 'Completed':
                drushlaq = tasks.filter(el => el.isDone);
                break;
            case 'Active':
                drushlaq = tasks.filter(el => !el.isDone);
                break;
            default:
                break;
        }
        return drushlaq
    }

    let drushlaqVal = drushlaqFoo()

    const mappedTasks = drushlaqVal.map((task) => {
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
                <button onClick={()=>{changeFilter('All')}}>All</button>
                <button onClick={()=>{changeFilter('Active')}}>Active</button>
                <button onClick={()=>{changeFilter('Completed')}}>Completed</button>
                {/* <Button title='All' />
                <Button title='Active' />
                <Button title='Completed' /> */}
            </div>
        </div>
    );
};

