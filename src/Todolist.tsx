import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import { FilterValuesType, TasksType } from './App';
import { Button } from './components/Button';

type PropsType = {
    id: number
    title: string
    tasks: Array<TasksType>
    students: Array<string>
    removeTask: (taskId: string, todolistId: number) => void
    changeFilter: (value: FilterValuesType, todolistId: number) => void
    addTask: (title: string, todolistId: number) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
    removeTodolist: (id: number) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === 'Enter') {
            addTaskHandler();
        }
    }

    const removeToDolistHandler = () => {
        props.removeTodolist(props.id)
    }

    const addTaskHandler = () => {
        if (title.trim()) {
            props.addTask(title, props.id)
            setTitle('')
        } else { alert('input is empty') }
    }

    const removeTaskHandler = (taskId: string) => {
        props.removeTask(taskId, props.id)
    }

    const changeFilterHandler = (value:FilterValuesType) => {
        props.changeFilter(value,props.id)
    }

    return <div>
        <h3> {props.title}
            <Button title='x' onClick={removeToDolistHandler} />

        </h3>
        <div>
            <input value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                className={error ? "error" : ""}
            />
            <Button title='add Task' onClick={addTaskHandler} />

            {error && <div className="error-message">{error}</div>}

        </div>

        <ul>
            {
                props.tasks.map(t => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.taskId, newIsDoneValue, props.id);
                    }

                    return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone} />
                        <span>{t.title}</span>
                        <Button title='x' onClick={() => removeTaskHandler(t.taskId)} />
                    </li>
                })
            }
        </ul>
        <div>
        <Button className={props.filter === 'all' ? "active-filter" : ""} title='all' onClick={()=>changeFilterHandler('all')} />
        <Button className={props.filter === 'active' ? "active-filter" : ""} title='active' onClick={()=>changeFilterHandler('active')} />
        <Button className={props.filter === 'completed' ? "active-filter" : ""} title='completed' onClick={()=>changeFilterHandler('completed')} />

            {/* <button className={props.filter === 'all' ? "active-filter" : ""}
                onClick={() => { }}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                onClick={() => { }}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                onClick={() => { }}>Completed
            </button> */}
        </div>
        <p></p>
        {
            props.students.map((el) => {
                return (
                    <div>{el}</div>
                )
            })
        }
    </div>
}
