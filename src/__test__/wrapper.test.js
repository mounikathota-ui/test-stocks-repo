import React from "react";
import { render, getNodeText } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Wrapper from "../wrapper";

describe("StockTable", () => {
  test("Render Loading", () => {
    const { getAllByTestId } = render(
      <MemoryRouter>
        <Wrapper />
      </MemoryRouter>
    );
    const text = getAllByTestId("wrapper");
    expect(text).toHaveLength(1);
  });
});
