import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import IconButtonAtom from "../IconButtonAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Tesr IconButtonAtom : 3");
describe("Test IconButtonAtom", () => {
    const label = "detail";
    const handleNavigate = jest.fn();
    const talentId = 1;

    beforeEach(() => {
        render(<IconButtonAtom handleNavigate={handleNavigate} label={label} talentId={talentId}/>);
    });

    test("check data-testid", () => {
        const testid = screen.getByTestId("icon-button-element");
        expect(testid).toBeInTheDocument();
    });
    
    test("check icon by label and data-testid", () => {
        const testid = screen.getByTestId("icon-button-element");
        const iconId = within(testid).getByTestId("visibility");
        expect(iconId).toBeInTheDocument();
    });

    test("check handleClick", () => {
        const testid = screen.getByTestId("icon-button-element");
        fireEvent.click(testid);
        expect(handleNavigate).toHaveBeenCalledTimes(1);
    });

})