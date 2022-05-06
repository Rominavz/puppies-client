import { render, screen } from "@testing-library/react";
import store from "../store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Form from "../components/Form";

describe("Form test", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      </Provider>
    );
  });
  it("The form should have an input for the dog's name", () => {
    const element = screen.getByLabelText("Name");
    expect(element.type).toBe("text");
  });
  it("The form should have two input for the dog's height", () => {
    const element = screen.getByLabelText("Height");
    expect(element.type).toBe("number");
  });
  it("The form should have two input for the dog's weight", () => {
    const element = screen.getByLabelText("Weight");
    expect(element.type).toBe("number");
  });
  it("The form should have an input for the dog's life span", () => {
    const element = screen.getByLabelText("Life span");
    expect(element.type).toBe("number");
  });
  it("The form should have an input for the dog's image", () => {
    const element = screen.getByLabelText("Image");
    expect(element.type).toBe("url");
  });
});