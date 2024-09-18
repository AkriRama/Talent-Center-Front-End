import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import ButtonBackAtom from "../ButtonBackAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test ButtonBackAtom : 2");
describe("Test ButtonBackAtom", () => {
    const handleNavigate = jest.fn();
    beforeEach(() => {
        render(<ButtonBackAtom handleNavigate={handleNavigate} />)
    });

    test("check data-testid", () => {
        expect(screen.getByTestId("button-back-element")).toBeInTheDocument();
    });

    test("check text, iconid and handleChange by data-testid", () => {
        const testid = screen.getByTestId("button-back-element");
        //TestText
        expect(testid).toHaveTextContent("Kembali");
        //TestIcon
        expect(within(testid).getByTestId("icon-button-back")).toBeInTheDocument();
        
        //Simulate and Test handleNavigate
        fireEvent.click(testid);
        expect(handleNavigate).toHaveBeenCalledTimes(1);
    });
})