import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser } from "./Slices/UserSlice";
function ViewUsers(){
   const users=useSelector((state)=>state.users);
   const dispatch=useDispatch();
   function deleteFunction(index){
        dispatch(deleteUser(index));
   }
   return(
    <>
      <h1>Added Users:</h1>
      <ul>
        {
            (users).map((user,index)=>(
                <li>{user}<button onClick={()=>deleteFunction(index)}>delete</button></li>
            ))
        }
      </ul>
    </> 
   )
}

export default ViewUsers;