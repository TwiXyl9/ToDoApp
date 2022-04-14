import React from 'react'

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
        <section>
            {task.name}
            <button style={removeButtonStyle} onClick={handleRemove}>Remove</button>
            <button style={completeButtonStyle} onClick={handleComplete}>Complete</button>
        </section>
    )
}

export default TaskItem