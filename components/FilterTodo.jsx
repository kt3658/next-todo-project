import React from "react";

export const FilterTodo = (props) => {
  const { inputId, setInputId, filterTodoById, filterTodoByDate, setFilter, recoilTodos, filter } = props;

  return (
    <div className="text-center mt-10">
      <input
        className="px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        type="text"
        label="フィルタid"
        placeholder="数値,文字列を入力 空文字で解除"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
      />
      <button 
      className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-purple-600 rounded-md hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-80"
      onClick={() => filterTodoById(inputId)}>
        idでフィルタ
      </button>

      <select 
        className = "mt-2 px-4 py-2 ml-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        onChange={(e) => filterTodoByDate(e.target.value)}>
        <option hidden>選択してください </option>
        <option value={"all"}>解除</option>
        {recoilTodos.map(
          (todo, index) =>
            todo.date && (
              <option value={todo.date} key={index}>
                {todo.date}
              </option>
            )
        )}
      </select>

      <select
        className="mt-2 px-4 py-2 ml-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}>
        <option value="all">all</option>
        <option value="notStarted">notStarted</option>
        <option value="inProgress">inProgress</option>
        <option value="done">done</option>
      </select>
    </div>
  );
};