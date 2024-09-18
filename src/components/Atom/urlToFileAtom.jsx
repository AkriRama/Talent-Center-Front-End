import { getMimeTypeAtom } from "./getMimeTypeAtom";

export const urlToFileAtom = async (url, filename) => {
    const response = await fetch(url);
    const blob = await response.blob();
    const mimeType = response.headers.get('Content-Type') || getMimeTypeAtom(filename);
    return new File([blob], filename, { type: mimeType });
};
