import React, { useEffect, useState } from 'react'

const Header = ({state,setState}) => {
    const date = new Date().toDateString()
    let oneButtonSymb = "&#x25BC;"
    const [isOpenButtonState,setIsOpenButtonState] = useState("&#x25BC;")
    const [isOpen,setIsOpen] = useState(false)
    const handleChange = (event) => {
        setState(event.target.value)
    }
    const handleMenuClick = (event) => {
        setIsOpen(!isOpen)
        if(isOpen){
            setIsOpenButtonState("&#x25B2;")
        }
        else{
            setIsOpenButtonState("&#x25BC;")
        }
    }
    const buttonStyle = {
        display: isOpen? "inline-block" : "none"
    }
    
    return (
        <header>
            <div>{date}</div>
            <label>What's your plan?</label>
            <button onClick={handleMenuClick}>{isOpenButtonState}</button>
            <br/>
            
            <button value="completed" style={buttonStyle} onClick={handleChange}>Completed</button>
            <button value="progress" style={buttonStyle} onClick={handleChange}>In Progress</button>
            <button value="removed" style={buttonStyle} onClick={handleChange}>Removed</button>
        </header>
        
        
    )
}

export default Header