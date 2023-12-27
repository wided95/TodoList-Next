import React from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
} from "tw-elements-react";
interface ModalEditProps {
  showModalEdit: boolean;
  setShowModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalEditTask: React.FC<ModalEditProps> = ({ showModalEdit, setShowModalEdit }) => {
  return (
    <>
      <TEModal show={showModalEdit} setShow={setShowModalEdit} staticBackdrop>
        <TEModalDialog>
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                Update Task
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModalEdit(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
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
                  className="border outline-none w-full border-solid border-A3A3B9 rounded-md px-4 py-1"
                  placeholder="Enter Task Title..."
                />
                <input
                  className="border outline-none w-full border-solid border-A3A3B9 rounded-md px-4 py-1"
                  placeholder="Enter Task Description..."
                />
                <select className="border outline-none w-full border-solid border-A3A3B9 rounded-md px-3 py-1 text-A3A3B9">
                  <option value="">Please choose an status</option>
                  <option value="pending">Pending</option>
                  <option value="active">Active</option>
                  <option value="closed">Closed</option>
                </select>
                <input
                  type="date"
                  className="border outline-none w-full border-solid border-A3A3B9 rounded-md px-4 py-1 text-A3A3B9"
                  placeholder="Start Date"
                />
                <input
                  type="date"
                  className="border outline-none w-full border-solid border-A3A3B9 rounded-md px-4 py-1 text-A3A3B9"
                  placeholder="End Date"
                />
                <TERipple rippleColor="light" className="w-full">
                  <button
                    onClick={() => setShowModalEdit(false)}
                    className=" mt-5 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                    type="button"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    Edit TASK
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

export default ModalEditTask;
