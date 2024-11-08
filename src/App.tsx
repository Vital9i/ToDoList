import React from 'react';
import './App.css';
import { Todolist } from './components/Todolist';

function App() {

    const titleText1 = 'What to learn-1'
    const titleText2 = 'What to learn-2'

    const tasks1 = [
        {id:1, title:'HTML&CSS', isDone:true},
        {id:2, title:'JS', isDone:true},
        {id:3, title:'ReactJS', isDone:false},
        {id:3, title:'ReactJS', isDone:false},
    ]

    const tasks2 = [
        {id:1, title:'Hello world', isDone:true},
        {id:2, title:'I am Happy', isDone:false},
        {id:3, title:'yo', isDone:false},
    ]

    return (
        <div className='App'>
            <Todolist title={titleText1} tasks={tasks1}/>
            <Todolist title={titleText2} tasks={tasks2}/>
        </div>
    );
}

export default App;
