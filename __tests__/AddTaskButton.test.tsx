import { render, screen, fireEvent } from "@testing-library/react";
import AddTaskButton from "../src/components/ui/AddTaskButton";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store'; 
const mockStore = configureStore();
const store = mockStore({/* Your initial Redux state here */});

test('clicking AddTaskButton shows the modal', () => {
  render(
    <Provider store={store}>
      <AddTaskButton>Add Task</AddTaskButton>
    </Provider>
  );

  const addButton = screen.getByRole("button", { name: /Add Task/i });

  fireEvent.click(addButton);

  const modalElement = screen.getByTestId("modal-add"); // Assuming you have a test id for your modal
  expect(modalElement).toBeInTheDocument();
});
