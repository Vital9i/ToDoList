import { Button } from "./components/Button"
import { FilterValuesType } from "./App";
import { KeyboardEvent, ChangeEvent, useRef, useState } from "react";

type TodolistItemProps = {
    title: string
    tasks: Tasks[]
    removeTask: (taskId: string) => void
    filterTasks: (filterValues: FilterValuesType) => void
    createTask: (taskTitle: string) => void
}

type Tasks = {
    id: string
    title: string
    isDone: boolean
}

export const TodolistItem = (props: TodolistItemProps) => {

    const { title, tasks, removeTask, filterTasks, createTask }: TodolistItemProps = props

    const [taskTitle, setTaskTitle] = useState('')

    const removeTaskHandler = (taskId: string) => {
        removeTask(taskId)
    }
    const filterTaskHandler = (filterValues: FilterValuesType) => {
        filterTasks(filterValues)
    }
    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.target.value)
    }
    const createTaskOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            createTaskHandler()
        }
    }
    const createTaskHandler = () => {
        if (taskTitle.trim()) {
            createTask(taskTitle)
            setTaskTitle('')
        }
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input value={taskTitle} onChange={inputChangeHandler}
                    onKeyDown={createTaskOnEnterHandler} />
                <Button title={'+'} onClick={createTaskHandler} />
            </div>
            <ul>
                {tasks.length === 0 ? (
                    <p>тасок нет</p>) : (
                    tasks.map((t) => (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone} /> <span>{t.title}</span>
                            <Button title={'X'} onClick={() => removeTaskHandler(t.id)} />
                        </li>
                    ))
                )}
            </ul>
            <div>
                <Button title='All' onClick={() => filterTaskHandler('All')} />
                <Button title='Active' onClick={() => filterTaskHandler('Active')} />
                <Button title='Completed' onClick={() => filterTaskHandler('Completed')} />
            </div>
        </div>
    )
}