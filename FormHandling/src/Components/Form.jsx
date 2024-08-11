import React from 'react'
import { useForm } from "react-hook-form";

const Form = ({addUserHandler}) => {
    const {register,handleSubmit,reset}=useForm();
    const submitHandler=(data)=>{
       addUserHandler(data);
       reset();
    }
  return (
    <div className="mt-10">
      <form
        className="flex flex-col sm:flex-row gap-2 justify-center items-center border-2 shadow-2xl  p-2 bg-gray-100 bg-opacity-40 rounded-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          type="text"
          className="px-2 py-1 outline-none rounded-xl"
          placeholder="name"
          {...register("name")}
        />
        <input
          type="text"
          className="px-2 py-1 outline-none rounded-xl"
          placeholder="email"
          {...register("email")}
        />
        <input
          type="text"
          className="px-2 py-1 outline-none rounded-xl"
          placeholder="profile picture"
          {...register("profile")}
        />
        <button className="px-4 py-2 text-white bg-blue-500 w-[100px] rounded-lg uppercase">
          ADD
        </button>
      </form>
    </div>
  );
}

export default Form