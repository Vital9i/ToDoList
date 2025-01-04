import React, {useState} from 'react';
import './App.css';
import {TaskProps, Todolist} from './components/Todolist';
import {v1} from "uuid";

export  type TaskNameType = 'All' | 'Active' | 'Completed'

function App() {

    const titleText1 = 'What to learn-1'

    let [tasks, setTasks] = useState([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
        {id: v1(), title: 'Typescript', isDone: true},
        {id: v1(), title: 'RTK query', isDone: false},
    ])

    const addTasks = (newTitleTask:string)=>{
        const newTasks:TaskProps = {id: v1(), title: newTitleTask, isDone: false}
        setTasks([newTasks,...tasks])
    }

    const deleteTasks = (deleteTasks: string) => {
        console.log(deleteTasks)
        setTaskNameForDrushlag(deleteTasks);
    }

    const firstThreeTasks = (firstThreeTasks: string) => {
        console.log(firstThreeTasks)
        setTaskNameForDrushlag(firstThreeTasks);
    }

    const removeTasks = (taskId: string) => {
        console.log(taskId)
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    const changeTasks = (taskName: TaskNameType) => {
        console.log(taskName)
        setTaskNameForDrushlag(taskName);
    }

    let [taskNameForDrushlag, setTaskNameForDrushlag] = useState('All')
    let drushlaq = tasks;
    switch (taskNameForDrushlag) {
        case 'delete':
            drushlaq = [];
            break;
        case 'firstThreeTasks':
            drushlaq = tasks.slice(0, 3);
            break;
        case 'All':
            drushlaq = tasks;
            break;
        case 'Completed':
            drushlaq = tasks.filter(el => el.isDone);
            break;
        case 'Active':
            drushlaq = tasks.filter(el => !el.isDone);
            break;
        default:
            drushlaq = tasks;
            break;
    }

    return (
        <div className='App'>
            <Todolist title={titleText1}
                      tasks={drushlaq}
                      removeTasks={removeTasks}
                      changeTasks={changeTasks}
                      deleteTasks={deleteTasks}
                      firstThreeTasks={firstThreeTasks}
                      addTasks={addTasks}
            />
        </div>
    );
}

export default App;

