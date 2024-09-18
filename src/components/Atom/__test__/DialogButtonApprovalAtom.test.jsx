import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import DialogButtonApprovalAtom from "../DialogButtonApprovalAtom";
import { dataApproval } from "../../ListData";

afterEach(() => {
    cleanup();
});

console.log("Total Test DialogButtonApprovalAtom : 3");
describe("Test DialogButtonApprovalAtom", () => {
    const handleClickApprove = jest.fn();
    const handleClose = jest.fn();
    beforeEach(() => {
        render(<DialogButtonApprovalAtom 
            approve={true} 
            data={dataApproval} 
            dataApproval="On Progress" 
            handleClickApprove={handleClickApprove}
            handleClose={handleClose} 
            open={true} 
            reject={true} 
            />
        );
    });

    test("check data-testid", () => {
        expect(screen.getByTestId("dialog-button-approval-element")).toBeInTheDocument();
    });

    test("check label, icon data-testid and handleClose", () => {
        const testid = screen.getByTestId("dialog-button-approval-element");
        expect(testid).toHaveTextContent("Action");
        expect(within(testid).getByTestId("icon-button-close-dialog-button-approval")).toBeInTheDocument();

        //Simulate and Test handleClose
        fireEvent.click(within(testid).getByTestId("icon-button-close-dialog-button-approval"));
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    test("check all data-testid", () => {
        const testid = screen.getByTestId("dialog-button-approval-element");
        expect(within(testid).getByTestId("icon-button-AR-cancel-approval")).toBeInTheDocument();
        expect(screen.getByTestId("dialog-approval-approve-button")).toBeInTheDocument();
        expect(within(testid).getByTestId("icon-button-AR-approval")).toBeInTheDocument();
        expect(screen.getByTestId("dialog-approval-reject-button")).toBeInTheDocument();
    });
})