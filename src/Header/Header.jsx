import React, { useEffect, useState } from 'react'
import './Header.css'
import '../App.css'
import Image from "../images/img.png"

const Header = ({state,setState}) => {
    const date = new Date().getDate()
    const [listName, setListName] = useState("Upcoming To-Do's")
    let oneButtonSymb = "▴"
    const [isOpenButtonState,setIsOpenButtonState] = useState("▾")
    const [isOpen,setIsOpen] = useState(false)
    const handleChange = (event) => {
        setState(event.target.value)
        if(event.target.value==='completed')
            setListName('Completed list')
        else if (event.target.value==='progress')
            setListName("Upcoming To-Do's")
        else
            setListName('Removed list')

    }
    const handleMenuClick = (event) => {
        setIsOpen(!isOpen)
        if(isOpen){
            setIsOpenButtonState("▾")
        }
        else{
            setIsOpenButtonState("▴")
        }
    }
    const buttonStyle = {
        display: isOpen? "inline-block" : "none",
    }
    
    return (
        <header>
            <div className='calendar'>
                <img src={Image} alt="calendar"></img>
                <div id='calendar_text'>{date}</div> <span id='greetings'>Hey, Mike!</span>
            </div>
            <div className='plan'>
                <label>What's your plan?</label>
                <button className='triangle_button'onClick={handleMenuClick}>{isOpenButtonState}</button>
            <br/>
            </div>  
            
            <div className='nav_buttons'>
                <button className={state ==='completed' ? 'selected_button' : ''} value="completed" style={buttonStyle} onClick={handleChange}>Completed</button>
                <button className={state ==='progress' ? 'selected_button' : ''} value="progress" style={buttonStyle} onClick={handleChange}>In Progress</button>
                <button className={state ==='removed' ? 'selected_button' : ''} value="removed" style={buttonStyle} onClick={handleChange}>Removed</button>
            </div>
            <div className='listname'>
                {listName}
            </div>
        </header>
        
        
    )
}

export default Header