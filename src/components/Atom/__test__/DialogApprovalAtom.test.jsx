import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import DialogApprovalAtom from "../DialogApprovalAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test DialogApprovalAtom : 4");
describe("Test DialogApprovalAtom", () => {
    const handleClose = jest.fn();
    const handleSuccesStatus = jest.fn();
    beforeEach(() => {
        render(<DialogApprovalAtom handleClose={handleClose} handleSuccesStatus={handleSuccesStatus} open={true} label="reject"/>)
    });

    // if open=false data-testid is not found
    test("check data-testid", () => {
        expect(screen.getByTestId("dialog-approval-element")).toBeInTheDocument();
    });

    test("check icon data-testid", () => {
        const testid = screen.getByTestId("dialog-approval-element");
        expect(within(testid).getByTestId("icon-button-dialog-approval")).toBeInTheDocument();
    });

    // test("check label and placeholder by testid", () => {
    test("check label and textarea data-testid by testid parent", () => {
        const testid = screen.getByTestId("dialog-approval-element");
        expect(testid).toHaveTextContent("Apakah Anda Yakin ingin reject ini?");
        expect(within(testid).getByTestId("textArea-approval")).toBeInTheDocument();
    });

    test("check button data-testid and handleClick", () => {
        render(<DialogApprovalAtom handleClose={handleClose} handleSuccesStatus={handleSuccesStatus} open={true} label="approve" testid="dialog-approval-element2"/>)
        const testid = screen.getByTestId("dialog-approval-element2");
        const cancelButtonID = within(testid).getByTestId("button-dialog-cancel-approval");
        const arButtonId = within(testid).getByTestId("button-dialog-AR-approval");
        expect(cancelButtonID).toBeInTheDocument();
        expect(arButtonId).toBeInTheDocument();

        //Simulate and Test handleClick
        fireEvent.click(cancelButtonID);
        expect(handleClose).toHaveBeenCalled();
        fireEvent.click(arButtonId);
        expect(handleSuccesStatus).toHaveBeenCalledTimes(1);
    });
})