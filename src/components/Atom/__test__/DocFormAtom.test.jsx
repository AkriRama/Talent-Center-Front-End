import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import DocFormAtom from "../DocFormAtom";

afterEach(() => {
    cleanup();
});

console.log("Total Test DocFormAtom : 5");
describe("Test Document Field (Upload CV)", () => {
    const getInputFile = jest.fn();
    const getRootFile = jest.fn();
    const handleDeleteDocument = jest.fn();

    beforeEach(() => {
        render(<DocFormAtom
                error={{ cvFileName: null}}
                documentFile={null}
                documentPreview={null}
                getInputFile={getInputFile}
                getRootFile={getRootFile}
                isDragFileActive={false}
                handleDeleteDocument={handleDeleteDocument}
                label="CV Preview"
            />)
    });

    test("check document field with testid", () => {
        const docIds = screen.getAllByTestId("document-form");
        docIds.forEach(docId => {
            expect(docId).toBeInTheDocument();
        });
    });

    test("check label and text if drag and drop", () => {
        expect(screen.getByText(/Upload CV/i)).toBeInTheDocument();
        expect(screen.getByText(/Drag and drop files here or click to upload/i)).toBeInTheDocument();
    });

    test("check file preview and button delete if documentPreview is there", () => {
        const getInputFile = jest.fn();
        const getRootFile = jest.fn();
        const handleDeleteDocument = jest.fn();

        render(<DocFormAtom 
            error={{ cvFileName: null}}
            documentFile={{ name: "sample.pdf" }}
            documentPreview={<div>PDF Preview</div>}
            getInputFile={getInputFile}
            getRootFile={getRootFile}
            isDragFileActive={false}
            handleDeleteDocument={handleDeleteDocument}
            label="CV Preview"
        />)

        expect(screen.getByText(/CV Preview/i)).toBeInTheDocument();
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();

        fireEvent.click(button);
        expect(handleDeleteDocument).toHaveBeenCalled();
    });

    test("check error if field is empty", () => {
        const getInputFile = jest.fn();
        const getRootFile = jest.fn();
        const handleDeleteDocument = jest.fn();
    
        render(
            <DocFormAtom
                error={{ cvFilename: 'File is required' }}
                documentFile={null}
                documentPreview={null}
                getInputFile={getInputFile}
                getRootFile={getRootFile}
                isDragFileActive={false}
                handleDeleteDocument={handleDeleteDocument}
                label="CV Preview"
            />
        );

        // Check if the error message is displayed
        expect(screen.getByText(/File is required/i)).toBeInTheDocument();
    });

    test('handles drag and drop state', () => {
        const getInputFile = jest.fn();
        const getRootFile = jest.fn();
        const handleDeleteDocument = jest.fn();
        
        render(
            <DocFormAtom
                // error={{ cvFilename: null }}
                error={{ cvFilename: null }}
                documentFile={null}
                documentPreview={null}
                getInputFile={getInputFile}
                getRootFile={getRootFile}
                isDragFileActive={true}
                handleDeleteDocument={handleDeleteDocument}
                label="CV Preview"
            />
        );
    
        // Check if the drag-and-drop message is displayed
        expect(screen.getByText(/Drop file here/i)).toBeInTheDocument();
    });
})