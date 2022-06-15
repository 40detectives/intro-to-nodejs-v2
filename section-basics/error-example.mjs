import { readFile } from "fs/promises";

try {
    const result = await readFile(new URL('bad-file.name', import.meta.url), 'utf-8');
} catch (e) {
    console.error(e); // log error
    console.log("hello"); // no app crash: this line gets logged
}
