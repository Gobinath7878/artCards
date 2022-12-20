import { useState } from "react";
import AddUserForm from "./Update";
import UserTable from "./UserTable";
import EditUserForm from "./EditUserForm";
import './App.css'


function App() {

const usersData = [
    {id:1,
    name:'Happy Birthday My Soul!',
    username:'gobu chego',
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png',
    product_img:'chocolate-cake-with-chocolate-sprinkles-removebg-preview.png',
    item_description:'The most beautiful thing in the world is, of course, the world itself. You are my world!',
  },
    
];

const addUser = (user)=>{
    user.id = users.length + 1;
    setUsers([...users,user])
}
const deleteUser = (id)=>{
    setUsers(users.filter((user)=>user.id!==id))
    setEditing(false);
}

    const [users,setUsers] = useState(usersData);
    const [editing,setEditing] = useState(false)
    

    const initialFormState = {id:null,name:'',username:'',item_description:''}

    const [currentUser,setCurrentUser] = useState(initialFormState);

    const editRow = (user)=>{
        setEditing(true);
        setCurrentUser({id:user.id,name:user.name,username:user.username,item_description:user.item_description});
    }

    const updateUser = (id,updatedUser)=>{
        setEditing(false);
        setUsers(users.map((user)=>(user.id===id?updatedUser:user)))
    }

  return (
    <>
      <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
      <div className="input-card">
            {editing?(<div>
                
                <EditUserForm 
                    setEditing={setEditing}
                    currentUser={currentUser}
                    updateUser={updateUser}
                />
            </div>):(<div>
                
          <AddUserForm addUser={addUser} />
          </div>
            ) 
        }

      </div>
      
    </>
  );
}

export default App;
