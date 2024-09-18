import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import DateAtom from "../DateAtom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

afterEach(() => {
    cleanup();
});

describe("Test Calender (Tanggal Lahir)", () => {
    const setValue = jest.fn();

    beforeEach(() => {
        render(
            <DateAtom setValue={setValue} value={dayjs("2024-06-21")} />
        )
    })

    test("check data-testid", () => {
        expect(screen.getByTestId("date-element")).toBeInTheDocument();
    })


    test("check text label", () => {
        const textlabel = screen.getByText("Tanggal Lahir");
        expect(textlabel).toBeInTheDocument();
    })

    test("check date component", () => {
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    })

    test('calls setValue on date change', async () => {
        // Temukan elemen input untuk DatePicker
        const dateTestid = screen.getByTestId('date-element');
        const dateInput = dateTestid.querySelector("input");

        // Simulasikan klik pada input untuk membuka kalender
        fireEvent.change(dateInput, { target: { value: "2024-07-26"} });
        expect(setValue).toHaveBeenCalledTimes(1);
      });
})