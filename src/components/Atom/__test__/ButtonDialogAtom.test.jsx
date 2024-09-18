import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ButtonDialogAtom from "../ButtonDialogAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test ButtonDialogAtom : 2");
describe("Test ButtonDialogAtom", () => {
    const handleClose = jest.fn();
    const handleClick = jest.fn();
    beforeEach(() => {
        render(<ButtonDialogAtom 
            handleClose={handleClose}
            handleSuccesStatus={handleClick}
            label="approve" 
            reason="Tidak ada alasan" 
            />
        )
    });

    test("check data-testid", () => {
        expect(screen.getByTestId("button-dialog-element")).toBeInTheDocument();
    });

    test("check label by testid", () => {
        const testid = screen.getByTestId("button-dialog-element");

        // Test label and reason
        expect(testid).toHaveTextContent("approve");
        
        // Test and simulate handleClose and handleClick
        fireEvent.click(testid);
        expect(handleClose).toHaveBeenCalledTimes(1);
    });
    
})