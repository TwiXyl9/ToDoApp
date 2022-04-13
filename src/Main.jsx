import React, { useState } from 'react'
import TaskItem from './TaskItem'

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
            <input value={inputTask} onChange={handleInput}></input>
            <button onClick={handleClick}>Add Task</button>
        </main>
    )
}

export default Main