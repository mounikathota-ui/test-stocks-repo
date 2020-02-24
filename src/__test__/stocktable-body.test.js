import React from "react";
import { render, getByTestId, fireEvent } from "@testing-library/react";
import StockTableBody from "../components/stocktable/stocktable-body";
import "@testing-library/jest-dom/extend-expect";
import { mockStockNames } from "./__mocks__/stockNames";

it("renders correctly", () => {
  const { getAllByTestId } = render(
    <table>
      <tbody>
        <StockTableBody stockNames={mockStockNames.symbolsList} />
      </tbody>
    </table>
  );

  expect(getAllByTestId("table-row-1")).toHaveLength(1);
});
it("renders correctly after click", () => {
  const { getAllByTestId } = render(
    <table>
      <tbody>
        <StockTableBody stockNames={mockStockNames.symbolsList} />
      </tbody>
    </table>
  );
  // fireEvent(
  //   getAllByTestId("table-row-1"),
  //   new MouseEvent("click", {
  //     bubbles: true,
  //     cancelable: true
  //   })
  // );

  expect(getAllByTestId("table-row-1")).toHaveLength(1);
});
