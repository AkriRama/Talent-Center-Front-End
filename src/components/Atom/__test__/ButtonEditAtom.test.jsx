import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ButtonEditAtom from "../ButtomEditAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test ButtonEditAtom : 2");
describe("Test ButtonEditAtom", () => {
    const handleClick = jest.fn();
    beforeEach(() => {
        render(<ButtonEditAtom handleClick={handleClick} />)
    });

    test("check data-testid", () => {
        expect(screen.getByTestId("button-edit-element")).toBeInTheDocument();
    });

    test("check handleClick", () => {
        fireEvent.click(screen.getByTestId("button-edit-element"));
        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})