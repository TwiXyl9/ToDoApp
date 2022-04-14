import React, { useState } from 'react'
import TaskItem from '../TaskItem/TaskItem'
import './Main.css'

const Main = ({tasks,addTask, removeTask, completeTask}) => {
    const [inputTask,setInputTask] = useState("")
    const handleInput = (event) => {
        setInputTask(event.target.value)
    }
    const handleClick = () => {
        if(inputTask.trim() !==''){
            addTask(inputTask)
        }
        
    }
    return (
        <main>
            {tasks.map((task)=> (
                <TaskItem key={task.id} task={task} removeTask={removeTask} completeTask={completeTask}/>
            ))}
            <section className='new_item'>
                <button onClick={handleClick} className='circle'>+</button><input value={inputTask} onChange={handleInput} placeholder="Enter new task..."></input>
            </section>
        </main>
    )
}

export default Main