import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import PaginationAtom from "../PaginationAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test PaginationAtom : 2");
describe("Test PaginationAtom", () => {
    const handleChange = jest.fn();

    beforeEach(() => {
        render(<PaginationAtom handleChangePage={handleChange} page={1} totalPage={10} />);
    });

    test("check data-testid and role", () => {
        expect(screen.getByTestId("footer-pagination")).toBeInTheDocument();
        expect(screen.getByRole("navigation")).toBeInTheDocument();
    });

    test("check handleChange", () => {
        const testid = screen.getByText("1");
        fireEvent.click(testid);
        expect(handleChange).toHaveBeenCalledTimes(1);
    })
})