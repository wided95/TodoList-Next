import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ModalEditTask from "../src/components/ui/ModalEditTask";
import * as TodoActionModule from "../src/redux/actions/TodoAction";

const mockStore = configureStore([]);

describe("ModalEditTask component", () => {
  it("updates task when Edit TASK button is clicked", async () => {
    const initialState = {
      todos: {
        list: [
          {
            id: 1,
            title: "Todo 1",
            description: "Description 1",
            status: "pending",
            startDate: "2023-01-01",
            endDate: "2023-01-10",
          },
          {
            id: 2,
            title: "Todo 2",
            description: "Description 2",
            status: "active",
            startDate: "2023-02-01",
            endDate: "2023-02-10",
          },
        ],
      },
    };

    // Mock the entire TodoAction module
    jest.mock("../src/redux/actions/TodoAction", () => {
      const originalModule = jest.requireActual("../src/redux/actions/TodoAction");

      return {
        ...originalModule,
        updateTodo: jest.fn(),
      };
    });

    const store = mockStore(initialState);
    const dispatchSpy = jest.spyOn(store, "dispatch");

    render(
      <Provider store={store}>
        <ModalEditTask
          showModalEdit={true}
          setShowModalEdit={() => {}}
          todo={{
            id: 1,
            title: "Mock Todo",
            description: "Mock Todo Description",
            status: "pending",
            startDate: "2023-01-01",
            endDate: "2023-01-10",
          }}
        />
      </Provider>
    );

    // Assuming there's an "Edit TASK" button, find it and click
    const editButton = screen.getByText("Edit TASK");
    fireEvent.click(editButton);

    // Assuming the updateTodo action is called when the button is clicked
    expect(dispatchSpy).toHaveBeenCalledWith(
      TodoActionModule.updateTodo(expect.anything(), expect.anything())
    );
  });
});
