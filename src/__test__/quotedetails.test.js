import React from "react";
import ReactDOM from "react-dom";
import { render, getByTestId, fireEvent } from "@testing-library/react";
import { renderHook, act } from "@testing-library/react-hooks";
import { mount, shallow } from "enzyme";
import QuoteDetails from "../components/stocktable/quotedetails";
import getElementWithContext from "react-test-context-provider";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import { mockStockNames } from "./__mocks__/stockNames";
import { ContextProvider } from "../Provider";
// import { ContextProvider } from "../../../";

const { useState, useEffect } = React;

// const modalRoot = document.createElement("div");
// modalRoot.setAttribute("id", "modal-root");
// document.body.appendChild(modalRoot);

// const Modal = ({ onClose, children }) => {
//   const el = document.createElement("div");

//   useEffect(() => {
//     modalRoot.appendChild(el);

//     return () => modalRoot.removeChild(el);
//   });
//   var contextObject = { isModalOpen: true }; // the context you want to provide to the children components
//   var reactElement = getElementWithContext(contextObject, <QuoteDetails />); // returns the react element as rendered with the given context

//   return ReactDOM.render(reactElement, el);
// };
describe("QuoteDetails Component", () => {
  test("NameConsumer shows default value", () => {
    // const tree = (
    //   <ContextProvider.Provider value={{ isModalOpen: true }}>
    //     <QuoteDetails />
    //   </ContextProvider.Provider>
    // );
    // const { getByText } = render(tree);
    // expect(getByText(/^My Name Is:/)).toHaveTextContent("My Name Is: C3P0");
    // const { getByText } = render(<QuoteDetails />);
    // expect(getByText(/^My Name Is:/)).toHaveTextContent("My Name Is: Unknown");
    // const handleClose = jest.fn();
    // // Act
    // const { getByText } = render(
    //   <Modal onClose={handleClose}>
    //     <div>test</div>
    //   </Modal>
    // );
    /// // Assert
    // expect(getByText("test")).toBeTruthy();
    // // Act
    // fireEvent.click(getByText(/close/i));
    // // Assert
    // expect(handleClose).toHaveBeenCalledTimes(1);
  });
});

it("renders correctly when there are no items", () => {
  const user = { isModalOpen: true };
  const { getAllByTestId } = render(
    <ContextProvider.Provider value={user}>
      <QuoteDetails quoteDetails={mockStockNames.symbolsList} />
    </ContextProvider.Provider>
  );

  expect(getAllByTestId("table-quotes")).toHaveLength(1);
});
