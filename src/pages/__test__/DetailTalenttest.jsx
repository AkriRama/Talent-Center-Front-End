import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import TalentDetailCard from "../../components/TalentDetailCard";
import { MemoryRouter } from "react-router-dom";
import { dataTalent, positionList, skillsetList } from "../../components/ListData";

afterEach(() => {
    cleanup();
});

describe("Test DetaiTalent", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <TalentDetailCard position={positionList} skillSet={skillsetList} talentData={dataTalent}/>
            </MemoryRouter>
        );
    });

    test("check all data-testid", () => {
        expect(screen.getByTestId("button-back-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("title-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("image-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("name-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("box-action-employee-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("box-action-talent-detail-body")).toBeInTheDocument();
        const buttonEdits = screen.getAllByTestId("button-edit-detail-body");
        buttonEdits.forEach(buttonEdit => {
            expect(buttonEdit).toBeInTheDocument();
        });
        expect(screen.getByTestId("box-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("button-profile-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("button-statistic-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("box-body-talent-name-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("box-body-employee-number-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("box-body-gender-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("box-body-dateBirth-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("box-body-cv-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("box-body-experience-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("multiple-display-skillset-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("multiple-display-position-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("box-email-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("box-cellphone-detail-body")).toBeInTheDocument();
        expect(screen.getByTestId("box-video-url-detail-body")).toBeInTheDocument();
        expect(screen.queryByTestId("statistic-box-detail-body")).not.toBeInTheDocument();
    });


})