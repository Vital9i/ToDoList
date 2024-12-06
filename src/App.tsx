import React, {useState} from 'react';
import './App.css';
import {Todolist} from './components/Todolist';

export  type TaskNameType = 'All' | 'Active' | 'Completed'

//Hi guys!
//1. Let's create a 'DELETE ALL TASKS' button, and place it above the filter buttons
//Clicking the button removes all tasks
//2. Let's create a fourth filter button-if you click it, the first three tasks will be displayed
//3. Relocate everything associated with  filters to the Todolist.tsx component. Make it work
//
// let [filter, setFilter] = useState<FilterValuesType>("all");
//
// let tasksForTodolist = tasks;
//
// if (filter === "active") {
//     tasksForTodolist = tasks.filter(t => t.isDone === false);
// }
// if (filter === "completed") {
//     tasksForTodolist = tasks.filter(t => t.isDone === true);
// }
//
// function changeFilter(value: FilterValuesType) {
//     setFilter(value);
// }

function App() {

    const titleText1 = 'What to learn-1'

    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: true},
        {id: 6, title: 'RTK query', isDone: false},
    ])

    const deleteTasks = (deleteTasks: string) => {
        setTaskNameForDrushlag(deleteTasks)
    }

    const firstThreeTasks = (firstThreeTasks: string) => {
        setTaskNameForDrushlag(firstThreeTasks)
    }

    const removeTasks = (taskId: number) => {
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
            />
        </div>
    );
}

export default App;

