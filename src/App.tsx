import React from 'react';
import './App.css';
import { Task, Todolist } from './Todolist';

function App() {
    const title = 'What to learn'
    const title2 = 'What to learn2'

    const task1:Task[] = [
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false }
    ]

    const task2:Task[] = [

    ]

    return (
        <div className="App">
            <Todolist title={title} tasks={task1}/>
            <Todolist title={title2} fura={222} tasks={task2}/>
        </div>
    );
}

export default App;
