import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ButtonAtom from "../ButtonAtom";


afterEach(() => {
    cleanup();
});

console.log("Total Test in ButtonAtom : 3")
describe("Test Buton Atom", () => {
    const handleClick = jest.fn();
    const iconid = "icon-button-element";
    const textButton = "Tambah Talent";

    beforeEach(() => {
        render(<ButtonAtom handleClick={handleClick} iconid={iconid} textButton={textButton} />)
    });

    test("check data-testid", () => {
        const testid = screen.getByTestId("button-element");
        expect(testid).toBeInTheDocument();
        expect(testid).toHaveTextContent("Tambah Talent");
    });
    
    test("check role and handleClick", () => {
        const testid = screen.getByRole("button");
        fireEvent.click(testid);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    
    test("check icon in buttonAtom by data-testid", () => {
        const iconTestid = screen.getByTestId("icon-button-element");
        expect(iconTestid).toBeInTheDocument();
    });
    
});