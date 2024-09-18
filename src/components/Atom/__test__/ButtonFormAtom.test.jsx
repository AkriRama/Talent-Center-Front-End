import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import ButtonFormAtom from "../ButtonFormAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test ButtonFormAtom : 3");
describe("Test Button Save And Cancel", () => {
    const handleClickOpen = jest.fn();
    const handleClose = jest.fn();
    const handleNavigate = jest.fn();
    const open = true;
    beforeEach(() => {
        render(
            <ButtonFormAtom 
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                handleNavigate={handleNavigate}
                label="Batal"
                open={open}
                testid="button-cancel-form"
            />
        )
    });

    test("check text batal and simpan in button with testid", () => {
        expect(screen.getByText("Batal")).toBeInTheDocument();
        expect(screen.getByTestId("button-cancel-form")).toBeInTheDocument();
        expect(screen.getByTestId("button-cancel-form")).toHaveTextContent("Batal");
    });

    test("check handleClick and handleNavigate", () => {
        fireEvent.click(screen.getByTestId("button-cancel-form"));
        expect(handleClickOpen).toHaveBeenCalledTimes(1);
        const close = screen.getByTestId("button-cancel-dialog");
        fireEvent.click(close);
        expect(handleClose).toHaveBeenCalledTimes(1);
        fireEvent.click(screen.getByTestId("button-confirm-dialog"));
        expect(handleNavigate).toHaveBeenCalledTimes(1);
    });

    // If open=false dialog testid not found
    test("check dialog data-testid", () => {
        expect(screen.getByTestId("dialog-cancel-button-form"));
    });
})