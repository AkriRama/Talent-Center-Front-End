import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import IconAtom from "../IconAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test IconAtom : 3");
describe("Test IconAtom", () => {
    const entries = 8;
    const handleChange = jest.fn();
    beforeEach(() => {
        render(<IconAtom entries={entries} handleChange={handleChange} value={entries} />)
    });

    test("check data-testid", () => {
        const testid = screen.getByTestId("footer-entries-button");
        expect(testid).toBeInTheDocument();
    });

    test("check handleChange", () => {
        const testid = screen.getByTestId("footer-entries-button");
        fireEvent.click(testid);
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test("check text by data-testid", () => {
        const testid = screen.getByTestId("footer-entries-button");
        expect(testid).toHaveTextContent("8");
    })


})