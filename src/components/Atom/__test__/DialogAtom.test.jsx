import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import DialogAtom from "../DialogAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test DialogAtom : 5");
describe("Test DialogAtom", () => {
    const handleClose = jest.fn();
    const handleNavigate = jest.fn();

    beforeEach(() => {
        render(<DialogAtom 
            open={true} 
            handleClose={handleClose} 
            handleNavigate={handleNavigate}
            />
        )
    });

    test("check dialog by role", () => {
        expect(screen.queryByRole("dialog")).toBeInTheDocument();
    });

    test("check dialog content and actions", () => {
        expect(screen.getByText(/Konfirmasi Sebelum Batal/i)).toBeInTheDocument();
        expect(screen.getByText(/Apakah Anda yakin untuk batal tambah/i)).toBeInTheDocument();
        expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
        expect(screen.getByText(/Confirm/i)).toBeInTheDocument();
    });

    test('calls handleClose when Cancel button is clicked', () => {
        fireEvent.click(screen.getByText(/Cancel/i));
        expect(handleClose).toHaveBeenCalled();
    });
    
    test('calls handleNavigate when Confirm button is clicked', () => {
        fireEvent.click(screen.getByText(/Confirm/i));
        expect(handleNavigate).toHaveBeenCalledTimes(1);
    });
    
    test('calls handleClose when close icon is clicked', () => {
        fireEvent.click(screen.getByTestId("close-dialog"));
        expect(handleClose).toHaveBeenCalled();
    });
})