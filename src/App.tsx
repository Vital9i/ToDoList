import React, {useState} from 'react';
import './App.css';
import {Todolist} from './components/Todolist';

export type FilterValueType = 'All' | 'Active' | 'Completed'

function App() {

    const titleText1 = 'What to learn-1'

    let [tasks1, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: true},
        {id: 6, title: 'RTK query', isDone: false},
    ])

    return (
        <div className='App'>
            <Todolist title={titleText1}
                      tasks={tasks1}
            />
        </div>
    );
}

export default App;
