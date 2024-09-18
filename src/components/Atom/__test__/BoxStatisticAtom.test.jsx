import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import BoxStatisticAtom from "../BoxStatisticAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test BoxStatisticAtom : 2");
describe("Test StatisitcAtom", () => {
    const label = "statistic";
    const value = "Total"
    beforeEach(() => {
        render(<BoxStatisticAtom label={label} value={value}/>)
    });

    test("check data-testid", () => {
        expect(screen.getByTestId("statistic-element")).toBeInTheDocument();
    });
    
    test("check text by data-testid", () => {
        const testid = screen.getByTestId("statistic-element");
        expect(testid).toHaveTextContent("statistic");
        expect(screen.getByText("Total")).toBeInTheDocument();
    });
})