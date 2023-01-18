import React from "react";

import { render, cleanup } from "@testing-library/react";

import Application from "components/Application";

import Appointment from "components/Appointment";

afterEach(cleanup);

// it("renders without crashing", () => {
//   render(<Application />);
// });

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

  xit("does something it is supposed to do", () => {
    // ...
  });

  xit("does something else it is supposed to do", () => {
    // ...
  });

  it("uses the mock implementation", () => {
    const fn = jest.fn((a, b) => 42);
    fn(1, 2);
    expect(fn).toHaveReturnedWith(42);
  });
});