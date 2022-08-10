import React from "react";
import Link from "next/link";

export const EditTodo = (props) => {
  const { handleEditFormChange, newTitle, handleEditTodo} = props;
  
  return (
    <>
    <div>
    <p className="text-4xl bg-pink-300 text-center p-6 font-sans">Todoの編集</p>
    </div>
      <div className="md:flex  mt-10 md:justify-center text-center">
        <input
          className="px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          type="text"
          label="新しいタイトル"
          placeholder="Todoを編集"
          value={newTitle}
          onChange={handleEditFormChange}
          
        />
        <Link href={{ pathname: "/", query: { title: newTitle } }}>
          <button 
            className="mt-2 px-4 py-2 ml-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80"
            onClick={handleEditTodo}>
              編集を保存
          </button>
        </Link>
        <Link href="/">
          <button 
            className="mt-2 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80">
              キャンセル
          </button>
        </Link>
      </div>
      </>
  );

};