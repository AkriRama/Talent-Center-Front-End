import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import ImageAtom from "../ImageAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test ImageAtom : 2");
describe("Test ImageAtom", () => {
    const image = "nasigoreng.png";
    const alternative = "nasigoreng";

    beforeEach(() => {
        render(<ImageAtom alternative={alternative}  image={image} styleSX={{width: "100%"}} />)
    });

    test("check data-testid", () => {
        const testid = screen.getByTestId("image-element");
        expect(testid).toBeInTheDocument();
    });

    test("check image, alternative and style", () => {
        const testid = screen.getByTestId("image-element");
        expect(testid).toHaveAttribute("src", image);
        expect(testid).toHaveAttribute("alt", alternative);
        expect(testid).toHaveStyle({ width: "100%" });
    });


})