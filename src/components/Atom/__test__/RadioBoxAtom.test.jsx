import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import RadioBoxAtom from "../RadioBoxAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test RadioBoxAtom : 4");
describe("Test RadioBoxAtom", () => {
    const error = "Input tidak boleh kosong";
    const handleChange = jest.fn();
    const label = "Gender";

    beforeEach(() => {
        render(<RadioBoxAtom error={error} handleChangeGender={handleChange} label={label} />);
    });
    
    test("check data-testid", () => {
        expect(screen.getByTestId("radio-box-form")).toBeInTheDocument();
    });

    test("check label and erro", () => {
        expect(screen.getByText("Gender"));
        expect(screen.getByText("Input tidak boleh kosong"));
    });

    test("check radiobutton data-testid", () => {
        expect(screen.getByTestId("radio-button-male-form")).toBeInTheDocument();
        expect(screen.getByTestId("radio-button-female-form")).toBeInTheDocument();
    });

    test("check handleChange by data-testid", () => {
        const testid = screen.getByTestId("radio-box-form").querySelector("input");
        fireEvent.click(testid);
        expect(handleChange).toHaveBeenCalledTimes(1);
    })
})