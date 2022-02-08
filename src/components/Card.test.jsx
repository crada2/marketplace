/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "./Card";

const Wrapper = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;

describe("Card", () => {
  it("Must display a title", () => {
    const props = {
      description: "description",
      image: "",
      price: 20,
      title: "title",
      username: "Sol",
    };

    const screen = render(<Card {...props} />, { wrapper: Wrapper });

    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByText(`Buy for: ${props.price}€`)).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.username)).toBeInTheDocument();
    expect(screen.getByTestId("image")).toBeInTheDocument();
  });
});
