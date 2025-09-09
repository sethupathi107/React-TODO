import { useState } from "react"


function Todolist(){

    const [taskList,setTaskList]=useState([])

    const [tasks,setTasks]=useState("");

    function getTask(e){
        setTasks(e.target.value)
    }

    function addTask(){
        if(tasks.trim()!=""){
        setTaskList([...taskList,tasks])
        setTasks("");
        }
    }

    function deleteTask(index){
        setTaskList(taskList.filter((_,i)=> i!==index))
    }

    function moveUp(index){
        if(index>0){
            const upMove=[...taskList];
            [upMove[index],upMove[index-1]]= [upMove[index-1],upMove[index]];
            console.log(upMove)
            setTaskList(upMove)
        }
    }

    function  moveDown(index){
        if(index<taskList.length-1){
            const upMove=[...taskList];
            [upMove[index],upMove[index+1]]= [upMove[index+1],upMove[index]];
            console.log(upMove)
            setTaskList(upMove)
        }
    }


    addEventListener("keypress",(e)=>{
        if(e.key==="Enter"){
            addTask();
        }
    })



    return (
        <>
            <div className="todo">
            <h1 className="title" >To Do List✅</h1>
            <div className="add" >
                <input className="inputbox" type="text" value={tasks} onChange={getTask} placeholder="Add Task" />
                <button className="addbtn" onClick={addTask}  >ADD</button>  
            </div>
            <div className="taskbar" >
            <ul className="list" >
                {taskList.map((task,index)=>
                <li  key={index} > {index+1}: {task}
                    <div className="btn">
                    <button className="deletebtn" onClick={()=>deleteTask(index)} >🗑️</button>
                    <button className="move" onClick={()=>moveUp(index)} >☝</button>
                    <button className="move" onClick={()=>moveDown(index)}>👇</button>
                    </div>
                </li>
                )}
            </ul>
            </div>
            </div>
            </>

    );
}

export default Todolist