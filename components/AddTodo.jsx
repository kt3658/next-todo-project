import React from "react";
import Link from "next/link";

export const AddTodo = () => {

  return (
    <>
      <div>
        <p className='text-4xl bg-green-300 text-center p-6 font-sans'>Todo-List</p>
      </div>

      <div className="text-center text-xl mt-10 ">
        <Link href="/create"><button className="px-4 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" >Todoの追加</button></Link>
      </div>
    </>
  );
};