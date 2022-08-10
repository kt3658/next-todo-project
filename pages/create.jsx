import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../components/atoms";
import { db } from "../lib/firebase";
import { NewTodo } from "../components/NewTodo";
// 修正済み（22.7.24）
const Create = () => {

  const [todoTitle, setTodoTitle] = useState("");
  const [newDate, setNewDate] = useState("");
  const [recoilTodos, setRecoilTodos] = useRecoilState(todoState)
  // input入力時にstateが更新される処理
  const handleAddFormChanges = (e) => {
    setTodoTitle(e.target.value);
  };

  const handleDateChanges = (e) => {
    setNewDate(e.target.value);
  };

  const handleAddTodo = (todoTitle) => {
    console.log("todoTitle = ", todoTitle);
    if (todoTitle === "") return;
    // 新規のtodoはRecoilにセットしました
    setRecoilTodos([
      ...recoilTodos,
      {
        id: Number(recoilTodos.length + 1),
        title: todoTitle,
        date: newDate,
        status: "notStarted",
      },
    ]);

    db.collection("todos").add({
      id: Number(recoilTodos.length + 1),
      title: todoTitle,
      date: newDate,
      status: "notStarted",
    });

    setTodoTitle("");
    setNewDate("");
  };
  return (
    <>
      <NewTodo 
      todoTitle={todoTitle}
      handleAddFormChanges={handleAddFormChanges}
      handleDateChanges={handleDateChanges}
      handleAddTodo={handleAddTodo}
      recoilTodos={recoilTodos}
      />
    </>
  )
}
export default Create;