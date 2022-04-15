import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import axios from 'axios'
import './App.css'

const API_URL = "https://to-do-list-lab-api.herokuapp.com/api/v1/"

function getAPIData() 
{
  return axios.get(API_URL).then(resp => resp.data.data)
}

function printErrorInConsole(code)
{
  console.log("Something went wront. Error code: "+code)
}
const App = () => {
  const [state,setState] = useState("progress")
  const [tasks,setTasks] = useState([])
  const [filteredTasks,setFilteredTasks]=useState([])

  // POST
  const addTask = (taskName) => {

    const newTask = { item: {name: taskName, state: "progress"}}
    axios.post(API_URL, newTask).then(
      (resp) => {
        if (resp.status === 200)
        {
          setTasks([
            ...tasks,
            resp.data.data
          ])
        }
        else 
          printErrorInConsole(resp.status)
      }
    )
  }

  //DELETE
  const deleteTask = (deletedTask) => {
    axios.delete(API_URL+'/'+deletedTask.id)
    .then((resp)=>
    {
      if (resp.status === 204)
        {
          let leftTasks = tasks.filter((task)=>task.id!==deletedTask.id)
          leftTasks = leftTasks.length === 0 ? [] : leftTasks
          setTasks(leftTasks)
        }
      else
        {
          printErrorInConsole(resp.status)
        }
    })
  }

  //PATCH
  const removeTask = (removedTask) => {
      const toUpdate = { item: {state: "removed"} }
      axios.patch(API_URL+'/'+removedTask.id, toUpdate)
      .then((resp)=>{
          if(resp.status === 200)
          {
            const remTasks = tasks.filter((task)=>task.id!==removedTask.id)
            setTasks([
            ...remTasks,
              resp.data.data
            ])
          }
          else
          {
            printErrorInConsole(resp.status)
          }
      })
  }

  //PATCH
  const changeTaskType = (taskToChange, checked) => 
  {
    const newState = checked === true ? "completed" : "progress"
    const toUpdate = { item: {state: newState} }
      axios.patch(API_URL+'/'+taskToChange.id, toUpdate)
      .then((resp)=>{
          if(resp.status === 200)
          {
            const remTasks = tasks.filter((task)=>task.id!==taskToChange.id)
            setTasks([
            ...remTasks,
              resp.data.data
            ])
          }
          else
          {
            printErrorInConsole(resp.status)
          }
      })
  }

  useEffect(()=>
  {
    let mounted = true;
    getAPIData().then((items)=>
    {
      if (mounted)
      {
        setTasks(items)
      }
    })
    return () => (mounted = false)
  }, [])

  useEffect(()=>{
    const tempTasks = tasks.filter((task)=>task.attributes.state===state)
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
