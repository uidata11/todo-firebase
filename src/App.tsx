import React, { useEffect, useState } from "react";
import TodoItem from "./component/TodoItem";
import TodoForm from "./component/TodoForm";
import { TodoProps } from "./component";
import { twMerge } from "tailwind-merge";

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const todoAdd = (text: string) => {
    const newTodo: TodoProps = {
      id: Date.now(),
      text,
    };
    setTodos((p) => [...p, newTodo]);
  };
  const todoDelete = (id: number) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setTodos((p) => p.filter((todo) => todo.id !== id));
    }
  };


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);



  return (
    <>
      {loading ? (
        <div
          className={twMerge(
            "flex w-full h-screen bg-amber-400 m-auto items-center text-4xl font-semibold "
          )}
        >
          Todo App으로 할일을
          <span
            className={twMerge(
              "items-center text-5xl font-semibold text-indigo-800 "
            )}
          >
            "쉽게"
          </span>{" "}
          관리하세요.
        </div>
      ) : (
        <div className={twMerge("bg-yellow-500")}>
          <div
            className={twMerge(
              "p-35 w-max h-screen mr-auto ml-auto bg-gray-100 rounded-2xl"
            )}
          >
            <h1
              className={twMerge(
                "pr-10 pl-10 text-6xl font-black text-gray-800  text-center mb-12"
              )}
            >
              Todo List
            </h1>

            <TodoForm onAddTodo={todoAdd} />
            <div>
              {todos.map((todo, index) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  onDelete={todoDelete}
                  num={index + 1}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
