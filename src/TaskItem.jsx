import React from 'react'

const TaskItem = ({task, removeTask}) => {
    const handleRemove = () => {
        removeTask(task)
    }
    const buttonStyle = {
        display: task.state === "removed" ? "none" : "inline-block"
    }
    return (
        <section>
            {`name: ${task.name}`}
            <button style={buttonStyle} onClick={handleRemove}>Remove</button>
        </section>
    )
}

export default TaskItem