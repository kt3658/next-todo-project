import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { todoState } from "../components/atoms";
import { db } from "../lib/firebase";
import  {CreatedTodo} from "../components/CreatedTodo";
import { FilterTodo } from "../components/FilterTodo";
import { AddTodo } from "../components/AddTodo";

const App = () => {
  
  // フィルターのstateを定義
  const [filter, setFilter] = useState("all");
  // 絞り込まれたtodoリストのstateを定義
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [inputId, setInputId] = useState(0);
  const [recoilTodos, setRecoilTodos] = useRecoilState(todoState);

  useEffect(() => {
    const unSub = db.collection("todos").onSnapshot((snapshot) => {
      setRecoilTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          status: doc.data().status,
          date: doc.data().date,
        }))
      );
    });
    return () => unSub();
  }, []);

  // 対象のtodoをリストから削除
  // 修正済み（22.7.24）
  const handleDeleteTodo = (targetTodo) => {
    const filteredtodos = recoilTodos.filter((todo) => todo !== targetTodo)
    setRecoilTodos(filteredtodos);
    setFilteredTodos(filteredtodos);

    db.collection("todos").doc(targetTodo.id).delete();
  };

  // 対象のtodoのステータスを更新した、新しいTodoリストの配列を作成
  // 修正済み（22.7.24）
  const handleStatusChange = (targetTodo, e) => {
    const newArray = recoilTodos.map((todo) => {
      if (todo.id === targetTodo.id)  {
        db.collection("todos")
        .doc(todo.id)
        .set({status: e.target.value}, {merge: true});

        return { ...todo, status: e.target.value};
      } else {
        return todo;
      }
    });

    setRecoilTodos(newArray);
    setFilteredTodos(newArray)
  };

  const filterTodoByDate = (selectedDate) => {
    if (selectedDate === "all") {
      setFilteredTodos(recoilTodos);
    } else {
      let fTodos = [];
      recoilTodos.forEach((todo) => {
        if (todo.date === selectedDate) {
          fTodos.push(todo);
        }
      });
      setFilteredTodos(fTodos);
    }
  };
  
  // 修正済み（22.7.24）
  useEffect(() => {
    const filteringTodos = () => {
      switch (filter) {
        case "notStarted":
          setFilteredTodos(
            recoilTodos.filter((todo) => todo.status === "notStarted")
          );
          break;

        case "inProgress":
          setFilteredTodos(
            recoilTodos.filter((todo) => todo.status === "inProgress")
          );
          break;
        case "done":
          setFilteredTodos(
            recoilTodos.filter((todo) => todo.status === "done"));
          break;

        default:
          setFilteredTodos(recoilTodos);
      }
    };
    filteringTodos();
  }, [filter, recoilTodos]);

  const filterTodoById = (id) => {
    if (id === "") {
      setFilteredTodos(recoilTodos);
    } else {
      let fTodos = [];
      recoilTodos.forEach((todo) => {
        const comparableId = todo.id;
          if (comparableId.includes(String(id))) {
          fTodos.push(todo);
        }
      });
      setFilteredTodos(fTodos);
    }
  };


return (
    <>
      <AddTodo />

      <FilterTodo
        inputId={inputId}
        setInputId={setInputId}
        filterTodoById={filterTodoById}
        filterTodoByDate={filterTodoByDate}
        setFilter={setFilter}
        recoilTodos={recoilTodos}
        filter={filter}
      />   
    
      <CreatedTodo 
      handleStatusChange={handleStatusChange} 
      handleDeleteTodo={handleDeleteTodo}
      filteredTodos={filteredTodos}
      />
    </>
  );
}

export default App;
