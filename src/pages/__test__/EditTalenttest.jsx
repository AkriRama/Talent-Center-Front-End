import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import EditTalentCard from '../../components/EditTalentCard';
import { talentApprovalData } from '../../components/ListData';

afterEach(() => {
    cleanup();
});

afterEach(() => {
    cleanup();
});

describe("Test EditTalent", () => {
    const dataList = [
        {id: "1", name: "Web Developer"},
        {id: "2", name: "Back-End Developer"},
        {id: "3", name: "Front-Ed Developer"},
        {id: "4", name: "Software Developer"},
    ];
    
    beforeEach(() => {
        render(
            <MemoryRouter>
                <EditTalentCard
                    employeeStatusData={dataList}
                    levelData={dataList}
                    positionData={dataList}
                    skillsetData={dataList}
                    talentData={talentApprovalData}
                />
            </MemoryRouter>
        )
    });

    test("check all data-testid", () => {
        expect(screen.getByTestId("button-back-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("title-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("image-form-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("text-input-talentName-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("text-input-employeeNumber-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("radio-box-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("date-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("text-input-talentDesc-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("doc-form-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("text-input-experience-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("select-level-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("multiple-select-position-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("multiple-select-skillset-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("text-input-email-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("text-input-cellphone-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("select-employeeStatus-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("select-talentAvailability-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("text-input-videoUrl-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("button-cancel-form-editTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("button-save-form-editTalent-body")).toBeInTheDocument();
    });
})