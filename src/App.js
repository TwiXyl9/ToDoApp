import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import './App.css'

const App = () => {
  const newId = (tasks) => {
    const max = tasks.length === 0 ? {id: 0} : tasks.reduce((acc, curr) => acc.id > curr.id ? acc : curr);
    return max.id
  }
  const [state,setState] = useState("progress")
  const [tasks,setTasks] = useState([
    {id: 1, name: "Task1", state:"progress"},
    {id: 2, name: "Task2", state:"completed"},
    {id: 3, name: "Task3", state:"removed"}
  ])
  const [filteredTasks,setFilteredTasks]=useState([])
  const addTask = (taskName) => {
    const id = newId(tasks)+1
    setTasks([
      ...tasks,
      {id: id, name: taskName, state: "progress"}
    ])
  }
  const deleteTask = (deletedTask) => {
    let leftTasks = tasks.filter((task)=>task.id!==deletedTask.id)
    leftTasks = leftTasks.length === 0 ? [] : leftTasks
    setTasks(leftTasks)
  }
  const removeTask = (removedTask) => {
      const remTasks = tasks.filter((task)=>task.id!==removedTask.id)
      setTasks([
        ...remTasks,
        {id: removedTask.id,name: removedTask.name, state: "removed"}
      ])
  }
  const changeTaskType = (taskToChange, checked) => 
  {
    const newTasks = tasks.filter((task)=>task.id!==taskToChange.id)
    let newState = checked === true ? "completed" : "progress"
    setTasks(
      [
        ...newTasks,
        {id: taskToChange.id, name: taskToChange.name, state: newState}
      ])
  }

  useEffect(()=>{
    const tempTasks = tasks.filter((task)=>task.state===state)
    setFilteredTasks(tempTasks)
  },[state, tasks])
  return (
    <div className="content">
      <Header state={state} setState={setState}/> 
      <Main state={state} tasks={filteredTasks} addTask={addTask} deleteTask={deleteTask} removeTask={removeTask} changeTaskType={changeTaskType}/>
    </div>
  );
}

export default App;
