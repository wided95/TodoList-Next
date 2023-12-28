"use client";
import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";
import { Todo } from "@/redux/types/type";
import InputSearch from "./InputSearch";
import AddTaskButton from "./AddTaskButton";

interface CardListProps extends React.HTMLProps<HTMLInputElement> {}

const CardList: React.FC<CardListProps> = (props) => {
  //list of todos from redux
  const todoList = useSelector((state: Todo[]) => state);
  //Search specifc todo
  const [searchTask, setSearchTask] = useState<string>("");
  //filtre liste todos in terme of searching title
  const filteredTodos = todoList.filter(
    (todo: Todo) =>
      todo.title && todo.title.toLowerCase().includes(searchTask.toLowerCase())
  );
  return (
    <>
      <div className="flex items-center justify-between w-3/6">
        <InputSearch onSearch={setSearchTask} />
        <AddTaskButton>Add Task</AddTaskButton>
      </div>
      <div
        data-testid="card-list"
        className="w-2/4 border-t flex items-center justify-center flex-col gap-5 border-solid border-gray-300 py-5"
      >
        <ul className="flex  items-center gap-20 text-black text-opacity-50 font-inter text-base font-normal">
          <li>Start Date</li>
          <li>End Date</li>
          <li className="ml-4">Status</li>
        </ul>
        <div className="flex w-full items-start justify-start flex-col gap-6">
          {filteredTodos.map((todo: Todo) => (
            <TaskCard key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardList;
