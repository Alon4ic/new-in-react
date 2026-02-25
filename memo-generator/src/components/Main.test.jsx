import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Main from "./Main";

describe("Main", () => {
  test("display the app name", () => {
    render(<Main />);

    expect(screen.getByText("One does not simply")).toBeInTheDocument();
    expect(screen.getByText("Walk into Mordor")).toBeInTheDocument();
  });
  test("display the troll face", () => {
    render(<Main />);

    expect(screen.getByRole("img")).toHaveAttribute("src", "https://i.imgflip.com/1bij.jpg");
  
  });
  test("display from labels, inputs and button", () => {
    render(<Main />);

    expect(screen.getByText("Top Text")).toBeInTheDocument();
    expect(screen.getByText("Bottom Text")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("One does not simply")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Walk into Mordor")).toBeInTheDocument();
    const button = screen.getByRole("button", {
      name: "Get a new meme image 🖼",
    });
    expect(button).toBeInTheDocument();
  })
});
