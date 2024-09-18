import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import PersetujuanTalentCard from "../../components/PersetujuanTalentCard";
import { talentApprovalData } from "../../components/ListData";

afterEach(() => {
    cleanup();
});

console.log("Total Test DaftarPersetujuanTalent : 1");
describe("Test DaftarPersetujuanTalent", () => {
    beforeEach(() => {
        render(<PersetujuanTalentCard talentApprovalData={talentApprovalData} />)
    });

    test("check all data-testid", () => {
        const filterIds = screen.getAllByTestId("filter-approval-body");
        expect(screen.getByTestId("title-approval-body")).toBeInTheDocument();
        expect(screen.getByTestId("filter-box-approval-body")).toBeInTheDocument();
        filterIds.forEach(filterId => {
            expect(filterId).toBeInTheDocument();
        });
        expect(screen.getByTestId("footer-approval-body")).toBeInTheDocument();
    });
})