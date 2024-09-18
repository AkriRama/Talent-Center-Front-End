import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import FilterBoxAtom from "../FilterBoxAtom";

afterEach(() => {
    cleanup();
});


console.log("Total Test FilterBoxAtom : 1");
describe("Test FilterBoxAtom", () => {
    const dataList = [
        {id: "1", name: "Back-End Developer"},
        {id: "2", name: "Front-End Developer"},
        {id: "3", name: "Web Developer"},
    ];

    beforeEach(() => {
        render(<FilterBoxAtom 
            talentLevelData={dataList}
            employeeStatusData={dataList}
            talentStatusData={dataList}
        />)
    });

    test("check data-testid", () => {
        const testid = screen.getByTestId("filter-box-element");
        expect(testid).toBeInTheDocument();
        //TestSearch (Pencarian)
        expect(screen.getByTestId("search-filter"));
        //TestLevel
        expect(screen.getByTestId("level-select-filter"));
        //TestExperience
        expect(screen.getByTestId("experience-select-filter"));
        //TestStatus
        expect(screen.getByTestId("status-select-filter"));
        //TestEmployee
        expect(screen.getByTestId("employee-select-filter"));
        //TestSortBy
        expect(screen.getByTestId("sortBy-select-filter"));
    })
})