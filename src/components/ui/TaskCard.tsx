"use client";
import React, { useState } from "react";
import AddTaskButton from "./AddTaskButton";
import ModalConfirmDelete from "./ModalConfirmDelete";
import ModalEditTask from "./ModalEditTask";
import StatusTaskLabel from "./StatusTaskLabel";
import { Todo } from "@/redux/types/type";

interface TaskCardProps {
  todo:Todo
}

const TaskCard: React.FC<TaskCardProps> = ({todo}) => {
  //state to controle showing of Delete modal
  const [showModalDelete, setShowModalDelete] = useState(false);
  const handleClick: React.MouseEventHandler<SVGSVGElement> = () => {
    // Your click handling setShowModalDelete as true
    setShowModalDelete(true);
  };
  //state to controle showing of edit modal
  const [showModalEdit, setShowModalEdit] = useState(false);
  const handleEdit: React.MouseEventHandler<SVGSVGElement> = (event) => {
    // Your click handling setShowModalEdit as true
    setShowModalEdit(true);
  };
  // Extract day, month, and year
  const endDate = new Date(todo.endDate);
  const day = endDate.getDate().toString().padStart(2, '0');
  const month = (endDate.getMonth() + 1).toString().padStart(2, '0');
  const year = endDate.getFullYear();

  // Create the formatted date string
  const formattedEndDate = `${day}-${month}-${year}`;
  // Extract day, month, and year
  const startDate = new Date(todo.startDate);
  const startday = startDate.getDate().toString().padStart(2, '0');
  const startmonth = (startDate.getMonth() + 1).toString().padStart(2, '0');
  const startyear = startDate.getFullYear();

  // Create the formatted date string
  const formattedStartDate = `${startday}-${startmonth}-${startyear}`;
  return (
    <div className="w-full flex items-center justify-between rounded-full border border-solid border-A3A3B9 py-2 px-2">
      <div className="flex items-center">
        <div className="w-4 h-4 flex-shrink-0 rounded-full border-4 border-solid border-5B6097"></div>
        <h5 className="text-black font-inter text-sm font-normal ml-1">
          {" "}
          {todo.title}
        </h5>
      </div>
      <h5 className="text-black font-inter text-sm font-normal">
        {" "}
       {formattedStartDate}
      </h5>
      <h5 className="text-black font-inter text-sm font-normal">
        {" "}
       {formattedEndDate}
      </h5>
      <StatusTaskLabel variant={todo?.status as "active" | "pending" | "closed"} children={todo?.status as "active" | "pending" | "closed"}/>
      <div className="flex items-center justify-center gap-2">
        <svg
          className="cursor-pointer mt-1"
          onClick={handleEdit}
          width="1.5em"
          height="1.5em"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.9548 5.91575C22.147 6.20687 22.115 6.60248 21.8587 6.85876L12.6663 16.0511C12.5721 16.1454 12.4544 16.2128 12.3255 16.2465L8.49709 17.2465C8.37223 17.2791 8.24352 17.2784 8.12259 17.2476C7.99402 17.2149 7.87425 17.1482 7.77723 17.0511C7.58896 16.8629 7.51462 16.5889 7.58191 16.3313L8.58191 12.5028C8.61138 12.39 8.66667 12.2786 8.74316 12.1912L17.9696 2.96967C18.0504 2.88891 18.1477 2.82846 18.2535 2.79163C18.332 2.76432 18.4152 2.75 18.4999 2.75C18.6989 2.75 18.8896 2.82902 19.0303 2.96967L21.8587 5.7981C21.8953 5.83471 21.9273 5.87416 21.9548 5.91575ZM20.2677 6.32843L18.4999 4.56066L9.98178 13.0788L9.35679 15.4716L11.7496 14.8466L20.2677 6.32843Z"
            fill="#FDBF46"
          />
          <path
            d="M20.1413 17.6603C20.4147 15.3227 20.5017 12.9688 20.4023 10.6208C20.3975 10.5084 20.4398 10.399 20.5194 10.3194L21.5027 9.33609C21.6236 9.21519 21.8302 9.29194 21.8415 9.46254C22.0264 12.2522 21.9563 15.0545 21.6311 17.8346C21.3946 19.8571 19.7703 21.4421 17.7582 21.667C14.2916 22.0544 10.7083 22.0544 7.24171 21.667C5.22965 21.4421 3.60532 19.8571 3.36876 17.8346C2.95423 14.2903 2.95423 10.7097 3.36876 7.16543C3.60532 5.1429 5.22965 3.55789 7.24171 3.33301C9.87146 3.0391 12.5684 2.96815 15.2306 3.12016C15.4022 3.12996 15.4804 3.33757 15.3589 3.45909L14.3663 4.45165C14.2876 4.53034 14.1797 4.57261 14.0685 4.56885C11.842 4.49376 9.60049 4.57872 7.40832 4.82373C6.07821 4.97239 5.01272 6.022 4.85861 7.33968C4.45761 10.7682 4.45761 14.2318 4.85861 17.6603C5.01272 18.978 6.07821 20.0276 7.40832 20.1763C10.7642 20.5513 14.2357 20.5513 17.5916 20.1763C18.9217 20.0276 19.9872 18.978 20.1413 17.6603Z"
            fill="#FDBF46"
          />
        </svg>
        <svg
          className="cursor-pointer"
          onClick={handleClick}
          width="1.5em"
          height="1.5em"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 2.75C10.0858 2.75 9.75 3.08579 9.75 3.5V4.25H5.5C5.08579 4.25 4.75 4.58579 4.75 5C4.75 5.41421 5.08579 5.75 5.5 5.75H19.5C19.9142 5.75 20.25 5.41421 20.25 5C20.25 4.58579 19.9142 4.25 19.5 4.25H15.25V3.5C15.25 3.08579 14.9142 2.75 14.5 2.75H10.5Z"
            fill="#F06A6D"
          />
          <path
            d="M10.5 11.15C10.9142 11.15 11.25 11.4858 11.25 11.9L11.25 18.9C11.25 19.3142 10.9142 19.65 10.5 19.65C10.0858 19.65 9.75 19.3142 9.75 18.9L9.75 11.9C9.75 11.4858 10.0858 11.15 10.5 11.15Z"
            fill="#F06A6D"
          />
          <path
            d="M15.25 11.9C15.25 11.4858 14.9142 11.15 14.5 11.15C14.0858 11.15 13.75 11.4858 13.75 11.9V18.9C13.75 19.3142 14.0858 19.65 14.5 19.65C14.9142 19.65 15.25 19.3142 15.25 18.9V11.9Z"
            fill="#F06A6D"
          />
          <path
            d="M6.49142 8.41718C6.53363 8.03735 6.85468 7.75 7.23684 7.75H17.7632C18.1453 7.75 18.4664 8.03735 18.5086 8.41718L18.7087 10.2185C19.0715 13.4838 19.0715 16.7793 18.7087 20.0446L18.689 20.222C18.545 21.5181 17.5404 22.5517 16.2489 22.7325C13.7618 23.0807 11.2382 23.0807 8.75108 22.7325C7.45954 22.5517 6.455 21.5181 6.31098 20.222L6.29128 20.0446C5.92846 16.7793 5.92846 13.4838 6.29128 10.2185L6.49142 8.41718ZM7.90812 9.25L7.7821 10.3842C7.43152 13.5394 7.43152 16.7238 7.7821 19.879L7.8018 20.0563C7.87011 20.671 8.34652 21.1612 8.95905 21.247C11.3082 21.5758 13.6918 21.5758 16.0409 21.247C16.6535 21.1612 17.1299 20.671 17.1982 20.0563L17.2179 19.879C17.5685 16.7238 17.5685 13.5394 17.2179 10.3842L17.0919 9.25H7.90812Z"
            fill="#F06A6D"
          />
        </svg>
      </div>
      <ModalConfirmDelete
      todo={todo}
        showModalDelete={showModalDelete}
        setShowModalDelete={setShowModalDelete}
      />
      <ModalEditTask
      todo={todo}
        showModalEdit={showModalEdit}
        setShowModalEdit={setShowModalEdit}
      />
    </div>
  );
};

export default TaskCard;
