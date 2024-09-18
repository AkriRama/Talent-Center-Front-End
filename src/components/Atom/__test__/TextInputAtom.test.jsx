import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import TextInputAtom from "../TextInputAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test TextInputAtom : 5");
describe("Test Text Input (Nama Talent, Nomor Induk Pegawai, Pengalaman, Email, No Hp, Video Url)", () => {
    const error = "Input Kosong";
    const handleChange = jest.fn();
    const text = "Nama Talent";
    const value = "talent"

    beforeEach(() => {
        render(<TextInputAtom error={error} handleChange={handleChange} label={text} value={value}/>)
    })

    test("check text label in text input", () => {
        const label = screen.getByText("Nama Talent");
        expect(label).toBeInTheDocument();
    })

    test("check text input with testid and error text", () => {
        const textinput = screen.getByTestId("textinput-form");
        expect(textinput).toBeInTheDocument();
        expect(textinput).toHaveTextContent(error);
    })

    test("check placeholder and value in text input", () => {
        const textInput = screen.getByPlaceholderText(`Masukan ${text}`);
        expect(textInput).toBeInTheDocument();
        expect(textInput).toHaveValue(value);
    });

    test("check text error when value undefined", () => {
        const textError = screen.getByText("Input Kosong");
        expect(textError).toBeInTheDocument();
    })

    test("check handlechange in textinput", () => {
        const textInput = screen.getByPlaceholderText(`Masukan ${text}`);
        // Simulasi perubahan nilai di TextField
        fireEvent.change(textInput, { target: { value: 'New Value' } });

        // Memeriksa apakah handleChange dipanggil dengan nilai yang benar
        expect(handleChange).toHaveBeenCalled();
        expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
    })

})
