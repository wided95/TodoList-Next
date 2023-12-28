"use Client"
import { addTodos } from "@/redux/actions/TodoAction";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
} from "tw-elements-react";
interface ModalAddProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalAdd: React.FC<ModalAddProps> = ({ showModal, setShowModal }) => {
  //using for dispatch action from redux action
  const dispatch=useDispatch();
  //task state using to add task 
  const[task,setTask]=useState({
    id:Math.random(),
    title:"",
    description:"",
    status:"",
    startDate:"",
    endDate:"",

  })
  return (
    <>
      <TEModal show={showModal} setShow={setShowModal} staticBackdrop data-testid="modal-add">
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                Add Task
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody>
              {/* <!--Submit button--> */}
              <div className="mb-12 pb-1 pt-1 text-center flex items-center justify-center flex-col gap-5">
                <input
                type="text"
                  className="border outline-none w-full border-solid border-A3A3B9 rounded-md px-4 py-1"
                  placeholder="Enter Task Title..."
                  onChange={(e)=>{
                    setTask({...task,title:e.target.value})
                  }}
                />
                <input
                type="text"
                  className="border outline-none w-full border-solid border-A3A3B9 rounded-md px-4 py-1"
                  placeholder="Enter Task Description..."
                  onChange={(e)=>{
                    setTask({...task,description:e.target.value})
                  }}
                />
                <select data-testid="status-list" className="border outline-none w-full border-solid border-A3A3B9 rounded-md px-3 py-1 text-A3A3B9" onChange={(e)=>{
                    setTask({...task,status:e.target.value})
                  }}>
                  <option value="">Please choose an status</option>
                  <option value="pending">Pending</option>
                  <option value="active">Active</option>
                  <option value="closed">Closed</option>
                </select>
                <input
                  type="date"
                  className="border outline-none w-full border-solid border-A3A3B9 rounded-md px-4 py-1 text-A3A3B9"
                  placeholder="Start Date"
                  onChange={(e)=>{
                    setTask({...task,startDate:e.target.value})
                  }}
                />
                <input
                  type="date"
                  className="border outline-none w-full border-solid border-A3A3B9 rounded-md px-4 py-1 text-A3A3B9"
                  placeholder="End Date"
                  onChange={(e)=>{
                    setTask({...task,endDate:e.target.value})
                  }}
                />
                <TERipple rippleColor="light" className="w-full">
                  <button
                    onClick={() => {dispatch(addTodos(task)),setShowModal(false)}}
                    className=" mt-5 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                    type="button"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    ADD TASK
                  </button>
                </TERipple>
              </div>
            </TEModalBody>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </>
  );
};

export default ModalAdd;
