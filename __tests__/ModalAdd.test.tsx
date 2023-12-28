import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModalAdd from "../src/components/ui/ModalAdd";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { addTodos } from "../src/redux/actions/TodoAction";

const mockStore = configureStore([]);

describe("ModalAdd component", () => {
  it("should dispatch addTodos action when ADD TASK button is clicked", async () => {
    const store = mockStore({});
    const dispatchSpy = jest.spyOn(store, "dispatch");

    render(
      <Provider store={store}>
        <ModalAdd showModal={true} setShowModal={() => {}} />
      </Provider>
    );

    // Wait for the modal to be fully rendered
    await waitFor(() => {
      // Simulate user entering values into input fields
      fireEvent.change(screen.getByPlaceholderText("Enter Task Title..."), {
        target: { value: "Test Task" },
      });

      fireEvent.change(
        screen.getByPlaceholderText("Enter Task Description..."),
        {
          target: { value: "Test Description" },
        }
      );

      fireEvent.change(screen.getByPlaceholderText("Start Date"), {
        target: { value: "2023-01-01" },
      });

      fireEvent.change(screen.getByPlaceholderText("End Date"), {
        target: { value: "2023-01-31" },
      });

      fireEvent.change(screen.getByTestId("status-list"), {
        target: { value: "pending" },
      });

      // Click the ADD TASK button
      fireEvent.click(screen.getByText("ADD TASK"));
    });

    // Check if the addTodos action is dispatched with the correct payload
    expect(dispatchSpy).toHaveBeenCalledWith(
      addTodos(
        expect.objectContaining({
          title: "Test Task",
          description: "Test Description",
          startDate: "2023-01-01",
          endDate: "2023-01-31",
          status: "pending",
        })
      )
    );
  });
});
