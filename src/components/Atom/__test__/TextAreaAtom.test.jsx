import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import TextAreaAtom from "../TextAreaAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test TextAreaAtom : 4");
describe("Text TextArea (Talent Description)", () => {
    const label = "textarea";
    const error = "Input Error";
    
    beforeEach(() => {
        render(<TextAreaAtom label={label} error={error}/>)
    })

    test("check textarea with id", () => {
        const testid = screen.getByTestId("textarea-form");
        expect(testid).toBeInTheDocument();
    })

    test("check textarea label and placeholder", () => {
        const textlabel = screen.getByText("textarea");
        expect(textlabel).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Write a description.../i)).toBeInTheDocument();
    })

    test("check toggle button", () => {
        const bold = screen.getByLabelText("bold");
        const italic = screen.getByLabelText("italic");
        const underlined = screen.getByLabelText("underlined");

        fireEvent.click(bold);
        fireEvent.click(italic);
        fireEvent.click(underlined);

        const textArea = screen.getByPlaceholderText("Write a description...");
        expect(textArea).toHaveStyle("font-weight: bold");
        expect(textArea).toHaveStyle("font-style: italic");
        expect(textArea).toHaveStyle("text-decoration: underline");
    })

    test("check error if there's no input", () => {
        expect(screen.getByText(/Input Error/i)).toBeInTheDocument();
    })
})