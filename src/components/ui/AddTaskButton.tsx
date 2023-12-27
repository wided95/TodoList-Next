"use client";
import React, { ButtonHTMLAttributes, useState } from "react";
import ModalAdd from "./ModalAdd";

export interface AddTaskButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const AddTaskButton: React.FC<AddTaskButtonProps> = ({
  className,
  children,
  ...props
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        {...props}
        className="flex items-center font-inter text-l font-bold  rounded-full px-5 py-1 bg-custom2 text-white"
        title="press on me to show modal"
        onClick={() => setShowModal(true)}
      >
        {children}
      </button>
      {showModal && (
        <ModalAdd showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default AddTaskButton;
