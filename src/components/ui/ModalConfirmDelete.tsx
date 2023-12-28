import { deleteTodo } from "@/redux/actions/TodoAction";
import { Todo } from "@/redux/types/type";
import React from "react";
import { useDispatch } from "react-redux";
import {
  TEModal,
  TEModalBody,
  TEModalContent,
  TEModalDialog,
  TEModalHeader,
} from "tw-elements-react";

interface ModalConfirmDeleteProps {
  showModalDelete: boolean;
  setShowModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
  todo: Todo;
}

const ModalConfirmDelete: React.FC<ModalConfirmDeleteProps> = ({
  showModalDelete,
  setShowModalDelete,
  todo,
}) => {
  //using for dispatch action from redux action
  const dispatch = useDispatch();
  return (
    <TEModal show={showModalDelete} setShow={setShowModalDelete} staticBackdrop>
      <TEModalDialog>
        <TEModalContent>
          <TEModalHeader>
            {/* <!--Modal title--> */}
            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
              Delete Task
            </h5>
            {/* <!--Close button--> */}
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={() => setShowModalDelete(false)}
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
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this task?
              </h3>
              <button
                type="button"
                className="text-white bg-custom5 hover:bg-custom5 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                onClick={() => dispatch(deleteTodo(todo?.id))}
              >
                Yes, I'm sure
              </button>
              <button
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={() => {
                  console.log("Closing modal");
                  setShowModalDelete(false);
                }}
              >
                No, cancel
              </button>
            </div>
          </TEModalBody>
        </TEModalContent>
      </TEModalDialog>
    </TEModal>
  );
};

export default ModalConfirmDelete;
