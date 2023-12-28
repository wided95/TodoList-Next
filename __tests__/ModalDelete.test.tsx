import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModalConfirmDelete from "../src/components/ui/ModalConfirmDelete";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { deleteTodo } from "../src/redux/actions/TodoAction";

const mockStore = configureStore([]);

describe("ModalConfirmDelete component", () => {
  it("should dispatch deleteTodo action when 'Yes, I'm sure' button is clicked", () => {
    const store = mockStore({});
    const dispatchSpy = jest.spyOn(store, "dispatch");

    render(
      <Provider store={store}>
        <ModalConfirmDelete
          showModalDelete={true}
          setShowModalDelete={() => {}}
          todo={{
            id: 1,
            title: "Test Todo",
            description: "",
            status: "",
            startDate: "",
            endDate: "",
          }}
        />
      </Provider>
    );

    // Click the 'Yes, I'm sure' button
    fireEvent.click(screen.getByText("Yes, I'm sure"));

    // Check if the deleteTodo action is dispatched with the correct payload
    expect(dispatchSpy).toHaveBeenCalledWith(deleteTodo(1));
  });

  
  
});
