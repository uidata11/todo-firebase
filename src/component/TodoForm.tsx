import React, { useState } from "react";
import { TodoFormProps } from ".";
import { twMerge } from "tailwind-merge";

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={onSubmit} className={twMerge("mb-5 flex justify-between")}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할일을 추가하세요!"
        className={twMerge(
          "p-2.5 w-60 border-b-2 border-b-gray-400 outline-none text-lg"
        )}
      />
      <button
        type="submit"
        className={twMerge(
          "p-2 m-1 bg-indigo-600 text-amber-50 font-light rounded-xl hover:bg-indigo-500 hover:cursor-pointer active:opacity-80 transition "
        )}
      >
        추가하기
      </button>
    </form>
  );
};

export default TodoForm;
