import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us test case", () => {
  test("Should load the component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact document", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});

// test("Should load button inside Contact document", () => {
//   render(<Contact />);
//   const button = screen.getByText("Random");

//   expect(button).toBeInTheDocument();
// });

test("Should load button inside Contact document", () => {
  render(<Contact />);
  const button = screen.getByPlaceholderText("name");

  expect(button).toBeInTheDocument();
});
