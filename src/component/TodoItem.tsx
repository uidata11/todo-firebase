import React from "react";
import { TodoItemProps } from ".";
import { twMerge } from "tailwind-merge";

const TodoItem: React.FC<TodoItemProps> = ({ id, text, onDelete, num }) => {
  return (
    <div
      className={twMerge(
        "mb-2.5 p-2.5 flex justify-between border-l-5 border-yellow-600"
      )}
    >
      <div>
        <div className={twMerge("ml-2.5 p-2 truncate")}>
          {num} . {text}
        </div>
      </div>
      <button
        className={twMerge(
          "pr-3 pl-3 text-gray-800 font-black rounded-xl  hover:text-red-500 hover:cursor-pointer active:text-red-800 transition "
        )}
        onClick={() => onDelete(id)}
        style={{ marginLeft: "10px" }}
      >
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
