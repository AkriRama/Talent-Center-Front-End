import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render, screen, within } from "@testing-library/react";
import FooterBodyAtom from "../FooterBodyAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test FooterBodyAtom : 1");
describe("Test FooterBodyAtom", () => {
    beforeEach(() => {
        render(<FooterBodyAtom />)
    });

    test("check data-testid", () => {
        const testid = screen.getByTestId("footer-page");
        expect(testid).toBeInTheDocument();
        // TestEntries
        expect(within(testid).getByTestId("footer-entries")).toBeInTheDocument();
        // TestPagination
        expect(within(testid).getByTestId("footer-pagination")).toBeInTheDocument();
    });
})