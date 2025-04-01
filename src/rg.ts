export function isValidRG(rg: string): boolean {
    const cleaned = rg.replace(/[^\dXx]/g, '').toUpperCase();

    if (/^0+$/.test(cleaned.replace(/X/i, '0'))) return false;

    return /^[0-9]{8}[0-9X]$/.test(cleaned);
}

export function formatRG(rg: string): string {
    const digits = rg.replace(/[^\dXx]/g, '').toUpperCase();
    if (digits.length !== 9) return rg;
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}-${digits[8]}`;
}
