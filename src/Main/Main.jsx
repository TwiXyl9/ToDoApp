import React, { useState } from 'react'
import TaskItem from '../TaskItem/TaskItem'
import './Main.css'

const Main = ({state, tasks, addTask, deleteTask, removeTask, changeTaskType}) => {
    const [inputTask,setInputTask] = useState("")
    const handleInput = (event) => {
        setInputTask(event.target.value)
    }
    const handleClick = () => {
        if(inputTask.trim() !==''){
            addTask(inputTask)
        }
        
    }
    const newItemStyle = {
        display: state === 'progress' ? 'block' : 'none'
    }
    return (
        <main>
            {tasks.map((task)=> (
                <TaskItem key={task.id} task={task} deleteTask={deleteTask} removeTask={removeTask} changeTaskType={changeTaskType}/>
            ))}
            <section style={newItemStyle} className='new_item'>
                <button onClick={handleClick} className='circle'>+</button>
                <input value={inputTask} onChange={handleInput} placeholder="Enter new task..."></input>
            </section>
        </main>
    )
}

export default Main