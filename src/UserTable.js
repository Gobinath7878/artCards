
    const UserTable = (props)=>(
    
<div className='container'>  
    
        {props.users.length>0?(
            props.users.map((user)=>(
                
                <div className='card card-yellow'>
            <div key={user.id}>
            
             <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png' alt={user.img} className='logo'></img>
            
             <h3 className='title'>{user.name}</h3>
             <img src='chocolate-cake-with-chocolate-sprinkles-removebg-preview.png' alt='' className='product'></img>
             <div className='price'>
             <h4 className="wish">{user.username}</h4>
             </div>
             <h5 className="description">{user.item_description}</h5>
             
            <button onClick={()=>{
            props.editRow(user)
            }} className="button muted-button">Edit</button>
            <button onClick={()=>props.deleteUser(user.id)} className="button muted-button del-btn">Delete</button>
            
            </div>
            </div>
    ))
                ):(
                    <div className="empty">
                        <h1>Fill the Cards with Hearts<sub>Empty is no more....</sub></h1>
                    </div>
                )
            }
          


    
</div>
    );
    
    export default UserTable;