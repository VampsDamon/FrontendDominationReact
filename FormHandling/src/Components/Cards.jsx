import React from 'react'
import Card from './Card'


const Cards = ({users,removeUser}) => {
   
    if (users.length==0) return (
      <div className="max-h-[70%] h-[70%] max-w-[80%] w-[900px] p-4 bg-zinc-200 flex justify-center text-center flex-col items-center gap-4 flex-wrap overflow-scroll rounded-lg shadow-2xl">
        <span className='text-red-600 font-bold text-lg'>No Profile !</span>
        ADD NEW PROFILE
      </div>
    );

    const removeUserID=(id)=>{
        removeUser(id)
    }
  return (
    <div className="max-h-[70%] h-[70%] max-w-[80%] w-[900px] p-4 bg-zinc-200 flex justify-center items-center gap-10 flex-wrap overflow-scroll rounded-lg shadow-2xl">
      {users.map((user, index) => (
        <Card key={index} userData={user} id={index} removeUserID={removeUser} />
      ))}
    </div>
  );
  
}

export default Cards