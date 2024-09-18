import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BoxActionAtom from '../BoxActionAtom';

//ALL TEST

console.log("Total Test BoxActionAtom : 1");
describe("Check Box Text in Body Box", () => {
    const data = "Active"
    const label = "employeeStatus"
    const status = "Active"

    beforeEach(() => {
        render(<BoxActionAtom data={data} label={label} status={status}/>)
    })
    
    // test with simple style with "green, red, and grey"
    test("test color in box", () => {
        const box = screen.getByTestId("box-action-element");
        expect(box).toHaveStyle("background-color: rgb(48, 169, 82)");
    })
})