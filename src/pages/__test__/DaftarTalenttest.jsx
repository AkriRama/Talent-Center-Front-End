import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, fireEvent, getByText, render, screen } from "@testing-library/react"
import ButtonAtom from '../../components/Atom/ButtonAtom';
import SearchAtom from '../../components/Atom/SearctAtom';
import SelectAtom from '../../components/Atom/SelectAtom';
import ImageAtom from '../../components/Atom/ImageAtom';
import BodyBoxAtom from '../../components/Atom/BodyBoxAtom';
import BoxActionAtom from '../../components/Atom/BoxActionAtom';
import IconButtonAtom from '../../components/Atom/IconButtonAtom';
import FooterBodyAtom from '../../components/Atom/FooterBodyAtom';
import Entries from '../../components/Atom/PaginationEntriesAtom';
import IconAtom from '../../components/Atom/IconAtom';
import PaginationAtom from '../../components/Atom/PaginationAtom';
import TalentCard from '../../components/TalentCard';
import { MemoryRouter } from 'react-router-dom';


afterEach(() => {
    cleanup();
});

describe("Test Daftar Talent", () => {
    const dataList = [
        {id: "1", name: "Web Developer"},
        {id: "2", name: "Back-End Developer"},
        {id: "3", name: "Front-Ed Developer"},
        {id: "4", name: "Software Developer"},
    ]

    beforeEach(() => {
        render(
            <MemoryRouter>
                <TalentCard 
                    employeeStatusData={dataList}
                    talentData={dataList}
                    talentLevelData={dataList}
                    talentStatusData={dataList}
                />
            </MemoryRouter>
        );
    });

    test("check all data-testid", () => {
        const filterIds = screen.getAllByTestId("filter-element");
        const bodyIds = screen.getAllByTestId("body-form");

        // TITLE
        expect(screen.getByTestId("title-element")).toBeInTheDocument();
        // BUTTON ADD
        expect(screen.getByTestId("button-add")).toBeInTheDocument();
        // FILTER BOX
        expect(screen.getByTestId("filter-box-element")).toBeInTheDocument();
        // FILTER
        filterIds.forEach(filterId => {
            expect(filterId).toBeInTheDocument();
        });
        // BODY BOX
        bodyIds.forEach(bodyId => {
            expect(bodyId).toBeInTheDocument();
        });
        // Footer
        expect(screen.getByTestId("footer-page")).toBeInTheDocument();
        
    })
})