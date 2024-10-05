import React, { useState } from "react";
import {addUser} from "./Slices/UserSlice";
import { useDispatch } from "react-redux";

function CreateUsers(){
    const [input,setInput]=useState('');
    // const [users,setUsers]=useState([]);
    const dispatch=useDispatch();
    function addFuntion(e){
        e.preventDefault();
        if(input){
            // setUsers((prev)=>[...prev,input]);
            dispatch(addUser(input));
            setInput('');
            // console.log(users);
        }
    }
    return(
        <div className="App">
           <form onSubmit={addFuntion}>
             <label name="user">enter:</label>
             <input name="user" value={input} onChange={(e)=>setInput(e.target.value)}/>
             <br></br>
             <br></br>
             <button>add</button>
           </form>
           
        </div>
        
    )
}
export default CreateUsers;