import React from 'react';
import '@testing-library/jest-dom';
import BodyBoxAtom from '../BodyBoxAtom';
import { cleanup, queryByTestId, render, screen, within } from '@testing-library/react';

afterEach(() => {
    cleanup();
});

console.log("Total Test BodyBoxAtom : 1")
describe("Check display text", () => {
    const experience = "1";
    const level = "Middle";
    const name = "Rudi";

    beforeEach(() => {
        render(<BodyBoxAtom experience={experience} level={level} name={name} />)
    });

    // If data-testid is hidden use queryByTestId
    test("check all data-testid", () => {
        const testid = screen.getByTestId("body-form");
        expect(testid).toBeInTheDocument();
        //TestImage
        expect(within(testid).getByTestId("image-body-form")).toBeInTheDocument();
        //TestImageText
        expect(within(testid).getByTestId("imageText-body-form")).toBeInTheDocument();
        //TestLevelText
        expect(within(testid).getByTestId("levelText-body-form")).toBeInTheDocument();
        //TestExperienceText
        expect(within(testid).queryByTestId("experienceText-body-form")).not.toBeInTheDocument();
        //TestTalentStatusBoxAction
        expect(within(testid).queryByTestId("body-action-talentStatus-body-form")).not.toBeInTheDocument();
        //TestEmployeeStatusBoxAction
        expect(within(testid).queryByTestId("body-action-employeeStatus-body-form")).not.toBeInTheDocument();
        //TestDetailIconButton
        expect(within(testid).queryByTestId("icon-button-detail-body-form")).not.toBeInTheDocument();
        //TestEditIconButton
        expect(within(testid).queryByTestId("icon-button-edit-body-form")).not.toBeInTheDocument();
    })
})