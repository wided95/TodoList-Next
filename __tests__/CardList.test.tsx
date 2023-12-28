import { render, screen } from "@testing-library/react";
import CardList from "../src/components/ui/CardList";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

// Mock the Redux store
const mockStore = configureStore([]);
const store = mockStore([]);

describe("CardList Component", () => {
  it("renders CardList component with Add Task button", () => {
    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );

    // Check if the CardList component is rendered
    const cardListElement = screen.getByTestId("card-list");
    expect(cardListElement).toBeInTheDocument();

    // Check if the Add Task button is rendered
    const addTaskButton = screen.getByText("Add Task");
    expect(addTaskButton).toBeInTheDocument();
  });
});
