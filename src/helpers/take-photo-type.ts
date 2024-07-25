export function getPhotoType(text: string | undefined) {
    if (!text) {
        return;
    }
    const lastDotIndex = text.lastIndexOf('.');

    if (lastDotIndex === -1) {
        return null;
    }

    const textAfterLastDot = text.slice(lastDotIndex + 1);
    return textAfterLastDot;
}
