import React from "react";
import Link from "next/link";

export const CreatedTodo = (props) => {
  const { handleStatusChange,handleDeleteTodo,filteredTodos } = props;

  return (
    <div className="text-center mt-8">
      { !filteredTodos.length ?
          <p>
            todoが登録されていません
          </p>     :
          <ul>
            { filteredTodos?.map((todo) => (
              <li className="bg-pink-100 shadow-xl h-24 md:h-16 pt-3 flex justify-center xl:w-7/12 lg:w-10/12 md:w-11/12 m-auto mt-8"key={todo.id}>
                <div>
                <span className="text-base">ID:{todo.id} </span>
                <Link href = {{ pathname: "/detail", 
                query: { title: todo.title, id: todo.id, date: todo.date, status: todo.status }}}>
                <span className="underline text-lg">{todo.title}</span>
                </Link>
                <span className="ml-2">期限:{todo.date}</span>
                <select
                  className="ml-2 md:px-4 md:py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  value={todo.status}
                  onChange={(e) => handleStatusChange(todo, e)}
                >
                  <option value="notStarted">notStarted</option>
                  <option value="inProgress">inProgress</option>
                  <option value="done">done</option>
                </select>
                <Link href={{ pathname: "/edit", query: { title: todo.title, id: todo.id } }}>
                  <button className="mt-2 md:mt-0 ml-2 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-80">編集</button>
                </Link>
                <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80" onClick={() => handleDeleteTodo(todo)}>削除</button>
                </div>
              </li>
              ))
            }
          </ul>
        }
      </div>
    );
  };

