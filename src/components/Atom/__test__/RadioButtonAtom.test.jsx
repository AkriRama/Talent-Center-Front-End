import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import RadioButtonAtom from "../RadioButtonAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test RadioButtonAtom : 4");
describe("Test Radio Button (Jenis Kelamin)", () => {
    const isChecked = true;
    const handleClick = jest.fn();
    const value = "Laki-laki";

    beforeEach(() => {
        render(<RadioButtonAtom isChecked={true} handleClick={handleClick} value={value} />)
    })

    test("check radiobutton with id", () => {
        const radiobutton = screen.getByTestId("radio-button-element");
        expect(radiobutton).toBeInTheDocument();
    })

    test("check label radiobutton", () => {
        const label = screen.getByLabelText("Laki-laki");
        expect(label).toBeInTheDocument();
    })

    test("check handleclick when clicked", () => {
        const radiobutton = screen.getByTestId("radio-button-element");
        fireEvent.click(radiobutton);
        expect(handleClick).toHaveBeenCalled();
    })

    test("check the correct checked", () => {
        const radioLabel = screen.getByLabelText("Laki-laki");
        expect(radioLabel).toBeChecked();
    })
})