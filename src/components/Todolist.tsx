import React, {useRef, useState} from 'react';
import {Button} from './Button';
import {TaskNameType} from "../App";

export type TodolistProps = {
    title: string
    tasks: TaskProps[]
    removeTasks: (taskId: string) => void
    changeTasks: (taskName: TaskNameType) => void
    deleteTasks: (deleteTasks: string) => void
    firstThreeTasks: (firstThreeTasks: string) => void
    addTasks:(addTasks:string) => void
    }

export type TaskProps = {
    id: string
    title: string
    isDone: boolean
}

export const Todolist = ({
                             title,
                             tasks,
                             removeTasks,
                             changeTasks,
                             deleteTasks,
                             firstThreeTasks,
                             addTasks,
                         }: TodolistProps) => {

const[newTitleTask, setNewTitleTask] = useState('')

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input
                    value={newTitleTask}
                    onChange={(e)=>setNewTitleTask(e.currentTarget.value)}
                    onKeyDown={(e)=>{
                        if (e.key === "Enter") {
                            addTasks(newTitleTask);
                            setNewTitleTask('')
                        }
                    }}
                />
                <button onClick={()=>{


                    addTasks(newTitleTask);
                    setNewTitleTask('')


                }}>AddTasks</button>
                <Button title='+'/>
            </div>
            {
                tasks.length === 0
                    ? <p>тасок нет</p>
                    : <ul>
                        {tasks.map((task) => {
                            return (
                                <li key={task.id}>
                                    <button onClick={() => {
                                        removeTasks(task.id)
                                    }}>X
                                    </button>
                                    <span>{task.title}</span>
                                    <input type="checkbox" checked={task.isDone}/>
                                </li>)
                        })}
                    </ul>}
            <div>
                <button onClick={() => {
                    deleteTasks('delete')
                }}>
                    Delete Tasks
                </button>
            </div>
            <div>
                <button onClick={() => {
                    changeTasks('All')
                }}>All
                </button>
                <button onClick={() => {
                    changeTasks('Active')
                }}>Active
                </button>
                <button onClick={() => {
                    changeTasks('Completed')
                }}>Completed
                </button>
                <button onClick={() => {
                    firstThreeTasks('firstThreeTasks')
                }}>firstThreeTasks
                </button>
            </div>
        </div>
    );
}

//-------------------------------------
// import React, {useRef, useState} from 'react';
// import {Button} from './Button';
// import {TaskNameType} from "../App";
//
// export type TodolistProps = {
//     title: string
//     tasks: TaskProps[]
//     removeTasks: (taskId: string) => void
//     changeTasks: (taskName: TaskNameType) => void
//     deleteTasks: (deleteTasks: string) => void
//     firstThreeTasks: (firstThreeTasks: string) => void
//     addTasks:(addTasks:string) => void
// }
//
// export type TaskProps = {
//     id: string
//     title: string
//     isDone: boolean
// }
//
// export const Todolist = ({
//                              title,
//                              tasks,
//                              removeTasks,
//                              changeTasks,
//                              deleteTasks,
//                              firstThreeTasks,
//                              addTasks,
//                          }: TodolistProps) => {
//
//     const inputRef = useRef<HTMLInputElement>(null);
//
//     return (
//         <div>
//             <h3>{title}</h3>
//             <div>
//                 <input ref={inputRef}/>
//                 <button onClick={()=>{
//                     if(inputRef.current){
//                         addTasks(inputRef.current.value)
//                         inputRef.current.value = ""}
//                 }}>AddTasks</button>
//                 <Button title='+'/>
//             </div>
//             {
//                 tasks.length === 0
//                     ? <p>тасок нет</p>
//                     : <ul>
//                         {tasks.map((task) => {
//                             return (
//                                 <li key={task.id}>
//                                     <button onClick={() => {
//                                         removeTasks(task.id)
//                                     }}>X
//                                     </button>
//                                     <span>{task.title}</span>
//                                     <input type="checkbox" checked={task.isDone}/>
//                                 </li>)
//                         })}
//                     </ul>}
//             <div>
//                 <button onClick={() => {
//                     deleteTasks('delete')
//                 }}>
//                     Delete Tasks
//                 </button>
//             </div>
//             <div>
//                 <button onClick={() => {
//                     changeTasks('All')
//                 }}>All
//                 </button>
//                 <button onClick={() => {
//                     changeTasks('Active')
//                 }}>Active
//                 </button>
//                 <button onClick={() => {
//                     changeTasks('Completed')
//                 }}>Completed
//                 </button>
//                 <button onClick={() => {
//                     firstThreeTasks('firstThreeTasks')
//                 }}>firstThreeTasks
//                 </button>
//             </div>
//         </div>
//     );
// }
