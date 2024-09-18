import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import BoxDetailAtom from "../BoxDetailAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test BoxDetailAtom : 2")
describe("Test BoxDetailAtom", () => {
    const label = "detail";
    beforeEach(() => {
        render(<BoxDetailAtom label={label}/>)
    });

    test("check data-testid", () => {
        expect(screen.getByTestId("box-detail-element"));
    });

    test("check text by data-testid", () => {
        expect(screen.getByTestId("box-detail-element")).toHaveTextContent("detail");
    });
})