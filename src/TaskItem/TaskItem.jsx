import React from 'react'
import './TaskItem.css'

const TaskItem = ({task, removeTask, changeTaskType}) => {
    const handleRemove = () => {
        removeTask(task)
    }
    const handleChange = (event) => {
        changeTaskType(task, event.target.checked)
    }
    const removeButtonStyle = {
        display: task.state === "removed" ? "none" : "inline-block"
    }
    const completeButtonStyle = {
        display: task.state === "completed" ? "none" : "inline-block"
    }
    return (
        <section className={task.state}>
            <input type="checkbox" className='checkbox-round'checked={task.state === "completed" ? true : false} onChange={handleChange}/>
            {task.name}
            <button className='remove_button' style={removeButtonStyle} onClick={handleRemove}>x</button>
        </section>
    )
}

export default TaskItem