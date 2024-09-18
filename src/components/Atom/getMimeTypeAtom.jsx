export const getMimeTypeAtom = (filename) => {
    const extension = filename.split(".").pop().toLowerCase();
    const mimeTypes = {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        pdf: "application/pdf",
        doc: "text/plain",
    };
    return mimeTypes[extension] || "aplication/octet-stream";
}