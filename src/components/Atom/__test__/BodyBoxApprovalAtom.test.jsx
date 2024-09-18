import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render, screen, within } from "@testing-library/react";
import BodyBoxApprovalAtom from "../BodyBoxApprovalAtom";
import { data } from "../../ListData";

afterEach(() => {
    cleanup();
});

console.log("Total Test BodyBoxApprovalAtom : 1");
describe("Test BodyBoxApprovalAtom", () => {
    beforeEach(() => {
        render(<BodyBoxApprovalAtom data={data} isOpen={true}/>)
    });

    test("check all data-testid", () => {
        const testid = screen.getByTestId("body-box-approval");
        expect(within(testid).getByTestId("text-button-approval")).toBeInTheDocument();
        expect(screen.queryByTestId("dialog-button-approval")).not.toBeInTheDocument();
        expect(screen.getByTestId("text-request-date-approval")).toBeInTheDocument();
        
        //HIDDEN data-testid
        expect(screen.queryByTestId("text-talentName-approval")).not.toBeInTheDocument();
        expect(screen.queryByTestId("box-action-AR-approval")).not.toBeInTheDocument();
        expect(screen.queryByTestId("icon-button-AR-approve-approval")).not.toBeInTheDocument();
        expect(screen.queryByTestId("dialog-approve-approval")).not.toBeInTheDocument();
        expect(screen.queryByTestId("icon-button-AR-reject-approval")).not.toBeInTheDocument();
        expect(screen.queryByTestId("dialog-reject-approval")).not.toBeInTheDocument();

    });
})