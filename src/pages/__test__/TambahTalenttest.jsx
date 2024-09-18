import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';
import TambahTalentCard from '../../components/TambahTalentCard';
import { MemoryRouter } from 'react-router-dom';

afterEach(() => {
    cleanup();
});

describe("Test Tambah Talent", () => {
    const dataList = [
        {id: "1", name: "Web Developer"},
        {id: "2", name: "Back-End Developer"},
        {id: "3", name: "Front-Ed Developer"},
        {id: "4", name: "Software Developer"},
    ];
    
    beforeEach(() => {
        render(
            <MemoryRouter>
                <TambahTalentCard
                    employeeStatusData={dataList}
                    levelData={dataList}
                    positionData={dataList}
                    skillsetData={dataList}
                />
            </MemoryRouter>
        )
    });

    test("check all data-testid", () => {
        expect(screen.getByTestId("button-back-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("title-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("image-form-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("text-input-talentName-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("text-input-employeeNumber-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("radio-box-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("date-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("text-input-talentDesc-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("doc-form-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("text-input-experience-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("select-level-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("multiple-select-position-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("multiple-select-skillset-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("text-input-email-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("text-input-cellphone-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("select-employeeStatus-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("select-talentAvailability-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("text-input-videoUrl-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("button-cancel-form-addTalent-body")).toBeInTheDocument();
        expect(screen.getByTestId("button-save-form-addTalent-body")).toBeInTheDocument();
    });
})