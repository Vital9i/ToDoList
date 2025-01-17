import { useState } from 'react'
import './App.css'
import { TodolistItem } from './TodolistItem'
import { v4 as uuidv4 } from 'uuid';

export type FilterValuesType = 'All' | 'Active' | 'Completed'

export const App = () => {

    const [filter, setFilter] = useState<FilterValuesType>('All')

    const [tasks, setTasks] = useState([
        { id: uuidv4(), title: 'HTML&CSS', isDone: true },
        { id: uuidv4(), title: 'JS', isDone: true },
        { id: uuidv4(), title: 'ReactJS', isDone: false },
        { id: uuidv4(), title: 'Redux', isDone: true },
        { id: uuidv4(), title: 'Angular', isDone: true },
        { id: uuidv4(), title: 'Vue', isDone: false },
    ])

    let filteredTasks

    switch (filter) {
        case 'All':
            filteredTasks = tasks
            break;
        case 'Active':
            filteredTasks = tasks.filter((t) => !t.isDone)
            break;
        case 'Completed':
            filteredTasks = tasks.filter((t) => t.isDone)
            break;
    }

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter((t) => t.id !== taskId))
    }

    const filterTasks = (filterValues: FilterValuesType) => {
        setFilter(filterValues)
    }

    const createTask = (taskTitle:string)=>{
        setTasks([{ id: uuidv4(), title: taskTitle, isDone: false },...tasks])
    }

    return (
        <div className="app">
            <TodolistItem title={'What to learn'}
                tasks={filteredTasks}
                removeTask={removeTask}
                filterTasks={filterTasks}
                createTask={createTask} />
        </div>
    )
}

