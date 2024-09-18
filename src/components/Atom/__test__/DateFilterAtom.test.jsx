import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import DateFilterAtom from "../DateFilterAtom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";

afterEach(() => {
    cleanup();
});

console.log("Total Test DateFilterAtom : 2");
describe("Test DateFilterAtom", () => {
    const setDate = jest.fn();
    const setStartRequestDate = jest.fn();
    const setEndRequestDate = jest.fn();

    beforeEach(() => {
        render(<DateFilterAtom 
                    date={dayjs("2024-07-26")}
                    setDate={setDate}
                    setStartRequestDate={setStartRequestDate}
                    setEndRequestDate={setEndRequestDate}
                />
        )
    });

    test("check data-testid", () => {
        expect(screen.getByTestId("date-filter-element")).toBeInTheDocument();
    });

    test("check handleChange and value", () => {
        const dateTestid = screen.getByTestId("date-filter-element").querySelector("input");
        fireEvent.change(dateTestid, { target: { value: "07/27/2024" } });

        expect(setDate).toHaveBeenCalled()
        expect(setStartRequestDate).toHaveBeenCalled()
        expect(setEndRequestDate).toHaveBeenCalled()
    });
})
