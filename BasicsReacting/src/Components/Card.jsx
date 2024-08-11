import React from 'react'

const Card = () => {

  return (
    <div className="h-screen w-full bg-zinc-400">
      <div className="w-[200px] h-[420px] top-1/2 left-1/2 relative bg-zinc-200 translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-md">
        <img
          className="w-full  object-cover  "
          src="https://images.unsplash.com/photo-1543512214-318c7553f230?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxhbWF6b258ZW58MHx8MHx8fDA%3D"
          alt=""
        />
        <h2 className="p-2 uppercase font-semibold">Amazone Alexa</h2>
        <p className="p-2  text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
          repellendus!
        </p>
      </div>
    </div>
  );
};

export default Card