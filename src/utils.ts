// https://stackoverflow.com/a/6969486
export function escapeRegexString(text: string): string {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// https://stackoverflow.com/questions/38866071/javascript-replace-method-dollar-signs
export function fixDollarSigns(text: string): string {
    return text.split("$$").join("$$$");
}

// https://stackoverflow.com/a/52171480
export function cyrb53(str: string, seed: number = 0): string {
    let h1 = 0xdeadbeef ^ seed,
        h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 =
        Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
        Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 =
        Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
        Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
}
