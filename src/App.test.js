import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  expect(screen.getByText("i am here")).toBeInTheDocument();
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});
