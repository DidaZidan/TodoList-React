import { useState } from "react"
function TodoList(){
let [tasks,settasks]=useState([])
let [newtask,setnewtask]=useState("")
    
function handleinput(e){
setnewtask(e.target.value)
}
function addtask(){
    
settasks([...tasks,newtask])
setnewtask("")
}
function removetask(index){
   settasks( tasks.filter((_,i)=>{
        return i!==index
    }))
}

return(

<>
<div className="container">
    <h1>To-do-List</h1>
    <input placeholder="Enter a todo..." type="text" value={newtask} onChange={handleinput} />
    <button className="add" onClick={addtask}>Add</button>
    <ul>
        {tasks.map((element,index)=>{
            return(<>
            <div className="list-container">
                <li key={index}>{element}</li>
                <button onClick={()=>removetask(index)}>Delete</button>
                
            </div>
            
            </>)

        })}
    </ul>
</div>
</>
)
}
export default TodoList