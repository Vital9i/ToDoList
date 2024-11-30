import React, { useState } from 'react';
import './App.css';
import { Todolist } from './components/Todolist';

export type FilterValueType = 'All' | 'Active' | 'Completed'

function App() {

    const titleText1 = 'What to learn-1'

    let [tasks1, setTasks] = useState([
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
        { id: 4, title: 'Redux', isDone: false },
        { id: 5, title: 'Typescript', isDone: true },
        { id: 6, title: 'RTK query', isDone: false },
    ])

    // let [valForDrushlaq, setValForDrushlaq] = useState('All')

    const removeTasks = (taskId: number) => {
        console.log(taskId)
        setTasks(tasks1.filter(el => el.id !== taskId))
    }

    // const changeFilter = (Value: FilterValueType) => {
    //     console.log(Value)
    //     setValForDrushlaq(Value)
    // }

    // let drushlaq = tasks1
    // if (valForDrushlaq === 'Completed') {
    //     drushlaq = tasks1.filter(el => el.isDone)
    // }
    // if (valForDrushlaq === 'Active') {
    //     drushlaq = tasks1.filter(el => !el.isDone)
    // }


    return (
        <div className='App'>
            <Todolist title={titleText1}
                tasks={tasks1}
                removeTasks={removeTasks}
                // changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
