import { urlToFileAtom } from "./urlToFileAtom";

export const createFileObjectsAtom = async (url, filename) => {
    const files = [];
    if(url && filename) {
        const file = await urlToFileAtom(url, filename);
        files.push(file);
    }
    return files;
}