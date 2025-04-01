export function isValidCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

    const calcCheckDigit = (base: string, factor: number) =>
        base.split('').reduce((sum, digit) => sum + parseInt(digit) * factor--, 0);

    const base = cpf.slice(0, 9);
    const digit1 = (calcCheckDigit(base, 10) * 10) % 11 % 10;
    const digit2 = (calcCheckDigit(base + digit1, 11) * 10) % 11 % 10;

    return cpf.endsWith(`${digit1}${digit2}`);
}

export function formatCPF(cpf: string): string {
    const digits = cpf.replace(/[^\d]+/g, '');
    if (digits.length !== 11) return cpf;
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`;
}