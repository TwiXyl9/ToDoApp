import React from 'react'
import './Header.css'
import '../App.css'


const Header = ({state,setState}) => {
    const date = new Date().toDateString()
    const handleChange = (event) => {
        setState(event.target.value)
    }
    return (
        <header>
            <div>{date}</div>
            <select value={state} onChange={handleChange}>
                <option value="completed">Completed</option>
                <option value="progress">In Progress</option>
                <option value="removed">Removed</option>
            </select>
        </header>
        
        
    )
}

export default Header