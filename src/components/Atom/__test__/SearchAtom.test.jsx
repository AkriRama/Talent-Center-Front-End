import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import SearchAtom from "../SearctAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test in SearchAtom : 7");
describe("Test Search Atom", () => {
    const handleChange = jest.fn();
    const handleApplySearch = jest.fn();

    beforeEach(() => {
        render(<SearchAtom 
            handleApplySearch={handleApplySearch}
            handleChange={handleChange} 
            value="value1" 
        />)
    });

    test("check placeholder with data-testid", () => {
        const testid = screen.getByTestId("search-element").querySelector("input");
        expect(testid).toHaveAttribute("placeholder", "Cari..");
    });

    test("check handleChange", () => {
        const testid = screen.getByTestId("search-element").querySelector("input");
        fireEvent.change(testid, { target: { value: "New Value" } });
        expect(handleChange).toHaveBeenCalledTimes(1);
        
    });
    
    test("check handleKey", () => {
        const testid = screen.getByTestId("search-element").querySelector("input");
        fireEvent.keyDown(testid, { key: 'Enter' });
        expect(testid.value).toBe("value1");
    });
    
    test("check handleApplySearch", () => {
        const iconButton = screen.getByTestId("search-icon-button-element");
        fireEvent.click(iconButton);
        expect(handleApplySearch).toHaveBeenCalledTimes(1);
    });
    
    test("check value", () => {
        expect(screen.getByTestId("search-element").querySelector("input")).toHaveValue("value1");
    });
    
    test("check iconbutton in SearchAtom", () => {
        const search = screen.getByTestId("search-element");
        const iconButton = within(search).getByTestId("search-icon-button-element");
        expect(iconButton).toBeInTheDocument();
    });
    
    test("check icon in SearchAtom", () => {
        const iconButton = screen.getByTestId("search-icon-button-element");
        const icon = within(iconButton).getByTestId("search-icon-element");
        expect(icon).toBeInTheDocument();
    });
})