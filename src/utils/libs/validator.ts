export function isValidHexColor(color: string): boolean {
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexRegex.test(color);
}

// Checks if a string has only numbers
export const isNumbersOnly = (text: string): boolean => {
    const regex = /^\d+$/
    return regex.test(text)
}

