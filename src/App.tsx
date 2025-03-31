import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodolistsType = {
    id: string,
    title: string
}

type TasksType = {
    [key: string]: SuperTaskType
}

type SuperTaskType = {
    data: TaskType[]
    filter: FilterValuesType
}

function App() {

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        { id: todolistId1, title: "What to learn" },
        { id: todolistId2, title: "What to buy" }
    ])

    let [tasks, setTasks] = useState<TasksType>({
        [todolistId1]: {
            data: [
                { id: v1(), title: "HTML&CSS1111", isDone: true },
                { id: v1(), title: "JS1111", isDone: true }
            ],
            filter: "all"
        },
        [todolistId2]: {
            data: [
                { id: v1(), title: "HTML&CSS22222", isDone: true },
                { id: v1(), title: "JS2222", isDone: true }
            ],
            filter: "all"
        }
    });

    const removeTodolist = (todolistId: string) => {
        setTodolists(todolists.filter(el => el.id !== todolistId))
        delete tasks[todolistId]
        console.log(tasks)
    }

    function removeTask(todolistId: string, taskId: string) {
        setTasks((prevState) => ({
            ...prevState, [todolistId]: { ...prevState[todolistId], data: prevState[todolistId].data.filter(el => el.id !== taskId) }
        }))
    }

    function addTask(todolistId: string, title: string) {
        let newTask = { id: v1(), title: title, isDone: false };
        setTasks((prevState) => (
            { ...prevState, [todolistId]: { ...prevState[todolistId], data: [newTask, ...prevState[todolistId].data] } }
        ))
    }

    function changeStatus(todolistId: string, taskId: string, newIsDone: boolean) {
        setTasks( (prevState) => (
            {...prevState,[todolistId]:{...prevState[todolistId],data:prevState[todolistId].data.map(el=> el.id === taskId ? {...el, isDone: newIsDone} : el)}}
        ))
    }

    function changeFilter(todolistId: string, value: FilterValuesType) {
        setTasks ((prevState) => (
            {...prevState,[todolistId]:{...prevState[todolistId],filter: value}}
        ))
    }

    return (
        <div className="App">
            {todolists.map((el) => {
                let tasksForTodolist = tasks[el.id].data;

                return (
                    <Todolist
                        key={el.id}
                        todolistId={el.id}
                        title={el.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tasks[el.id].filter}
                        removeTodolist={removeTodolist}
                    />
                )
            })}


        </div>
    );
}

export default App;
