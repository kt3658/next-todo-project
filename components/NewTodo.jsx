import React from "react";
import Link from "next/link";

export const NewTodo = (props) => {
  const { todoTitle, handleAddFormChanges, handleDateChanges, handleAddTodo, recoilTodos } = props;
  return(
    <>
      <p className="text-4xl bg-blue-300 text-center p-6 font-sans">todoの追加</p>
      <div className="md:flex mt-10 md:justify-center text-center">
        <input
          type="text"
          label="タイトル"
          placeholder="Todoを入力"
          className="md:px-4 md:py-2 md:mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          value={todoTitle}
          onChange={handleAddFormChanges}
        />
        <label className="bg-white border md:px-4 md:py-2 md:mt-2 md:ml-2 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring ">
          <span className="limit-text">期限: </span>
          <input type="date" onChange={handleDateChanges} />
        </label>
        <Link href={{ pathname: "/", query: { title: recoilTodos  } }}>
          <button 
            className="mt-2 px-4 py-2 ml-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-pink-600 rounded-md hover:bg-pink-500 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-80" 
            onClick={() => handleAddTodo(todoTitle)}>保存
          </button>
        </Link>
        <Link href="/">
          <button 
            className=" mt-2 -4 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80">
              キャンセル
          </button>
        </Link>
      </div>
    </>
  );
};