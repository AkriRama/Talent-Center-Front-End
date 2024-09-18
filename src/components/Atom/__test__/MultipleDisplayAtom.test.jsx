import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import MultipleDisplayAtom from "../MultipleDisplayAtom";
import { skillsetList } from "../../ListData";

afterEach(() => {
    cleanup();
});

console.log("Total Test MultipleDisplayAtom : 2");
describe("Test MultipleDisplayAtom", () => {

    beforeEach(() => {
        render(<MultipleDisplayAtom data={skillsetList} label="Skill Set" />)
    });

    test("check data-testid", () => {
        expect(screen.getByTestId("multiple-display-element")).toBeInTheDocument();
    });

    test("check label and data", () => {
        const testid = screen.getByTestId("multiple-display-element");
        expect(testid).toHaveTextContent("Skill Set");
        
        skillsetList.forEach(skill => {
            expect(screen.getByText(skill.skillName)).toBeInTheDocument();
        });
    });
})