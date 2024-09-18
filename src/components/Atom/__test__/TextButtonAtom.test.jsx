import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import TextButtonAtom from "../TextButtonAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test TextButtonAtom : 2");
describe("Test TextButtonAtom", () => {
    const handleClick = jest.fn();
    const label = "edit talent";

    beforeEach(() => {
        render(<TextButtonAtom handleClickDialog={handleClick} isMd={false} label={label} />)
    });

    test("check data-testid", () => {
        expect(screen.getByTestId("text-button-element"));
    });

    //If isMd=true handleClick calls 0
    test("check label text and handleClick", () => {
        const testid = screen.getByTestId("text-button-element");
        expect(testid).toHaveTextContent("edit talent");
        
        //Simulate and Test handleClick
        fireEvent.click(testid);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
})