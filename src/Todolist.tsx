import React from "react"
import { Button } from "./Button"

type Props={
    title:string
    fura?:number
    tasks: Task[]
    }

export type Task={
        id:number 
        title:string 
        isDone:boolean
    }

export const Todolist = ({title,fura,tasks}:Props)=> {

    return(
        <div>
        <h3>{title}</h3>
        <h3>{fura}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul> 
            {
            !tasks.length
            ?<div>EMPTY</div>
            :tasks.map((task)=>{
                return(
            <li key={task.id}><input type="checkbox" checked={task.isDone}/> <span>{task.title}</span></li>)})}
        </ul>
        <div>
            <Button title={"all"} />
            <Button title={"Active"} />
            <Button title={"Completed"} />
            </div>
    </div>
    )
}