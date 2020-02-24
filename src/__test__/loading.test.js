import React from "react";
import { render } from "@testing-library/react";
import Loading from "../components/loading/Loading";

describe("Loading Component", () => {
  it("is loading", () => {
    const wrapper = render(<Loading />);
    expect(wrapper.getAllByTestId("loader")).toHaveLength(1);
  });
});
