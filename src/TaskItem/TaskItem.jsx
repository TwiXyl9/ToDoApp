import React from 'react'
import './TaskItem.css'

const TaskItem = ({task, removeTask, completeTask}) => {
    const handleRemove = () => {
        removeTask(task)
    }
    const handleComplete = () => {
        completeTask(task)
    }
    const removeButtonStyle = {
        display: task.state === "removed" ? "none" : "inline-block"
    }
    const completeButtonStyle = {
        display: task.state === "completed" ? "none" : "inline-block"
    }
    return (
        <section class={task.state}>
            <button className="complete_button" style={completeButtonStyle} onClick={handleComplete}>✓</button>
            {task.name}
            <button className="remove_button" style={removeButtonStyle} onClick={handleRemove}>☓</button>
            
        </section>
    )
}

export default TaskItem