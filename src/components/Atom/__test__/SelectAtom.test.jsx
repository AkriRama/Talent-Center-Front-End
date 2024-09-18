import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import SelectAtom from "../SelectAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test SelectAtom : 5");
describe("Test Select Atom", () => {
    const error = "Input Tidak Boleh Kosong";
    const dataList = [
        {id: "1", name: "Back-End Developer"},
        {id: "2", name: "Front-End Developer"},
        {id: "3", name: "Web Developer"},
    ];
    const handleChange = jest.fn();
    const label = "Select 1";

    beforeEach(() => {
        render(<SelectAtom 
            data={dataList}
            error={error}
            handleChange={handleChange} 
            isForm={true} 
            label={label} 
            value={"1"}
        />)
    });

    test("check data-testid", () => {
        const testid = screen.getByTestId("select-element");
        expect(testid).toBeInTheDocument();
    });
    
    test("check text by data-testid", () => {
        const testid = screen.getByText("Select 1");
        expect(testid).toBeInTheDocument();
    });
    
    test("check error text", () => {
        const testid = screen.getByText("Input Tidak Boleh Kosong");
        expect(testid).toBeInTheDocument();
    });
    
    test("check value by data-testid", () => {
        const testid = screen.getByTestId("select-element").querySelector("input");
        expect(testid).toHaveValue("1");
    });

    test("check handleChange", () => {
        const testid = screen.getByTestId("select-element").querySelector("input");
        fireEvent.click(testid);
        fireEvent.click(screen.getByText("Back-End Developer"));
        fireEvent.change(testid, { target: { value: "3" } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });
})