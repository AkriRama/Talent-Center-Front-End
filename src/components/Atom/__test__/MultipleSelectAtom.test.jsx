import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import MultipleSelectAtom from "../MultipleSelectAtom";
import { positionList } from "../../ListData";

afterEach(() => {
    cleanup();
});

console.log("Total Test MultipleSelectAtom : 5");
describe("Text MultipleSelect (Posisi, Skill Set)", () => {
    const handleChange = jest.fn();
    const error = "Input tidak boleh kosong";
    const label = "Posisi";
    
    const listData = [
        {positionId: '1', positionName: "Web Developer"},
        {positionId: '2', positionName: "Front-End Developer"},
        {positionId: '3', positionName: "Back-End Developer"},
    ]

    beforeEach(() => {
        render(
            <MultipleSelectAtom 
                data={listData} 
                error={error} 
                // error={null} 
                handleChange={handleChange} 
                label={label} 
                testid="multiple-select-form2" 
                // value={["1", "3"]} 
                value={[]} 
            />
        )
    });

    test("check multipleselect with testid", () => {
        const testid = screen.getByTestId("multiple-select-form2");
        expect(testid).toBeInTheDocument();
    });

    // if value not empty than "masukkan posisi" is hidden
    test("check label and placeholder", () => {
        expect(screen.getByText("Posisi")).toBeInTheDocument();
        expect(screen.getByText("Masukkan Posisi")).toBeInTheDocument();
    });

    test("check value in multiple chips", () => {
        render(
            <MultipleSelectAtom 
                data={listData} 
                error={null} 
                handleChange={handleChange} 
                label={label} 
                testid="multiple-select-form3" 
                value={["1", "3"]} 
                // value={[]} 
            />
        )
        const testid = screen.getByTestId("multiple-select-form3");
        expect(testid).toHaveTextContent("Web Developer");
        expect(testid).toHaveTextContent("Back-End Developer");
    })

    test("check error text", () => {
        expect(screen.getByTestId("multiple-select-form2")).toHaveTextContent("Input tidak boleh kosong");
    });

    test("check handleChange", () => {
        render(
            <MultipleSelectAtom 
                data={listData} 
                error={null} 
                handleChange={handleChange} 
                label={label} 
                testid="multiple-select-form3" 
                value={["1", "3"]} 
            />
        )
        const testid = screen.getByTestId("multiple-select-form3").querySelector("input");
        fireEvent.click(testid);

        const select = screen.getByText("Web Developer");
        fireEvent.click(select);
        fireEvent.change(testid, { target: { value: "1" } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    })
})