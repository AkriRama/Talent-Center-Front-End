import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render, screen, within } from "@testing-library/react";
import FilterBoxApprovalAtom from "../FilterBoxApprovalAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test FilterBoxApprobalAtom : 1");
describe("Test FilterBoxApprovalAtom", () => {
    beforeEach(() => {
        render(<FilterBoxApprovalAtom />)
    });

    test("check all data-testid", () => {
        const testid = screen.getByTestId("filter-box-approval");
        expect(testid).toBeInTheDocument();
        expect(within(testid).getByTestId("search-filter-approval")).toBeInTheDocument();
        expect(within(testid).getByTestId("search-box-filter-approval")).toBeInTheDocument();
        expect(within(testid).getByTestId("status-filter-approval")).toBeInTheDocument();
        expect(within(testid).getByTestId("sortBy-filter-approval")).toBeInTheDocument();
    });
})