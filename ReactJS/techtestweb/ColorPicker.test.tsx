import React from "react";
//import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ColorPicker from "./src/components/ColorPicker";

describe("ColorPicker Component", () => {
  test("renders ColorPicker component with default selected color", () => {
    render(
      <ColorPicker
        predefinedColors={
          ("#DF826C", "#637E76", "#DC8686", "#6DB9EF", "#B6BBC4")
        }
      />
    );

    const selectedColorElement = screen.getByText("Selected Color:");
    const defaultColorSquare = screen.getByRole("button", { name: /#FF5733/i });

    expect(selectedColorElement).toBeInTheDocument();
    expect(defaultColorSquare).toHaveStyle({ backgroundColor: "#FF5733" });
  });

  test("changes the selected color on click", () => {
    render(
      <ColorPicker predefinedColors={["#FF5733", "#33FF57", "#5733FF"]} />
    );

    const blueColorSquare = screen.getByRole("button", { name: /#5733FF/i });

    fireEvent.click(blueColorSquare);

    const selectedColorElement = screen.getByText(/#5733FF/i);
    const selectedColorSquare = screen.getByRole("button", {
      name: /#5733FF/i,
    });

    expect(selectedColorElement).toBeInTheDocument();
    expect(selectedColorSquare).toHaveStyle({ backgroundColor: "#5733FF" });
  });
});
