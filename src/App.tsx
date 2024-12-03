import React, {useState} from 'react';
import './App.css';
import { Todolist} from './components/Todolist';

export  type TaskNameType = 'All' | 'Active' | 'Completed'

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



    const removeTasks = (taskId: number) => {
        console.log(taskId)
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    // let [taskNameForDrushlag,setTaskNameForDrushlag] = useState<TaskNameType>('All')
    //
    // const changeTasks = (taskName: TaskNameType) => {
    //     console.log(taskName)
    //     setTaskNameForDrushlag(taskName);
    // }
    // let drushlaq = tasks
    //     if (taskNameForDrushlag === 'Completed') {
    //         drushlaq=tasks.filter(el => el.isDone)
    //     }
    //     if (taskNameForDrushlag === 'Active') {
    //         drushlaq=tasks.filter(el => !el.isDone)
    //     }

    return (
        <div className='App'>
            <Todolist title={titleText1}
                      tasks={tasks}
                      removeTasks={removeTasks}
                      // changeTasks={changeTasks}
            />
        </div>
    );
}

export default App;

