import Cards from './Components/Cards'
import Form from './Components/Form'
import { useState } from "react";

function App() {
   const [users, setUsers] = useState([
     {
       name: "Jhon Wick",
       email: "sid@gmail.com",
       profile:
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXG8IPXf0wG-FiXilXD6nyKj3JFqVXFU9zbg&s",
     },
   ]);

   const addUser=(data)=>{
     setUsers([...users,{name:data.name,email:data.email,profile:data.profile}])
   }

   const removeUser=(id)=>{
    setUsers(()=>users.filter((user,index)=>index!=id))
   }
  
  return (
    <>
      <div className='bg-zinc-400 w-full h-screen flex justify-center items-center p-4 flex-col '>
        <Cards users={users} removeUser={removeUser} />
        <Form addUserHandler={addUser} />
      </div>
    </>
  );
}

export default App
