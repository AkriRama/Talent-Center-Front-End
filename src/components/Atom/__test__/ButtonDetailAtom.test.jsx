import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import ButtonDetailAtom from "../ButtonDetailAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test ButtonDetailAtom : 2");
describe("Test ButtonDetailAtom", () => {
    const handleClick = jest.fn();
    const label = "Profile";

    beforeEach(() => {
        render(<ButtonDetailAtom handleClick={handleClick} label={label} />)
    });

    test("check data-testid", () => {
        expect(screen.getByTestId("button-detail-element")).toBeInTheDocument();
    });

    test("check text and handleClick", () => {
        const testid = screen.getByTestId("button-detail-element");
        //TestText
        expect(testid).toHaveTextContent("Profile");
        //Simulate and Test handleClick
        fireEvent.click(within(testid).getByTestId("detail-button-element"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})