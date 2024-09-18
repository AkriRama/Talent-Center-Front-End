import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import FilterAtom from "../FilterAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test FilterAtom : 1");
describe("Test FilterAtom", () => {
    const filterList = [
        "Talent",
        "Level",
        "Pengalaman",
        "Status",
        "Kepegawaian",
        "Action",
    ];

    beforeEach(() => {
        render(<FilterAtom data={filterList}/>);
    });

    test("check data-testid", () => {
        const testids = screen.getAllByTestId("filter-element");
        testids.forEach(testid => {
            expect(testid).toBeInTheDocument();
        });
    });
})