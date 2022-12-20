import { useEffect, useState } from "react"
import TextField from '@mui/material/TextField';




const EditUserForm = (props)=>{
   const [user,setUser] = useState(props.currentUser)

   useEffect(()=>{
        setUser(props.currentUser)
   },[props])

   const handleInputChange = (event)=>{
    const {name,value} = event.target

    setUser({...user,[name]:value})
    }

    return (
        <form onSubmit={
            event => {
                event.preventDefault();
                if(!user.name&&!user.username&&!user.item_description) return;
                props.updateUser(user.id,user);
            }
        }>
        
        <div>
        <h1 className="tit-name">CRUD CARDS</h1>
        <h6 className="tit-slogan">Edit the <small>card</small>s with <small>heart</small></h6>
        </div>

        <TextField sx={{height:80,width:250}}  color="success" onChange={handleInputChange} name="name" value={user.name}  label="type your Wishes here" id="outlined-basic"  variant="outlined"/>
        <TextField sx={{height:80,width:250}}  color="success" onChange={handleInputChange} name="username" value={user.username} label="Your Name" id="outlined-basic"  variant="outlined"/>
        <TextField sx={{height:130,width:250}} color="success" onChange={handleInputChange} name="item_description" value={user.item_description} 
        id="outlined-multiline-static" label="Quote about your ❤️" multiline rows={4} defaultValue="Default Value" placeholder="type about your Love"/>

            <div className="flex-btn">
            <button className="btn-input">Update card</button>
            <button className="btn-input1" onClick={()=>{
                props.setEditing(false)
            }}>Cancel</button>
            </div>
            
          </form>
    )
}

export default EditUserForm;
