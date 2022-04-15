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
    return (
        <section className={task.state}>
            <div className='round'>
                <input type="checkbox" id={'checkbox-' + task.id} checked={task.state === "completed" ? true : false} onChange={handleChange}/>
                <label for={'checkbox-' + task.id}></label>
            </div>
            <div className='text'>
                {task.name}
            </div>
            <button className='remove_button' style={removeButtonStyle} onClick={handleRemove}>
<svg class="svg-icon" viewBox="0 0 100 100">
<path d="M62.819,47.97l32.533-32.534c0.781-0.781,0.781-2.047,0-2.828L83.333,0.586C82.958,0.211,82.448,0,81.919,0
		c-0.53,0-1.039,0.211-1.414,0.586L47.97,33.121L15.435,0.586c-0.75-0.75-2.078-0.75-2.828,0L0.587,12.608
		c-0.781,0.781-0.781,2.047,0,2.828L33.121,47.97L0.587,80.504c-0.781,0.781-0.781,2.047,0,2.828l12.02,12.021
		c0.375,0.375,0.884,0.586,1.414,0.586c0.53,0,1.039-0.211,1.414-0.586L47.97,62.818l32.535,32.535
		c0.375,0.375,0.884,0.586,1.414,0.586c0.529,0,1.039-0.211,1.414-0.586l12.02-12.021c0.781-0.781,0.781-2.048,0-2.828L62.819,47.97
		z"/>
						</svg>
            </button>
        </section>
    )
}

export default TaskItem