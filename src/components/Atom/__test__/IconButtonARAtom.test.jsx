import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import IconButtonARAtom from "../IconButtonARAtom";

afterEach(() => {
    cleanup();
});

const data = {
    approvalStatus: "On Progress", 
    talentRequetId: "1",
};
describe("Test IconButtonARAtom", () => {
    const handleClick = jest.fn();

    beforeEach(() => {
        render(<IconButtonARAtom 
            approvalStatus="On Progress"
            data={data} 
            handleClick={handleClick} 
            label="Approve" 
            />
        );
    });

    test("check data-testid", () => {
        expect(screen.getByTestId("icon-button-AR-element")).toBeInTheDocument();
    });

    test("check label and handleClick by testid", () => {
        const testid = screen.getByTestId("icon-button-AR-element");
        expect(within(testid).getByTestId("icon-AR-approve")).toBeInTheDocument();
        fireEvent.click(testid);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    //icon data-testid depend on label
    test("check icon data-testid", () => {
        const testid = screen.getByTestId("icon-button-AR-element");
        expect(within(testid).getByTestId("icon-AR-approve")).toBeInTheDocument();
    });
})