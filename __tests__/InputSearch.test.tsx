import { render, screen, fireEvent } from "@testing-library/react";
import InputSearch from "../src/components/ui/InputSearch";

describe("InputSearch Component", () => {
  it("renders InputSearch component with placeholder", () => {
    // Mock function for onSearch
    const mockOnSearch = jest.fn();

    render(<InputSearch onSearch={mockOnSearch} />);

    // Check if the InputSearch component is rendered
    const inputElement = screen.getByPlaceholderText("Search task...");
    expect(inputElement).toBeInTheDocument();

    // Simulate user typing in the input field
    fireEvent.change(inputElement, { target: { value: "Test Task" } });

    // Check if the onSearch function is called with the correct value
    expect(mockOnSearch).toHaveBeenCalledWith("Test Task");
  });
});
