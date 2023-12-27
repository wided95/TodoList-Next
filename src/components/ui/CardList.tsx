"use client";
import React from "react";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";
import { Todo } from "@/redux/types/type";

interface CardListProps {}

const CardList: React.FC<CardListProps> = (props) => {
  const todoList = useSelector(
    (state:Todo[] ) => state)
  
  return (
    <div className="w-2/4 border-t flex items-center justify-center flex-col gap-5 border-solid border-gray-300 py-5">
      <ul className="flex  items-center gap-20  text-black text-opacity-50 font-inter text-base font-normal">
        <li>Start Date</li>
        <li>End Date</li>
        <li className="ml-4">Status</li>
      </ul>
      <div className="flex w-full items-start justify-start flex-col gap-6">
        {todoList.map((todo: Todo) => (
          <TaskCard todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
