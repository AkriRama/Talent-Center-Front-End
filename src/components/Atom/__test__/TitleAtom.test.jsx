import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import TitleAtom from "../TitleAtom";


afterEach(() => {
    cleanup();
});

console.log("Total Test in TitleAtom : 1");
describe("Test Title Atom", () => {
    const title = "Daftar Talent";

    beforeEach(() => {
        render(<TitleAtom title={title} />)
    });

    test("check data-testid", () => {
        const testid = screen.getByTestId("title-element");
        expect(testid).toBeInTheDocument();
        expect(testid).toHaveTextContent("Daftar Talent");
    });
});