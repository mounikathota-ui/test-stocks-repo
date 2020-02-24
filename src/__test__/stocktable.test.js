import React from "react";
import ReactDOM from "react-dom";
import { render, getByTestId } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { mount, shallow } from "enzyme";
import { StockTable } from "../components/stocktable/stocktable";
const { useState, useEffect } = React;

describe("StockTable Component", () => {
  beforeAll(() => jest.spyOn(React, "useEffect"));
  it("is stocktable", () => {
    const { container } = render(<StockTable />);
    const countValue = getByTestId(container, "loader");
    expect(countValue.textContent).toBe("");
  });
});
