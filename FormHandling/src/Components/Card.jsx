import React from 'react'

const Card = ({ userData, removeUserID,id }) => {
  const { name, email, profile } = { ...userData };
  return (
    <div className="w-[200px] bg-zinc-300 h-[300px] p-2 flex flex-col gap-2 justify-center items-center rounded-lg shadow-lg">
      <div className="img w-[100px] h-[100px] bg-blue-600 rounded-full overflow-hidden">
        <img src={profile} className="w-full" alt="" />
      </div>
      <p className="email opacity-40 text-white px-4 rounded-lg    bg-zinc-500 shadow-lg">
        {email}
      </p>
      <p className="Name  font-bold uppercase ">{name}</p>
      <p className="text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        asperiores!
      </p>
      <button className="px-4 py-2 text-white bg-red-500 rounded-lg uppercase" onClick={()=>{
        removeUserID(id)
      }}>
        REMOVE
      </button>
    </div>
  );
};

export default Card