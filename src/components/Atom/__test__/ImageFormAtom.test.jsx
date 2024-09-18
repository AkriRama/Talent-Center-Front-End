import React from "react";
import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ImageFormAtom from "../ImageFormAtom";
import ImageAtom from "../ImageAtom";

afterEach(() => {
    cleanup();
});

jest.mock('react-dropzone', () => ({
    useDropzone: jest.fn().mockReturnValue({
      getInputProps: jest.fn(),
      getRootProps: jest.fn(),
    }),
  }));

console.log("Total Test ImageFormAtom : 4");
describe("Text Image in Body Add", () => {
    const mockGetInputProps = jest.fn();
    const mockGetRootProps = jest.fn();
    const mockHandleDeleteImage = jest.fn();

    const mockProps = {
        error: { imageFile: "Error message" },
        getInputProps: mockGetInputProps,
        getRootProps: mockGetRootProps,
        imageFile: "test-image-file-url",
        handleDeleteImage: mockHandleDeleteImage,
        isDragActive: false,
        label: "Foto Talent",
        talentPhoto: "",
    };

   beforeEach(() => {
        mockGetRootProps.mockReturnValue({ ref: jest.fn() });
        mockGetInputProps.mockReturnValue({ onChange: jest.fn() });
        render(<ImageFormAtom  
            {...mockProps}
        />)
    });

    test("test imageid in image", () => {
        const imageids = screen.getAllByTestId("image-form");
        imageids.forEach(imageid => {
            expect(imageid).toBeInTheDocument();
        });
    });

    test("test renderred image", () => {
        render(<ImageAtom image="test-image-url" testid="image-element2" />)
        const imageid = screen.getByTestId("image-element2");
        expect(imageid).toHaveAttribute("src", "test-image-url");
    });

    test("test dropzone", () => {
        const imageid = screen.getByTestId("image-input");
        const file = new File(['hello'], 'hello.png', { type: 'image/png' });
        fireEvent.change(imageid, { target: { files: [file] } });
        expect(mockGetInputProps).toHaveBeenCalled();
        expect(mockGetRootProps).toHaveBeenCalled();
    });

    test("test handle delete", () => {
        
        render(<ImageFormAtom imagePreview= "test-image-url"
            {...mockProps}
        />)
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(mockHandleDeleteImage).toHaveBeenCalledTimes(1);
    });
})