import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";
import { Provider } from "react-redux";
import store from "@/redux/store/store";

describe("Home Component", () => {
  it("renders Navbar and CardList components", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Enssure that Navbar component renders a title with text "ToDo List"
    const navbarElement = screen.getByText("ToDo List");
    //Enssuring that CardList component has a unique class "card-list"
    const cardListElement = screen.getByTestId("card-list");

    expect(navbarElement).toBeInTheDocument();
    expect(cardListElement).toBeInTheDocument();
  });
});
