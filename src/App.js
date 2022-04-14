import { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";

const App = () => {
  const newId = (tasks) => {
    const max = tasks.reduce((acc, curr) => acc.id > curr.id ? acc : curr);
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
      {id: id,name: taskName, state: "progress"}
    ])
  }
  const removeTask = (removedTask) => {
      const remTasks = tasks.filter((task)=>task.id!==removedTask.id)
      setTasks([
        ...remTasks,
        {id: removedTask.id,name: removedTask.name, state: "removed"}
      ])
  }
  const completeTask = (completedTask) => {
    const comTasks = tasks.filter((task)=>task.id!==completedTask.id)
    setTasks([
      ...comTasks,
      {id: completedTask.id,name: completedTask.name, state: "completed"}
    ])
}
  
  useEffect(()=>{
    const tempTasks = tasks.filter((task)=>task.state===state)
    setFilteredTasks(tempTasks)
  },[state, tasks])
  return (
    <>
      <Header state={state} setState={setState}/> 
      <Main tasks={filteredTasks} addTask={addTask} removeTask={removeTask} completeTask={completeTask} />
    </>
  );
}

export default App;
