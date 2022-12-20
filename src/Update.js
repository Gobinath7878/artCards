import { useState } from "react";
import TextField from '@mui/material/TextField';


 const AddUserForm = (props)=>{
    const initialFormState = {id:null,name:'',username:'',item_description:''}
    const [user,setUser] =  useState(initialFormState);

    const handleInputChange = (event)=>{
       const {name,value} = event.target
       setUser({...user,[name]:value})
    }
    return (
    <form  onSubmit={
        event => {
            event.preventDefault();
            props.addUser(user);
            setUser(initialFormState);
        }
    }>
        <div>
            <h1 className="tit-name">CRUD CARDS</h1>
            <h6 className="tit-slogan">fill the <small>card</small>s with <small>heart</small></h6>
        </div>
        
       
        <TextField sx={{height:80,width:250}}  color="success" onChange={handleInputChange} name="name" value={user.name}  label="type your wishes here" id="outlined-basic"  variant="outlined"/>
        <TextField sx={{height:80,width:250}}  color="success" onChange={handleInputChange} name="username" value={user.username} label="your name" id="outlined-basic"  variant="outlined"/>
        <TextField sx={{height:130,width:250}} color="success" onChange={handleInputChange} name="item_description" value={user.item_description} 
        id="outlined-multiline-static" label="Quote about your 🖤" multiline rows={4} defaultValue="Default Value" placeholder="type about your Love"/>
      
        <button className="btn-input">Generate Card</button>
      </form>
    )
 }

export default AddUserForm;
