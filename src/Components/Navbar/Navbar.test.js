import Navbar from "./navbar";
import { render, screen } from "@testing-library/react";

describe("Navbar test", () => {
  it("renders Home link", () => {
    render(<Navbar />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "href",
      "#home"
    );
    expect(screen.getByRole("link", { name: "Features" })).toBeInTheDocument(
      "href",
      "#features"
    );
    expect(screen.getByLabelText("search")).toBeInTheDocument();
    expect(screen.getByLabelText("cart")).toBeInTheDocument();
    // expect(screen.getByLabelText("user")).toBeInTheDocument();
    const userIcons = screen.getAllByLabelText("user");
    expect(userIcons.length).toBe(1);
  });
});
