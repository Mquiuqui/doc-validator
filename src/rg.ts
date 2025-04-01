export function isValidRG(rg: string): boolean {
    const cleaned = rg.replace(/[^\dXx]/g, '').toUpperCase();
    if (!/^[0-9]{8}[0-9X]$/.test(cleaned)) return false;

    const numbers = cleaned.split('').map((c, i) => (c === 'X' ? 10 : +c));
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += numbers[i] * (9 - i);
    }
    return sum % 11 === 0;
}

export function formatRG(rg: string): string {
    const digits = rg.replace(/[^\dXx]/g, '').toUpperCase();
    if (digits.length !== 9) return rg;
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}-${digits[8]}`;
}
