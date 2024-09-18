import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render, screen, within } from "@testing-library/react";
import StatisticAtom from "../StatisticAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test StatisticAtom : 2");
describe("Test StatisitcAtom", () => {
    beforeEach(() => {
        render(<StatisticAtom />)
    });

    test("check data-testid", () => {
        expect(screen.getByTestId("statistic-box-element")).toBeInTheDocument();
    });

    test("check all data-testid", () => {
        const testid = screen.getByTestId("statistic-box-element");
        //TestTotalRequest
        expect(within(testid).getByTestId("box-statistic-request")).toBeInTheDocument();
        //TestProjectComplete
        expect(within(testid).getByTestId("box-statistic-project")).toBeInTheDocument();
    });

    
})