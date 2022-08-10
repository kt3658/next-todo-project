import React, { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { todoState } from "../components/atoms";
import { db } from "../lib/firebase";
import { EditTodo } from "../components/EditTodo"

// 修正済み（22.7.24）
function Edit () {

  const router = useRouter();
  // 編集したいtodoのidの状態を定義
  const [editId, setEditId] = useState(router.query.id);
  // 新しいタイトルのstateを定義
  const [newTitle, setNewTitle] = useState(router.query.title);

  const [recoilTodos, setRecoilTodos] = useRecoilState(todoState);

   // 編集用inputの入力値に応じてstateを更新
    const handleEditFormChange = (e) => {
    setNewTitle(e.target.value);
  };

  // 編集内容をtodoリストの配列に加える
  const handleEditTodo = () => {
    const newArray = recoilTodos.map((todo) =>{
      if (todo.id === editId) {
        db.collection("todos")
          .doc(todo.id)
          .set({ title: newTitle }, { merge: true });

        return { ...todo, title: newTitle };
      } else {
        return todo;
      }
    });

    setRecoilTodos(newArray);
    setNewTitle("");
    setEditId();
  };

  return (
    <EditTodo 
    handleEditFormChange={handleEditFormChange}
    handleEditTodo={handleEditTodo}
    newTitle={newTitle} 
    />
    
  )
}
export default Edit;