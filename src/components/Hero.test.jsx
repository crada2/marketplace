/* eslint-disable testing-library/render-result-naming-convention */
import React from "react";
import { render } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  it("Must display a title", () => {
    const screen = render(<Hero />);

    expect(screen.getByText(/collect digital art/i)).toBeInTheDocument();
    expect(
      screen.getByText(/buy and sell NFTs from the world's top artists/i)
    ).toBeInTheDocument();
  });
});
