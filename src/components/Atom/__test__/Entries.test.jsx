import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import Entries from "../PaginationEntriesAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test Entries : 3");
describe("Test Entries", () => {
    beforeEach(() => {
        render(<Entries />)
    });

    test("check data-testid", () => {
        const testid = screen.getByTestId("footer-entries");
        expect(testid).toBeInTheDocument();
    });

    test("check text by data-testid", () => {
        const testid = screen.getByTestId("footer-entries");
        expect(testid).toHaveTextContent("Entries");
    });

    test("check iconAtom in Entries", () => {
        const testids = screen.getAllByTestId("footer-entries-button");
        testids.forEach(testid => {
            expect(testid).toBeInTheDocument();
        });
    });
})